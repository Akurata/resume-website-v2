import type { Config } from "@react-router/dev/config";

export default {
  // SPA mode — static site generation, no server runtime needed
  ssr: false,
  // Only prerender the root page (single-page resume site)
  prerender: ["/"],
} satisfies Config;
