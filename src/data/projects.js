import intraxCover from "../assets/projects/intrax/intrax.png";
import indokonveksiCover from "../assets/projects/indokonveksi/indokonveksi.png";
import hubunginsCover from "../assets/projects/hubungins/hubungins.png";

export const projects = [
  {
    id: "intrax",
    title: "Intrax",
    subtitle: "AI Financial Ecosystem",
    image: intraxCover,
    tech: ["React", "Laravel", "MySQL", "Tailwind", "AI API"],
    github: "https://github.com/bynueman",
    demo: "https://intrax.web.id",
    description:
      "A flagship financial ecosystem featuring AI-powered transaction logging. Designed to bridge the gap between complex manual bookkeeping and automated visual insights.",
  },

  {
    id: "indokonveksi",
    title: "Indokonveksi",
    subtitle: "Production Management System",
    image: indokonveksiCover,
    tech: ["Laravel", "Filament", "MySQL"],
    github: "https://github.com/bynueman/indokonveksi",
    demo: "",
    description:
      "A production management platform built to centralize garment orders and operations, replacing legacy manual tracking with real-time workflow automation.",
  },

  {
    id: "hubungins",
    title: "Hubungins",
    subtitle: "Automation & Invoice System",
    image: hubunginsCover,
    tech: ["React", "Laravel"],
    github: "https://github.com/bynueman/hubungins",
    demo: "",
    description:
      "A performance-focused landing page and invoice management system. Designed to automate billing administration and optimize user acquisition workflows.",
  },
];