import SectionEnd from "@/components/Layout/SectionEnd";
import { cn } from "@/lib/utils";
import { Shield, ShoppingCart } from "lucide-react";
import { type FC } from "react";

const AboutSection = () => {
  return (
    <section className="w-full mt-40 flex flex-col items-center justify-center  ">
      <section className="flex flex-col items-center justify-center gap-3">
        <h2 className="text-4xl font-semibold">Why choose SalesLess?</h2>
        <p className="text-lg font-medium">
          SalesLess is a headless Ecommerce CRM for Manage all sales activities
          of businesses focused on single dashboards.
        </p>
      </section>
      <section className="w-full mt-10 border-y px-6 md:px-0 ">
        <section className="mx-auto grid grid-cols-1 lg:grid-cols-4 max-w-6xl border-x  items-center justify-center">
          <AboutSectionCard
            title=" Headless CRM"
            description="Your assets are protected with cutting-edge security protocols. "
            icon={<Shield />}
            className="border-b md:border-r"
          />
          <AboutSectionCard
            title="Bulit for Ecommerce"
            description="Your assets are protected with cutting-edge security protocols. "
            icon={<ShoppingCart />}
            className="border-b md:border-r"
          />
          <AboutSectionCard
            title="Customer Authentication"
            description="Your assets are protected with cutting-edge security protocols. "
            icon={<Shield />}
            className="border-b md:border-r"
          />
          <AboutSectionCard
            title="Build in Payment Gateway"
            description="Your assets are protected with cutting-edge security protocols. "
            icon={<Shield />}
            className=""
          />
        </section>
      </section>
      <SectionEnd />
    </section>
  );
};

export default AboutSection;

interface AboutSectionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export const AboutSectionCard: FC<AboutSectionCardProps> = ({
  icon,
  title,
  description,
  className,
}) => {
  return (
    <div
      className={cn(
        " flex flex-col items-start justify-center   p-4",
        className,
      )}
    >
      <div className="rounded-full bg-primary p-4 text-white">{icon}</div>
      <h3 className="text-lg mt-4 leading-10 text-left font-semibold">
        {title}
      </h3>
      <p className="text-base leading-6 text-left font-medium">{description}</p>
    </div>
  );
};
