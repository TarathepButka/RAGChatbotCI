import { Link as ScrollLink } from "react-scroll";

export default function Footer() {
  const footernavigation = [
    { name: "Home", href: "home" },
    { name: "Services", href: "services" },
    { name: "About", href: "about" },
    { name: "Our Team", href: "team" },
  ];
  return (
    <footer className="bg-[#29292f] text-white py-6">
      <div className="container mx-auto flex flex-wrap justify-between items-center px-6">
        {/* Left: Logo & Tagline */}
        <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-lg font-semibold">
            AI Chatbot for Engineering KKU
          </h2>
          <p className="text-sm opacity-75">
            Powered by Computational Intelligence.
          </p>
        </div>

        {/* Center: Quick Links */}
        <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
          <ul className="flex justify-center space-x-1 text-sm font-medium">
            {footernavigation.map((item) => (
              <li key={item.name}>
                {item.href === "home" ? (
                  <ScrollLink
                    to={item.href}
                    smooth={true}
                    duration={800}
                    spy={true}
                    offset={-300}
                    className="block py-2 px-3 text-gray-200 hover:text-blue-500 cursor-pointer underline"
                  >
                    {item.name}
                  </ScrollLink>
                ) : (
                  <ScrollLink
                    to={item.href}
                    smooth={true}
                    duration={800}
                    spy={true}
                    offset={-120}
                    className="block py-2 px-3 text-gray-300 hover:text-blue-500 cursor-pointer underline"
                  >
                    {item.name}
                  </ScrollLink>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Contact & Social Media */}
        <div className="w-full md:w-1/3 text-center md:text-right">
          <p className="text-sm">
            Email:{" "}
            <a
              href="mailto:support@chatbot-kku.ac.th"
              className="text-blue-400 hover:underline"
            >
              reg@kku.ac.th
            </a>
          </p>
          <p className="text-sm mt-1">
            Socials:
            <a href="#" className="ml-2 hover:underline">
              Facebook
            </a>{" "}
            |
            <a href="#" className="ml-2 hover:underline">
              Twitter
            </a>{" "}
            |
            <a href="#" className="ml-2 hover:underline">
              LinkedIn
            </a>
          </p>
        </div>
      </div>

      {/* Bottom: Copyright Notice */}
      <div className="text-center text-xs opacity-75 mt-4">
        © 2025 Computational Intelligence Project, KKU. All rights reserved.
      </div>
    </footer>
  );
}
