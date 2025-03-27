"use client";

import ProfileCard from "./ProfileCard";

type Profile = {
  name: string;
  role: string;
  image: string;
  about: string;
  socialLinks: {
    facebook?: string;
    linkedin?: string;
    github?: string;
  };
};

const profiles: Profile[] = [
  {
    name: "Tarathep Butka",
    role: "Front-end Developer",
    image: "/images/fongt.jpg",
    about: "Fongt",
    socialLinks: {
      facebook: "https://www.facebook.com/fong.f.tarathep.f.fong",
      github: "https://github.com/TarathepButka",
    },
  },
  {
    name: "Teepakorn Suanoi",
    role: "Back-end Developer",
    image: "/images/mega.jpg",
    about: "Mega",
    socialLinks: {
      facebook: "https://www.facebook.com/mega.zaa.9",
      github: "https://github.com/megazaa",
    },
  },
  {
    name: "Putthipong Kitisriworaphan",
    role: "Front-end Developer",
    image: "/images/frank.jpg",
    about: "Frank",
    socialLinks: {
      facebook: "https://www.facebook.com/putthipong.kiti/",
      github: "https://github.com/putthipong-kiti",
    },
  },
  {
    name: "Nattadol Thongbu",
    role: "Back-end Developer",
    image: "/images/oat.jpg",
    about: "Oat",
    socialLinks: {
      facebook: "https://www.facebook.com/nattadol.thongbu",
      github: "https://github.com/nattadol3",
    },
  },
  {
    name: "Thithawat Butthai",
    role: "Back-end Developer",
    image: "/images/prem.jpg",
    about: "Prem",
    socialLinks: {
      facebook: "https://www.facebook.com/MeaperZ",
      github: "https://github.com/Thithawat02",
    },
  },
];

export default function AboutUsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold leading-snug tracking-tight lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight bg-gradient-to-r from-[#c621e5] to-[#7d7cf9] inline-block text-transparent bg-clip-text text-center w-full">
        Developer Team
      </h1>
      <div className="flex flex-col items-center p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl">
          {profiles.map((profile, index) => (
            <ProfileCard key={index} profile={profile} />
          ))}
        </div>
      </div>
    </div>
  );
}
