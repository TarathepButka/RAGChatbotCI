"use client";

import Image from "next/image";
import React from "react";
import Navbar from "@/components/Navbar";
import AboutUsPage from "@/components/About";
import { useRouter } from "next/navigation";
import { Container } from "@/components/Container";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import ChatButton from "@/components/ChatButton";
import Footer from "@/components/Footer";
import { Services } from "@/components/Service";
import {
  InformationCircleIcon,
  DocumentMagnifyingGlassIcon,
  CreditCardIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/solid";

const serviceArea = {
  bullets: [
    {
      title: "Course Information",
      desc: "Find details about engineering programs.",
      icon: <InformationCircleIcon />,
    },
    {
      title: "Faculty & Research",
      desc: "Get insights into faculty members and their research.",
      icon: <DocumentMagnifyingGlassIcon />,
    },
    {
      title: "Admissions & Scholarships",
      desc: "Learn about opportunities for new and current students.",
      icon: <CreditCardIcon />,
    },
    {
      title: "Academic Policies & Guidelines",
      desc: "Stay updated with university regulations.",
      icon: <ClipboardDocumentListIcon />,
    },
  ],
};

export default function HomePage() {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <Container className="mt-24">
        <div
          id="home"
          className="flex items-center justify-center w-full lg:w-1/2"
        >
          <div className="max-w-2xl lg:ml-16">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-white lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
              Welcome to RAGKKUCHAT
            </h1>
            <p className="py-5 text-base leading-normal text-gray-500 lg:text-lg xl:text-xl dark:text-gray-300">
              Easily to know about KKU.
            </p>
            <div className="flex md:order-2 space-x-0 rtl:space-x-reverse">
              <button
                type="button"
                className="text-white text-xl bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text- px-6 py-3 text-center cursor-pointer"
                onClick={() => router.push("/chat")}
              >
                Let's Chat
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <DotLottieReact
            className="object-cover"
            src="https://lottie.host/29a74268-a107-4d4d-be3a-0f962511cc52/FIb3GGX0cP.lottie"
            width="616"
            height="617"
            loop
            autoplay
          />
        </div>
      </Container>
      <Container>
        <div id="services" className="w-full flex justify-center">
          <h1 className="text-center w-full text-2xl font-semibold leading-snug tracking-tight lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight bg-gradient-to-r from-[#f34a62] via-[#bb77ed] to-[#1cdce8] inline-block text-transparent bg-clip-text">
            AI Assistant for Engineering <br />
            at Khon Kaen University
          </h1>
        </div>
        <div className="flex items-center justify-center w-full mt-8 lg:w-1/2">
          <DotLottieReact
            className="object-cover"
            src="https://lottie.host/2a04e9ed-074e-4695-9f24-37f58492d256/FZCgJ98JFY.lottie"
            width="616"
            height="617"
            loop
            autoplay
          />
        </div>
        <div className="flex items-center justify-center w-full mt-8 lg:w-1/2">
          <section className="text-base font-normal leading-snug tracking-tight text-white lg:text-ls lg:leading-tight xl:text-xl xl:leading-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-[#f9655b] to-[#ee821a] inline-block text-transparent font-bold bg-clip-text">
              AI-powered chatbot
            </span>{" "}
            is designed to help students and faculty with academic-related
            inquiries, including:
            <Services data={serviceArea} />
          </section>
        </div>
      </Container>
      <Container>
        <div id="about" className="w-full flex justify-center">
          <h1 className="text-center w-full text-2xl font-semibold leading-snug tracking-tight lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight bg-gradient-to-r from-[#40c9ff] to-[#e81cff] inline-block text-transparent bg-clip-text">
            About
          </h1>
        </div>
        <div className="flex justify-between gap-6 mx-16">
          <div className="max-w-2xl">
            <h1 className="text-xl font-semibold leading-snug tracking-tight text-white lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight">
              A Project in Computational Intelligence <br />
              by Prof. Wanida
            </h1>
          </div>
          <div className="max-w-2xl ">
            <h1 className="text-sm font-normal leading-snug tracking-tight text-white lg:text-base lg:leading-tight xl:text-lg xl:leading-tight mt-2 ">
              This chatbot is specifically designed to assist students, <br />
              faculty, and researchers in navigating academic inquiries <br />
              related to Engineering at{" "}
              <span className="bg-gradient-to-r from-[#f9655b] to-[#ee821a] inline-block text-transparent bg-clip-text font-bold">
                Khon Kaen University
              </span>
              .
            </h1>
          </div>
        </div>
        <div className="relative w-[1024px] h-[576px] mx-auto mb-4 my-6">
          <Image
            src="/images/en.jpg"
            alt="en"
            fill
            className="rounded-2xl object-cover"
          />
        </div>
      </Container>
      <Container>
        <AboutUsPage />
      </Container>

      {/* Position the ChatButton with a higher z-index than the Footer */}
      <div className="relative">
        <ChatButton />
      </div>

      <Footer />
    </>
  );
}
