export const PLANS = [
    {
        name: "Free",
        info: "For most individuals.",
        price: {
            monthly: 0,
            yearly: 0,
        },
        features: [
            { text: "Only 4 images.", tooltip: "Number of images per month" },
            { text: "256x256, 512x512, 1024x1024", tooltip: "Image resolutions" },
            { text: "$0 / month", tooltip: "Price" },
        ],
        btn: {
            text: "Start for free",
            href: "/sign-up?plan=free",
            variant: "default",
        }
    },
    {
        name: "Pro",
        info: "For regular users.",
        price: {
            monthly: 49,
            yearly: Math.round(9 * 12 * (1 - 0.12)),
        },
        features: [
            { text: "60 images/month", tooltip: "Number of images per month" },
            { text: "256x256, 512x512, 1024x1024", tooltip: "Image resolutions" },
            { text: "$49/month", tooltip: "Price" },
            
        ],
        btn: {
            text: "Get started",
            href: "/sign-up?plan=pro",
            variant: "purple",
        }
    },
    {
        name: "Premier",
        info: "Best for Professionals.",
        price: {
            monthly: 299,
            yearly: Math.round(49 * 12 * (1 - 0.12)),
        },
        features: [
            { text: "200 images/month", tooltip: "Number of images per month" },
            { text: "256x256, 512x512, 1024x1024", tooltip: "Image resolutions" },
            { text: "$299 / month", tooltip: "Price" },
        ],
        btn: {
            text: "Get started",
            href: "/sign-up?plan=premier",
            variant: "default",
        }
    }
];

export const PRICING_FEATURES = [
    {
        text: "Shorten links",
        tooltip: "Create shortened links",
    },
    {
        text: "Track clicks",
        tooltip: "Track clicks on your links",
    },
    {
        text: "See top countries",
        tooltip: "See top countries where your links are clicked",
    },
    {
        text: "Upto 10 tags",
        tooltip: "Add upto 10 tags to your links",
    },
    {
        text: "Community support",
        tooltip: "Community support is available for free users",
    },
    {
        text: "Priority support",
        tooltip: "Get priority support from our team",
    },
    {
        text: "AI powered suggestions",
        tooltip: "Get AI powered suggestions for your links",
    },
];

export const WORKSPACE_LIMIT = 2;