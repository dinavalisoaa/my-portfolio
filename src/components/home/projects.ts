import { Cog, CreditCard, Database, Eye, MailCheck, Music, Presentation, ScanText, School } from "lucide-react";

export const projects = [
  {
    title: "Online Payment Platform",
    icon: CreditCard,
    client: "Ibonia",
    category: "FinTech",
    description:
      "FinTech platform processing 600M+ Ar across 15,000+ Mobile Money and Visa/Mastercard payments. Payment pipeline cut from 3–5 min to near real-time.",
    stack: ["Java Spring", "TypeScript", "PostgreSQL"],
    href: null,
  },
  {
    title: "AI Email Agent",
    icon: MailCheck,
    client: "Freelance — Romania",
    category: "AI",
    description:
      "Email classification and auto-response system that removed manual prospect triage, wired to FareHarbor and Ebriza APIs for real-time answers.",
    stack: ["Python", "FastAPI", "LLM"],
    href: null,
  },
  {
    title: "Odoo OCR Module",
    icon: ScanText,
    client: "eTech Consulting",
    category: "ERP",
    description:
      "OCR integrated into Odoo, automating document extraction and eliminating manual entry for 600+ employees.",
    stack: ["Odoo", "Python", "OCR"],
    href: null,
  },
  {
    title: "School Management Platform",
    icon: School,
    client: "Self-employed",
    category: "ERP",
    description:
      "Platform for private schools: report cards from grades, courses and classes, tuition fee payments and follow-up.",
    stack: ["PHP", "MySQL", "JavaScript"],
    href: null,
  },
  {
    title: "CRUD Generation Engine",
    icon: Cog,
    client: "BICI",
    category: "Tools",
    description:
      "Interface generator for MySQL, SQL Server, Oracle and PostgreSQL — zero repetitive boilerplate.",
    stack: ["Java", "SQL"],
    href: null,
  },
  {
    title: "Database Manager",
    icon: Database,
    client: "BICI",
    category: "Tools",
    description:
      "DBeaver-inspired database management tool with a simplified UI for non-technical users.",
    stack: ["Java", "Oracle", "PostgreSQL"],
    href: null,
  },
  {
    title: "SensAI",
    icon: Eye,
    client: "AI accessibility app",
    category: "AI",
    description:
      "Mobile app for deaf and blind users — YOLOv8 object detection, OCR, voice commands, sound classification, LLM summarization.",
    stack: ["Python", "YOLOv8", "LLM"],
    href: null,
  },
  {
    title: "Antema",
    icon: Presentation,
    client: "Open source",
    category: "Tools",
    description:
      "Desktop app replacing PowerPoint for church worship — lyrics, liturgy and holy songs as slides.",
    stack: ["Tauri", "React"],
    href: "https://github.com/Antema-MG/Antema",
  },
  {
    title: "Solfa Reader",
    icon: Music,
    client: "Open source",
    category: "Tools",
    description:
      "Web player for 4-voice SATB choral music — Web Audio synthesis, per-voice mute/solo, transpose, tempo.",
    stack: ["Web Audio", "TypeScript"],
    href: "https://github.com/Antema-MG/solfa-reader",
  },
];
