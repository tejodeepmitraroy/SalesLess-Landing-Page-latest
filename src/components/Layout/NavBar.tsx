import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import SideNav from "../navigations/SideNav";

const NavBar = () => {
  return (
    <section className="fixed top-0 z-50 py-5  flex w-full items-center justify-center bg-zinc-50 opacity-90  border-b border-zinc-300  pt-4">
      <nav className="flex mx-auto w-full max-w-6xl px-6 lg:px-0">
        <section className="flex w-full items-center  justify-start gap-8 ">
          <div className="w-fit flex  items-center gap-3">
            <Image src="/logo/logo.png" alt="Logo" width={30} height={30} />
            <Link href="/" className="text-2xl font-semibold">
              SalesLess
            </Link>
          </div>
          {/*Navbar Links */}
          <div className="w-fit hidden lg:block">
            <ul className="flex gap-5 text-gray-500">
              <li>
                <Link href="/">Why SalesLess?</Link>
              </li>
              <li>
                <Link href="/">Features</Link>
              </li>
              <li>
                <Link href="/">Pricing</Link>
              </li>
              <li>
                <Link href="/">About</Link>
              </li>
            </ul>
          </div>
        </section>
        <div className="   justify-end gap-3 lg:flex hidden">
          <Link href="https://dashboard.salesless.app/">
            <Button variant="ghost">
              Log In <ArrowUpRight className="size-5" />
            </Button>
          </Link>
          <Link href="https://dashboard.salesless.app/signup">
            <Button>Get Started for Free</Button>
          </Link>
        </div>
        <div className="block lg:hidden">
          <SideNav />
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
