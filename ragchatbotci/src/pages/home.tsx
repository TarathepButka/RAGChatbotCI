"use client";

import React from "react";
// import useAuth from "@/app/hooks/useAuth";
// import ScrollToTop from "react-scroll-to-top";
import Navbar from "@/components/Navbar";
import AboutUsPage from "@/components/About";
import { useRouter } from "next/navigation";
// import { Footer } from "@/app/components/Footer";
import { Container } from "@/components/Container";
// import { SectionTitle } from "@/app/components/SectionTitle";
// import { Benefits } from "@/app/components/Benefits";
// import { Faq } from "@/app/components/Faq";
// import { Cta } from "@/app/components/Cta";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
// import { benefitOne } from "@/app/components/data";

export default function HomePage() {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <Container>
        <div className="flex flex-wrap mb-32">
          <div id="home" className="flex items-center w-full lg:w-1/2">
            <div className="max-w-2xl mb-8">
              <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                Welcome to RAGKKUCHAT
              </h1>
              <p className="py-5 text-xl leading-normal text-gray-500 lg:text-lg xl:text-xl dark:text-gray-300">
                Easily to know about KKU.
              </p>
              <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                <a
                  className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md cursor-pointer"
                  onClick={() => router.push("/chat")}
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full lg:w-1/2">
            <DotLottieReact
              className="object-cover"
              src="https://lottie.host/ec0cc05e-3dff-4819-b53f-029b0d5b6b6b/Nt057a43Fu.json"
              width="616"
              height="617"
              loop
              autoplay
            />
          </div>
        </div>
      </Container>
      <AboutUsPage />
    </>
  );
}
