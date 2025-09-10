import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowUpRight, CreditCardIcon, Loader, LucideIcon, SquareCheckIcon, SquareChevronUpIcon, SquarePowerIcon, ToggleRight } from "lucide-react";
import SideNav from "./SideNav";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "../ui/navigation-menu";
import React from "react";
import { cn } from "@/lib/utils";

const components: {
  title: string;
  href: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Accordion",
    href: "/components/accordion",
    description:
      "A vertically stacked set of interactive headings that each reveal a section of content.",
    icon: SquareChevronUpIcon,
  },
  {
    title: "Button",
    href: "/components/button",
    description: "Displays a button or a component that looks like a button.",
    icon: SquarePowerIcon,
  },
  {
    title: "Card",
    href: "/components/card",
    description: "Displays a card with header, content, and footer.",
    icon: CreditCardIcon,
  },
  {
    title: "Checkbox",
    href: "/components/checkbox",
    description:
      "A control that allows the user to toggle between checked and not checked.",
    icon: SquareCheckIcon,
  },
  {
    title: "Spinner",
    href: "/components/spinner",
    description: "Informs users about the status of ongoing processes.",
    icon: Loader,
  },
  {
    title: "Switch",
    href: "/components/switch",
    description:
      "A control that allows the user to toggle between checked and not checked.",
    icon: ToggleRight,
  },
];



const NavBar = () => {
  return (
    <section className="fixed top-0 z-50 py-5  flex w-full items-center justify-center bg-zinc-50   border-b border-zinc-300  pt-4">
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
          <NavigationMenu className="z-20">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent className="px-0 py-1">
                  <div className="grid grid-cols-3 gap-3 p-4 w-[900px] divide-x">
                    <div className="col-span-2">
                      <h6 className="pl-2.5 font-semibold uppercase text-sm text-muted-foreground">
                        Capabilities
                      </h6>
                      <ul className="mt-2.5 grid grid-cols-2 gap-3">
                        {components.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                            icon={component.icon}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </div>
                    <div className="pl-4">
                      <h6 className="pl-2.5 font-semibold uppercase text-sm text-muted-foreground">
                        Product & Features
                      </h6>
                      <ul className="mt-2.5 grid gap-3">
                        {components.slice(0, 3).map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                            icon={component.icon}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent className="p-4">
                  <h6 className="pl-2.5 font-semibold uppercase text-sm text-muted-foreground">
                    Solutions
                  </h6>
                  <ul className="mt-2.5 grid w-[400px] gap-3 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                        icon={component.icon}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Developers
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
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



const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon: LucideIcon }
>(({ className, title, children, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none rounded-md p-3 leading-none no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="font-semibold tracking-tight leading-none flex items-center gap-2">
            <Icon className="h-5 w-5" />
            {title}
          </div>
          <p className="mt-2 line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
