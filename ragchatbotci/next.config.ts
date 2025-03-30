import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/chat",
        destination: "https://ragci-backend.onrender.com/ask",
      },
      
    ];
  }
};

export default nextConfig;
