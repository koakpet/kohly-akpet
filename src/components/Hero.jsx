"use client";

import Link from "next/link";
import Image from "next/image";
import {useState, useEffect} from "react";

export default function Hero() {
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setBlink((prev) => !prev);
    }, 900);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="md:grid grid-cols-3 gap-12 items-center">
        <div className="col-span-2 flex flex-col gap-9 items-start">
          <div className="flex items-center border border-[#2b3541] bg-[#1e2731] px-6 py-3 rounded-lg">
            <div className="mono text-xs md:tracking-wider">
              SELECT role FROM career WHERE skills IN (&apos;data&apos;,
              &apos;code&apos;);
            </div>
            <div
              className={`h-6 w-0.5 bg-[#e7a33e] ${blink ? "opacity-100" : "opacity-0"}`}
            ></div>
          </div>

          <div className="text-5xl font-black tracking-wider">
            I turn raw data <br /> into decisions and decisions into software.
          </div>
          <div className="text-[#9aa5ac]">
            I scope, build and deliver end-to-end technical solutions - from PowerBI dadhboards that turn raw data into decisions, to full-stack web applications that run entire organizations. I don't just analyze the problem or manage the timeline, I ship the syst
          </div>

          <div className="mono text-sm font-bold flex gap-9">
            <Link
              href="#projects"
              className="bg-[#e7a33e] py-3 px-6 border border-[#e7a33e] hover:bg-[#fabb5c] rounded-sm "
            >
              <span className="text-[#10161d]"> View projects</span>
            </Link>
            <Link
              href="#contact"
              className="bg-[#1e2731] py-3 px-6 border border-[#2b3541] hover:border-white rounded-sm"
            >
              Get in touch
            </Link>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="border border-[#2b3541] rounded-sm p-3">
            <Image
              src="/kohly_akpet.jpg"
              height={800}
              width={800}
              alt="Profile picture"
              className="rounded-sm"
            />
          </div>
        </div>
      </section>
    </>
  );
}
