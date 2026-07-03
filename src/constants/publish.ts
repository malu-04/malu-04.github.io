import { PublishCard } from '@/types';

export const publishCards: PublishCard[] = [
  {
    icon: "✎",
    badge: "Free · Updated weekly",
    title: "150+ live .NET Articles",
    desc: "Tutorials and deep-dives on .NET, EF Core, Claude Code, Docker, Terraform, and the system-design decisions I actually run in production. Source repos on GitHub for every article.",
    tags: [".NET 10", "EF Core", "Claude Code", "System Design"],
    cta: "Read articles →",
    href: "/blog",
  },
  {
    icon: "◆",
    badge: "All free",
    title: "Courses",
    desc: "Hands-on courses with progress tracking and full source code — Web API, Claude Code, and more. New ones drop a few times a year.",
    tags: ["Web API", "Claude Code", "Docker"],
    note: "200+ lessons",
    cta: "Browse courses →",
    href: "/courses",
  },
  {
    icon: "✉",
    badge: "Every Tuesday · 7 PM IST",
    title: "Newsletter",
    desc: "One deep-dive on a single .NET topic, the week's articles, and a short note from me. The front door to everything else I publish.",
    tags: [],
    note: "8,429 subs",
    cta: "+355 this week →",
    href: "/newsletter",
  },
];