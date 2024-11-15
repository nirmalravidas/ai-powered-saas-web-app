import { Pencil, CircleUser, LogIn, LetterText,Image, Download } from "lucide-react";

export const PAGINATION_LIMIT = 10;

export const PROCESS = [
    {
        title: "Create an Account",
        description: "To access our image generation features, create a account.",
        icon: CircleUser,
    },
    {
        title: "Already have an account?",
        description: "If you’re already a member, simply log in here to continue creating unique images.",
        icon: LogIn,
    },
    {
        title: "Enter Your Description",
        description: "Describe the image you envision. The more detail you provide, the better the results!",
        icon: LetterText,
    },
    {
        title: "Customize Your Options",
        description: "Select the number of images you want to generate and choose the resolution.",
        icon: Pencil,
    },
    {
        title: "Generate Your Image",
        description: "Click the ‘Generate’ button and let our AI work its magic.",
        icon: Image,
    },
    {
        title: "Save Your Artwork",
        description: "If you love the image, click ‘Download’ to save it to your device.",
        icon: Download,
    },
] as const;

export const FEATURES = [
    {
        title: "Link shortening",
        description: "Create short links that are easy to remember and share.",
    },
    {
        title: "Advanced analytics",
        description: "Track and measure the performance of your links.",
    },
    {
        title: "Password protection",
        description: "Secure your links with a password.",
    },
    {
        title: "Custom QR codes",
        description: "Generate custom QR codes for your links.",
    },
    {
        title: "Link expiration",
        description: "Set an expiration date for your links.",
    },
    {
        title: "Team collaboration",
        description: "Share links with your team and collaborate in real-time.",
    },
] as const;
