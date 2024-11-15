import { FileImage, Bot, Zap, MessageCircle, Download } from "lucide-react";

export const NAV_LINKS = [
    {
        title: "Features",
        href: "/features",
        menu: [
            {
                title: "Generate Images With AI",
                tagline: "Create custom visuals instantly – no artistic skills required!",
                href: "/features",
                icon: Bot,
            },
            {
                title: "Instant Generation",
                tagline: "Create custom visuals instantly – no artistic skills required!",
                href: "/features",
                icon: Zap,
            },
            {
                title: "High Resolution",
                tagline: "Generate high-resolution images that are ready to use in any project.",
                href: "/features",
                icon: FileImage,
            },
            {
                title: "Effortless Downloads",
                tagline: "Download Your Creations in a Click!",
                href: "/features",
                icon: Download,
            },
        ],
    },
    {
        title: "Plans & Pricing",
        href: "/pricing",
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
                tagline: "Get answers to your questions.",
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
