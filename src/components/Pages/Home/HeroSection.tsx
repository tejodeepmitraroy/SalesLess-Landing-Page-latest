"use client";
import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { TextAnimate } from "@/components/magicui/text-animate";

const HeroSection = () => {
  return (
    <section className="flex flex-col">
      <section className="mx-auto flex max-w-3xl flex-col items-center justify-start pt-36 text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6, ease: "easeInOut" }}
          className=" text-bold rounded-2xl mb-5 bg-zinc-50 px-3 py-2 text-sm shadow-lg"
        >
          ⚡ Best Ecommerce CRM{" "}
        </motion.div>
        <section className="flex flex-col items-center justify-center gap-3">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}
            className="xl:text-7xl xl:font-semibold "
          >
            Finally, a CRM That Works Everywhere You Do
          </motion.h1>
          <motion.p
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="text-lg font-medium "
          >
            Salesless offers a headless Ecommerce CRM for Manage all sales
            activities of businesses focused on single dashboards.
          </motion.p>
        </section>

        <motion.section
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}
          className="mt-10 flex w-full flex-col items-center justify-center gap-3"
        >
          <Button className=" text-xl py-6 px-6 border-2 border-black">
            <span className="flex items-center gap-3">
              Get started Now <ArrowUpRight className="size-7" />
            </span>
          </Button>
        </motion.section>
      </section>
      <section className="mx-auto mt-40 h-fit w-full  max-w-6xl">
        <div className="w-full h-full" />
        <Image
          src="/assets/preview.png"
          alt="Hero"
          width={1000}
          height={1000}
          className="w-full rounded-2xl border-6 shadow-lg border-zinc-300 h-full object-cover"
        />
      </section>

      <section className="mx-auto w-full mt-52 h-full text-center  max-w-6xl ">
        <TextAnimate className="text-5xl text-primary text-center font-semibold leading-[52px]">
          Simplicity, performance, and security, empowering you to navigate the
          digital world with confidence and agility.
        </TextAnimate>
      </section>
    </section>
  );
};

export default HeroSection;
