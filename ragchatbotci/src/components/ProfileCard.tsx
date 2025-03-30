import Image from "next/image";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

type Profile = {
  name: string;
  role: string;
  image: string;
  about: string;
  socialLinks: {
    facebook?: string;
    github?: string;
  };
};

type ProfileCardProps = {
  profile: Profile;
};

export default function ProfileCard({ profile }: ProfileCardProps) {
  const { name, role, image, socialLinks } = profile;
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className={`flex flex-col justify-between w-full h-full px-14 rounded-2xl py-14 bg-[#1b1b20]`}>
      <div className="relative w-32 h-32 mx-auto mb-4">
        <Image
          src={image}
          alt={`${name}'s profile picture`}
          layout="fill"
          objectFit="cover"
          className="rounded-full border-3 border-white"
        />
      </div>
      <h2 className={`text-2xl font-semibold mb-1 text-white`}>{name}</h2>
      <p className={`mb-2 text-xl text-gray-300`}>{role}</p>
      <div className="flex flex-col items-center mt-2">
        <h3 className={`text-blue-400 mb-2`}>Follow me on</h3>
        <div className="flex justify-center gap-4 mt-2">
          {socialLinks.facebook && (
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className={`w-6 h-6 text-gray-300 hover:text-blue-400`} />
            </a>
          )}
          {socialLinks.github && (
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className={`w-6 h-6 text-gray-300 hover:text-white`} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}