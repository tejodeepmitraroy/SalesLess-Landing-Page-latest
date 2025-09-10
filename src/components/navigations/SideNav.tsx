import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { DropdownItem } from "../ui/dropdown";
import { ArrowUpRight, MenuIcon } from "lucide-react";
import Image from "next/image";
import { Dropdown } from "../ui/dropdown";
import Link from "next/link";

const SideNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm">
          <MenuIcon className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80 bg-gray-950 border-gray-800">
        <SheetHeader className="border-b border-gray-800 pb-4">
          <div className="flex items-center gap-3">
            <Image src="/logo/logo.png" alt="Logo" width={24} height={24} />
            <SheetTitle className="text-white text-xl font-semibold">
              SalesLess
            </SheetTitle>
          </div>
        </SheetHeader>

        <div className="flex flex-col mt-6">
          {/* Navigation Menu Items */}
          <Dropdown title="Product">
            <DropdownItem href="/features">Features</DropdownItem>
            <DropdownItem href="/integrations">Integrations</DropdownItem>
            <DropdownItem href="/security">Security</DropdownItem>
            <DropdownItem href="/api">API</DropdownItem>
          </Dropdown>

          <Dropdown title="Solutions">
            <DropdownItem href="/startups">For Startups</DropdownItem>
            <DropdownItem href="/enterprise">Enterprise</DropdownItem>
            <DropdownItem href="/agencies">Agencies</DropdownItem>
            <DropdownItem href="/developers">Developers</DropdownItem>
          </Dropdown>

          <Dropdown title="Resources">
            <DropdownItem href="/docs">Documentation</DropdownItem>
            <DropdownItem href="/blog">Blog</DropdownItem>
            <DropdownItem href="/guides">Guides</DropdownItem>
            <DropdownItem href="/support">Support</DropdownItem>
          </Dropdown>

          <Link
            href="/pricing"
            className="flex items-center py-3 px-4 text-white hover:bg-gray-800 transition-colors"
          >
            Pricing
          </Link>

          <Link
            href="/about"
            className="flex items-center py-3 px-4 text-white hover:bg-gray-800 transition-colors"
          >
            About
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="mt-auto pt-6 border-t border-gray-800">
          <div className="flex flex-col gap-3 px-4">
            <Link href="https://dashboard.salesless.app/">
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:bg-gray-800"
              >
                Log In <ArrowUpRight className="size-4 ml-2" />
              </Button>
            </Link>
            <Link href="https://dashboard.salesless.app/signup">
              <Button className="w-full bg-white text-black hover:bg-gray-200">
                Get Started for Free
              </Button>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SideNav;
