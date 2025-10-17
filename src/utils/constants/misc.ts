import { Pencil, CircleUser, LogIn, LetterText, Download, Bot } from "lucide-react";

export const PAGINATION_LIMIT = 10;

export const PROCESS = [
    {
        title: "Create an Account",
        description: "To access our AI course generation features, create an account.",
        icon: CircleUser,
    },
    {
        title: "Already have an account?",
        description: "If you’re already a member, simply log in here to start generating courses.",
        icon: LogIn,
    },
    {
        title: "Enter Your Topic",
        description: "Provide the topic or subject you want a course on. The more specific, the better the AI-generated course.",
        icon: LetterText,
    },
    {
        title: "Customize Your Course",
        description: "Select the course length, style, or number of modules to tailor the content to your needs.",
        icon: Pencil,
    },
    {
        title: "Generate Your Course",
        description: "Click ‘Generate’ and let our AI create a structured course with modules, lessons, and examples.",
        icon: Bot,
    },
    {
        title: "Export & Use",
        description: "Review your course and export it in formats suitable for teaching or sharing.",
        icon: Download,
    },
] as const;

export const FEATURES = [
    {
        title: "Full Course Generation",
        description: "AI generates complete courses including modules, lessons, and examples in minutes.",
    },
    {
        title: "Customizable Content",
        description: "Tailor course length, style, and difficulty to suit your audience.",
    },
    {
        title: "High-Quality Material",
        description: "Get clear, professional, and ready-to-teach course content.",
    },
    {
        title: "Time-Saving",
        description: "Reduce weeks of course planning into a few minutes with AI automation.",
    },
    {
        title: "Multiple Subjects",
        description: "Create courses across a variety of topics and disciplines effortlessly.",
    },
    {
        title: "Instant Export",
        description: "Export courses in multiple formats for online or offline use.",
    },
] as const;
