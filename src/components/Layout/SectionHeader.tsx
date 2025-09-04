import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React, { FC } from "react";

interface SectionHeaderProps {
  title: string;
  description: string;
}
const SectionHeader: FC<SectionHeaderProps> = ({ title, description }) => {
  return (
    <section className="w-full border-t">
      <section className="mx-auto  max-w-6xl grid grid-cols-3 grid-rows-2  border-x flex-col items-center justify-center ">
        {/* first section */}
        <section className="col-span-2 row-span-2 row-start-1 p-4 border-r flex text-left flex-col items-start justify-start gap-3">
          <h2 className=" font-semibold">{title}</h2>
          <p className="text-lg ">{description}</p>
        </section>
        {/* second section */}

        <section className="col-span-1 row-span-1 border-b h-full w-full"></section>
        <section className="col-span-1 row-span-1 flex  w-full h-full  p-4 items-center bg-primary flex-col justify-end  ">
          <Link
            href="/"
            className="flex w-fit font-medium text-white items-center gap-3"
          >
            Create Account <ArrowUpRight className="size-7" />
          </Link>
        </section>
      </section>
    </section>
  );
};

export default SectionHeader;
