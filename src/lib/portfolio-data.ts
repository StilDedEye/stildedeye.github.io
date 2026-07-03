export const projects = [
  {
    name: "Relive",
    category: "Android App",
    description:
      "A memory-keeping app for time capsules. One of my very first apps ever written — built in Java for Android and published on the Play Store.",
    tags: ["Android", "Java", "Privacy"],
    link: "https://stildedeye.github.io/Relive/",
    accent: "primary" as const,
  },
  {
    name: "Checkpoint",
    category: "Gaming Ecosystem",
    description:
      "A fluid, modern dashboard to catalogue your game library, manage your backlog and actively track playing progress across platforms. Built with Jetpack Compose.",
    tags: ["Android", "Jetpack Compose", "Dashboard"],
    link: null,
    accent: "accent" as const,
  },
  {
    name: "Ventures",
    category: "Python CLI",
    description:
      "A command-line tool for media downloading, built in Python with the PyTube library. Made as a testing experiment — no longer maintained.",
    tags: ["Python", "PyTube", "Experiment"],
    link: "https://github.com/StilDedEye/VenturesDownloader",
    accent: "primary" as const,
  },
  {
    name: "RSA Chat",
    category: "Cryptography Lab",
    description:
      "An educational messaging system built as a sandbox to demonstrate asymmetric RSA cryptography, key generation and secure peer-to-peer packet exchange.",
    tags: ["RSA", "JavaFX", "P2P"],
    link: "https://github.com/StilDedEye/RSA-Chat-Sample-Project",
    accent: "accent" as const,
  },
];

export const t = {
  navProjects: "Projects",
  navJourney: "Journey",
  navContact: "Contact",
  heroTag: "Computer Science Student · Developer",
  heroLead:
    "Right now I'm experimenting with Android and Jetpack Compose — that's what I'm learning. I've also experimented with Java.",
  viewWork: "View my work",
  journeyTitle: "My Journey",
  journeyStatus: "Currently studying",
  journeyDegree: "B.Sc. Computer Science",
  journeyUni: 'University of Bari "Aldo Moro" (UniBA)',
  projectsTitle: "Featured Projects",
  projectsLead: "A selection of things I've designed and built.",
  openProject: "Open project",
  comingSoon: "In progress",
  contactLead: "Many of my projects live on GitHub — some are open-source.",
};
