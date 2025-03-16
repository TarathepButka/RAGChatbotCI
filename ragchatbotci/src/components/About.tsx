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
      linkedin: "https://www.linkedin.com/in/tarathep-butka-277672316/",
      github: "https://github.com/TarathepButka",
    },
  },
  {
    name: "Teepakorn Suanoi",
    role: "Back-end Developer",
    image: "/images/mega.jpg",
    about: "Mega",
    socialLinks: {
      facebook: "https://www.facebook.com/naruebet.sriwarom",
      linkedin: "https://www.linkedin.com/in/naruebet-sriwarom-680012316/",
      github: "https://github.com/bste101",
    },
  },
  {
    name: "Putthipong Kitisriworaphan",
    role: "Front-end Developer",
    image: "/images/frank.jpg",
    about: "Frank",
    socialLinks: {
      facebook: "https://www.facebook.com/putthipong.kiti/",
      linkedin: "www.linkedin.com/in/putthipong-kiti",
      github: "https://github.com/putthipong-kiti",
    },
  },
  {
    name: "Nattadol Thongbu",
    role: "Back-end Developer",
    image: "/images/fongt.jpg",
    about: "Oat",
    socialLinks: {
      facebook: "https://www.facebook.com/fong.f.tarathep.f.fong",
      linkedin: "https://www.linkedin.com/in/tarathep-butka-277672316/",
      github: "https://github.com/TarathepButka",
    },
  },
  {
    name: "Thithawat Butthai",
    role: "Back-end Developer",
    image: "/images/prem.jpg",
    about: "Prem",
    socialLinks: {
      facebook: "https://www.facebook.com/naruebet.sriwarom",
      linkedin: "https://www.linkedin.com/in/naruebet-sriwarom-680012316/",
      github: "https://github.com/bste101",
    },
  },
];

export default function AboutUsPage() {
  return (
    <div>
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



