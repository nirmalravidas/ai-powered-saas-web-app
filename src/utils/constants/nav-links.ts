import { FileImage, Bot, Zap, MessageCircle, Download } from "lucide-react";

export const NAV_LINKS = [
    {
        title: "Features",
        href: "/features",
        menu: [
            {
                title: "Generate Courses With AI",
                tagline: "Create complete, structured courses instantly – no manual planning required!",
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
                tagline: "Get professional, ready-to-teach course content for any subject or audience.",
                href: "/features",
                icon: FileImage,
            },
            {
                title: "Effortless Export",
                tagline: "Easily export your courses in multiple formats for immediate use.",
                href: "/features",
                icon: Download,
            },
        ],
    },
    {
        title: "How it Works",
        href: "/howitworks",
    },
    {
        title: "Resources",
        href: "/resources",
        menu: [
            {
                title: "FAQ",
                tagline: "Find answers about generating AI-powered courses quickly.",
                href: "/resources/faq",
                icon: MessageCircle,
            },
        ]
    },
    {
        title: "About",
        href: "/about",
    },
];
