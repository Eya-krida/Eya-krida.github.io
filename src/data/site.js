import { BrainCircuit, ShieldCheck, Cpu, Code2 } from "lucide-react";

export const site = {
  // Identity
  firstName: "Eya",
  displayName: "Eya Krida",
  fullName: "Eya Krida",
  initials: "EK",

  // First screen style:
  //   "classic" = text on the left, round photo on the right
  //   "mixed"   = same page, giant word + cut-out photo in the middle
  //   "poster"  = full poster page, without menu and ticker
  intro: "mixed",
  photo: "/me.png", // PNG with a transparent background
  url: "eya-krida.github.io",
  // Giant word + colors of the first screen ("mixed" and "poster" modes)
  //   bg = background, ink = text, wordColor = giant word,
  //   accent / accentInk = main button and its text
  poster: {
    word: "PORTFOLIO",
    themed: true,
    bg: "#F5FAF0",
    ink: "#2E4A33",
    wordColor: "#F4AFBD",
    accent: "#2E4A33",
    accentInk: "#F9CFD6",
  },

  // Colors
  accent: "#2f6bff",
  highlight: "#F4AFBD", // pink, same as PORTFOLIO: roles in Resume, "work" in Contact

  // First screen
  status: "Open to PFE opportunities – 2027",

  rolePrefix: "I work on",
  rotating: [
    "AI agents",
    "AI security",
    "cybersecurity",
    "intelligent systems",
  ],

  roleLine:
    "exploring the intersection of artificial intelligence, cybersecurity and embedded systems.",

  chips: [
    { label: "AI Agents", icon: BrainCircuit },
    { label: "Cybersecurity", icon: ShieldCheck },
    { label: "Embedded Systems", icon: Cpu },
    { label: "Python", icon: Code2 },
  ],

  ticker: [
    "Python",
    "Java",
    "C",
    "Linux",
    "Git",
    "CrewAI",
    "LLM Agents",
    "Function Calling",
    "Prompt Engineering",
    "OCR",
    "Vision LLMs",
    "OWASP LLM Top 10",
    "Visual Prompt Injection",
    "Threat Modeling",
    "Input Validation",
    "Cybersecurity",
    "Networking",
    "STM32",
    "Embedded Systems",
    "IoT",
  ],

  // Projects wall
  wallBadge: "Open to PFE opportunities",
  heroTitle: ["Exploring AI.", "Securing systems."],
  heroSub:
    "Computer Engineering Student | AI Agents · Cybersecurity · Embedded Systems",

  mailSubject: "PFE Internship Opportunity – Eya Krida",
};
