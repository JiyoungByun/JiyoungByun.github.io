import { defineAstroPaperConfig } from "./src/types/config";

/**
 * Contact address, kept in one place.
 *
 * This is a Johns Hopkins address and will stop working some time after
 * graduation (Dec 2026). When that happens, change it here and nowhere else —
 * it feeds the mail social link, the About page and the CV page.
 */
export const EMAIL = "jbyun13@jhu.edu";

export default defineAstroPaperConfig({
  site: {
    url: "https://jiyoungbyun.github.io/",
    title: "Ji Young Byun",
    description:
      "Ph.D. candidate at Johns Hopkins working on trustworthy biomedical reasoning with large language and vision-language models — calibration, hallucination, multi-agent systems and efficient inference.",
    author: "Ji Young Byun",
    profile: "https://scholar.google.com/citations?user=SvOu4fUAAAAJ",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "America/New_York",
    dir: "ltr",
  },
  posts: {
    perPage: 8,
    perIndex: 3,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    // No "edit this page" link — this is a personal site, not a docs project.
    editPost: { enabled: false },
    search: "pagefind",
  },
  socials: [
    { name: "scholar", url: "https://scholar.google.com/citations?user=SvOu4fUAAAAJ" },
    { name: "github", url: "https://github.com/JiyoungByun" },
    { name: "linkedin", url: "https://www.linkedin.com/in/ji-young-byun-9b6381170/" },
    { name: "mail", url: `mailto:${EMAIL}` },
  ],
  // Trimmed from the theme default: whatsapp/telegram/pinterest are consumer
  // channels that a research blog post is never shared through.
  shareLinks: [
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "linkedin", url: "https://www.linkedin.com/sharing/share-offsite/?url=" },
    { name: "mail", url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
