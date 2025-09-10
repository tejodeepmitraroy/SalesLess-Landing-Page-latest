import SectionEnd from "@/components/Layout/SectionEnd";
import SectionHeader from "@/components/Layout/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  const faqDataR1: Array<{ title: string; description: string }> = [
    {
      title: "Product Information",
      description:
        "Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.",
    },
    {
      title: "Product Information",
      description:
        "Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.",
    },
  ];
  const faqDataR2: Array<{ title: string; description: string }> = [
    {
      title: "Shipping Details",
      description:
        "Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.",
    },
    {
      title: "Shipping Details",
      description:
        "Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.",
    },
  ];
  return (
    <>
      <SectionHeader
        title="Your Questions, Answered"
        description="A simple, fast, and secure platform to manage your cryptocurrencies in just a few steps."
      />
      <section className="w-full border-y md:border-none px-6 md:px-0">
        <section className="w-full max-w-6xl border-x mx-auto  grid grid-cols-1 lg:grid-cols-2 ">
          <Accordion
            type="multiple"
            className="w-full border-r-0 border-b lg:border-b-0 lg:border-r"
          >
            {faqDataR1.map((item, index) => {
              return (
                <AccordionItem value={`item-${index}`} className="">
                  <AccordionTrigger className="text-left text-lg p-4 hover:bg-primary hover:text-white rounded-none">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 px-4 text-balance">
                    <p className="text-base text-left">{item.description}</p>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
          <Accordion type="multiple" className="w-full  ">
            {faqDataR2.map((item, index) => {
              return (
                <AccordionItem value={`item-${index}`} className="">
                  <AccordionTrigger className="text-left text-lg p-4 hover:bg-primary hover:text-white rounded-none">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>{item.description}</p>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </section>
      </section>
      <SectionEnd />
    </>
  );
};

export default Faq;
