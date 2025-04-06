import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "upbeat-stoat-959.convex.cloud", protocol: "https" },
      { hostname: "wary-anaconda-29.convex.cloud", protocol: "https" },
      { hostname: "efficient-walrus-153.convex.cloud", protocol: "https" },
      { hostname: "cms.ontoo.cloud", protocol: "https" },
    ],
  },
};

export default nextConfig;
