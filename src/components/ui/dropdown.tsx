"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface DropdownProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Dropdown({ title, children, className }: DropdownProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={cn("w-full", className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-3 px-4 text-left text-white hover:bg-gray-800 transition-colors"
      >
        <span className="font-medium">{title}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            isOpen && "rotate-180",
          )}
        />
      </button>
      {isOpen && (
        <div className="bg-gray-900 border-t border-gray-700">{children}</div>
      )}
    </div>
  );
}

interface DropdownItemProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function DropdownItem({ href, children, className }: DropdownItemProps) {
  return (
    <a
      href={href}
      className={cn(
        "block py-3 px-6 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors",
        className,
      )}
    >
      {children}
    </a>
  );
}
