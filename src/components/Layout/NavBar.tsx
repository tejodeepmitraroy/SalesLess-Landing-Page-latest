import Image from "next/image";
import Link from "next/link";
// import Reactfrom "react";
import { Button } from "../ui/button";

const NavBar = () => {
  // const [isTop, setIsTop] = useState(true);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsTop(window.scrollY < 10);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // console.log(isTop);
  return (
    <section className="fixed top-0  py-5  flex w-full items-center justify-center bg-zinc-50 opacity-90  border-b border-zinc-300  pt-4">
      <nav className="flex mx-auto w-full max-w-6xl ">
        <section className="flex w-full items-center  justify-start gap-8">
          <div className="w-fit flex  items-center gap-3">
            <Image src="/logo/logo.png" alt="Logo" width={30} height={30} />
            <Link href="/" className="text-2xl font-semibold">
              SalesLess
            </Link>
          </div>
          {/*Navbar Links */}
          <div className="w-fit ">
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
        <div className="  flex justify-end gap-3">
          <Button variant="ghost">Sign In</Button>
          <Button>Join Waiting List</Button>
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
