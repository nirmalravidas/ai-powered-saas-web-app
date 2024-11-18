export const PLANS = [
    {
        name: "Free",
        info: "For most individuals.",
        price: {
            monthly: 0,
            yearly: 0,
        },
        features: [
            { text: "Only 4 images.", tooltip: "Number of images" },
            { text: "256x256, 512x512, 1024x1024", tooltip: "Image resolutions" },
            { text: "$0", tooltip: "Price" },
        ],
        btn: {
            text: "Start for free",
            href: "/sign-up",
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
            { text: "50 images", tooltip: "Number of images" },
            { text: "256x256, 512x512, 1024x1024", tooltip: "Image resolutions" },
            { text: "$49", tooltip: "Price" },
            
        ],
        btn: {
            text: "Get started",
            href: "/payment",
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
            { text: "150 images", tooltip: "Number of images" },
            { text: "256x256, 512x512, 1024x1024", tooltip: "Image resolutions" },
            { text: "$299", tooltip: "Price" },
        ],
        btn: {
            text: "Get started",
            href: "/payment",
            variant: "default",
        }
    }
];

export const PRICING_FEATURES = [
    {
        text: "Only 4 images.",
        tooltip: "NUmber of images.",
    },
    {
        text: "Only 50 images",
        tooltip: "Number of images",
    },
    {
        text: "only 150 images",
        tooltip: "Number of images",
    },
];

export const WORKSPACE_LIMIT = 2;