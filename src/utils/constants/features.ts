import { FileImage, Bot, Zap, Download } from "lucide-react";

export const FEATURES = [
    {
        title: "Generate Courses With AI",
        tagline: "Create complete, structured courses in minutes – no manual planning required!",
        href: "/features",
        icon: Bot,
    },
    {
        title: "Instant Course Creation",
        tagline: "AI generates modules, lessons, and examples instantly, saving you weeks of work.",
        href: "/features",
        icon: Zap,
    },
    {
        title: "High-Quality Content",
        tagline: "Get professional, easy-to-understand courses ready for your students or audience.",
        href: "/features/analytics",
        icon: FileImage,
    },
    {
        title: "Effortless Export",
        tagline: "Easily export your course content in multiple formats for immediate use.",
        href: "/features",
        icon: Download,
    },
] as const;
