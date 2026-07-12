import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @ts-expect-error Next.js 15+ allows this but types might lag
  allowedDevOrigins: ["192.168.0.107"],
};

export default nextConfig;
