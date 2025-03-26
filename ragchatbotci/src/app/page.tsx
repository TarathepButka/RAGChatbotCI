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
import ChatButton from "@/components/ChatButton";
// import { benefitOne } from "@/app/components/data";

export default function HomePage() {
  const router = useRouter();

  return (
    <>
      <Navbar />
        <Container className="mt-24">
            <div id="home" className="flex items-center w-full lg:w-1/2">
              <div className="max-w-2xl">
                <h1 className="text-4xl font-bold leading-snug tracking-tight text-white lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
                  Welcome to RAGKKUCHAT
                </h1>
                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-lg xl:text-xl dark:text-gray-300">
                  Easily to know about KKU.
                </p>
                <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                  <a
                    className="px-8 py-4 text-lg font-medium text-center text-white bg-red-800 rounded-md cursor-pointer"
                    onClick={() => router.push("/chat")}
                  >
                    Start now
                  </a>
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
        <AboutUsPage />
      </Container>
      <ChatButton />
    </>
  );
}
