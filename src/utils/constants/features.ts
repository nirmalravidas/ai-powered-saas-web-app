import { FileImage, Bot, Zap, Download } from "lucide-react";

export const FEATURES = [
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
                tagline: "Create high-resolution images instantly, ready for any project.",
                href: "/features/analytics",
                icon: FileImage,
            },
            {
                title: "Effortless Downloads",
                tagline: "Effortlessly download your creations with a single click!",
                href: "/features",
                icon: Download,
            },
        ] as const;