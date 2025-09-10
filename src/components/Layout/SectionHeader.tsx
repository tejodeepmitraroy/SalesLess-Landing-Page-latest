import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { type FC } from "react";
import { TextAnimate } from "../magicui/text-animate";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  description: string;
  cta?: boolean;
  ctaText?: string;
  ctaLink?: string;
}
const SectionHeader: FC<SectionHeaderProps> = ({
  cta = true,
  title,
  description,
  ctaText = "Create Account",
  ctaLink = "/",
}) => {
  return (
    <section className="w-full border-t px-6 md:px-0">
      <section className="mx-auto  max-w-6xl grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2  border-x flex-col items-center justify-center ">
        {/* first section */}
        <section
          className={cn(
            ` p-4 flex text-left flex-col  justify-start gap-3 `,
            cta
              ? "col-span-2 lg:row-span-2 lg:row-start-1 items-start lg:border-r"
              : "col-span-3 lg:row-span-2 lg:row-start-1 items-center",
          )}
        >
          <h2 className=" font-semibold">{title}</h2>
          <TextAnimate className="text-base " once={true} animation="fadeIn">
            {description}
          </TextAnimate>
        </section>
        {/* second section */}

        {cta && (
          <>
            <section
              className={`hidden lg:block  col-span-1 lg:row-span-1 lg:row-start-1 border-b h-full w-full`}
            ></section>
            <section
              className={`hidden lg:block border-t lg:border-none col-span-1 lg:row-span-1 lg:row-start-2 h-full w-full    `}
            >
              <Link
                href={ctaLink}
                className="flex w-full p-4 justify-end  transition-all duration-300 hover:bg-primary hover:text-white font-medium text-primary items-center gap-3"
              >
                {ctaText} <ArrowUpRight className="size-7" />
              </Link>
            </section>
          </>
        )}
      </section>
    </section>
  );
};

export default SectionHeader;
