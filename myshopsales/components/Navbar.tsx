import Image from "next/image";
import Link from "next/link";
import DesktopMenu from "@/components/DesktopMenu";
import MobileMenu from "@/components/MobileMenu";
import { demos } from "@/data/demos";

export type NavLink = {
    label: string;
    href: string;
    description?: string;
};

export type NavItem = {
    label: string;
    href: string;
    children?: NavLink[];
};

const demoShortDescriptions: Record<string, string> = {
    "online-shop": "The customer-facing storefront experience.",
    mpesa: "How payment works at the end of checkout.",
    "shop-management": "Manage orders, products, and inventory.",
    "business-insights": "Reports and admin summaries.",
    integrations: "Connect the services you already use.",
    discounts: "Codes and promotions at checkout.",
    reviews: "Star ratings and moderated reviews.",
    shipping: "Delivery zones and rates.",
    customers: "Who has ordered and what they bought.",
    returns: "Record and resolve customer returns.",
    suppliers: "Who you buy stock from.",
    newsletter: "Collect emails and send campaigns.",
    banners: "Hero slides on your storefront.",
};

const demoNavLinks: NavLink[] = demos.map((demo) => ({
    label: demo.title,
    href: demo.href,
    description: demoShortDescriptions[demo.slug] ?? demo.description,
}));

const navigation: NavItem[] = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Explore Demos",
        href: "/demos",
        children: [
            ...demoNavLinks,
            {
                label: "View All Demos",
                href: "/demos",
                description: "See every demo in one place.",
            },
        ],
    },
    {
        label: "Features",
        href: "/#features",
        children: [
            {
                label: "Custom Storefront",
                href: "/demos/online-shop",
                description: "A shop branded around your business.",
            },
            {
                label: "M-Pesa Payments",
                href: "/demos/mpesa",
                description: "Accept payment from customers' phones.",
            },
            {
                label: "Shop Admin",
                href: "/demos/shop-management",
                description: "Orders, products, and stock in one place.",
            },
            {
                label: "Business Reports",
                href: "/demos/business-insights",
                description: "Simple summaries of shop activity.",
            },
            {
                label: "Integrations",
                href: "/demos/integrations",
                description: "WhatsApp, email, AI, social, and cloud.",
            },
        ],
    },
    {
        label: "How It Works",
        href: "/#how-it-works",
    },
    {
        label: "Pricing",
        href: "/pricing",
    },
];

const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").replace(/\D/g, "");

const whatsappMessage = encodeURIComponent(
    "Hi, I'd like to learn more about RazeStore for my business.",
);

const whatsappHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
    : `https://wa.me/?text=${whatsappMessage}`;

export default function Navbar() {
    return (
        <header className="sticky top-0 z-40 border-b border-blue-900 bg-blue-950">
            <nav
                aria-label="Primary"
                className="mx-auto flex w-full max-w-7xl items-center gap-3 px-4 py-3 sm:px-6"
            >
                <Link
                    href="/"
                    aria-label="RazeStore home"
                    className="flex items-center gap-3 rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                    <Image
                        src="/logo.jpeg"
                        alt=""
                        width={36}
                        height={36}
                        priority
                        className="h-9 w-9 rounded object-contain"
                    />
                    <span className="text-lg font-bold tracking-tight text-white">
                        RazeStore
                    </span>
                </Link>

                <div className="ml-auto hidden lg:flex lg:items-center lg:gap-3">
                    <DesktopMenu items={navigation} />
                    <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Chat with RazeStore on WhatsApp (opens in a new tab)"
                        className="inline-flex items-center justify-center rounded bg-green-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
                    >
                        Chat on WhatsApp
                    </a>
                </div>

                <div className="ml-auto lg:hidden">
                    <MobileMenu items={navigation} whatsappHref={whatsappHref} />
                </div>
            </nav>
        </header>
    );
}