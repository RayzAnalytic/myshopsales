import Link from "next/link";

type FeatureStatus = "available" | "requires-setup" | "confirm-scope";

type Feature = {
    title: string;
    body: string;
    status: FeatureStatus;
    statusNote?: string;
    demoHref?: string;
    demoLabel?: string;
    icon: React.ReactNode;
};

const statusLabels: Record<FeatureStatus, string> = {
    available: "Available",
    "requires-setup": "Requires setup",
    "confirm-scope": "Confirm scope",
};

const statusClasses: Record<FeatureStatus, string> = {
    available: "border-green-700 bg-green-50 text-green-800",
    "requires-setup": "border-slate-400 bg-slate-50 text-slate-700",
    "confirm-scope": "border-blue-950 bg-white text-blue-950",
};

const features: Feature[] = [
    {
        title: "Online storefront",
        body: "A branded shop where customers browse your products, open a product to see its details, and move through to checkout on a phone or laptop.",
        status: "available",
        demoHref: "/demos/online-shop",
        demoLabel: "See the online shop demo",
        icon: (
            <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.75}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M3 9l1.5-5h15L21 9" />
                <path d="M3 9v11h18V9" />
                <path d="M9 13h6" />
            </svg>
        ),
    },
    {
        title: "Products and categories",
        body: "Add products, upload images, set prices, and group them into categories so the storefront stays organized as your list grows.",
        status: "available",
        demoHref: "/demos/shop-management",
        demoLabel: "See product management",
        icon: (
            <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.75}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <rect x="3" y="3" width="8" height="8" rx="1" />
                <rect x="13" y="3" width="8" height="8" rx="1" />
                <rect x="3" y="13" width="8" height="8" rx="1" />
                <rect x="13" y="13" width="8" height="8" rx="1" />
            </svg>
        ),
    },
    {
        title: "Cart and checkout",
        body: "Customers review their selections in a cart, adjust quantities, and move on to checkout with their delivery details.",
        status: "available",
        demoHref: "/demos/online-shop",
        demoLabel: "See the checkout flow",
        icon: (
            <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.75}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="9" cy="20" r="1.5" />
                <circle cx="18" cy="20" r="1.5" />
                <path d="M3 4h2l2.5 11h11l2-8H6" />
            </svg>
        ),
    },
    {
        title: "M-Pesa checkout",
        body: "An M-Pesa STK Push prompt lets customers pay from their phone, and the payment outcome updates the order status in the admin.",
        status: "requires-setup",
        statusNote:
            "Needs your Daraja credentials, paybill or till details, and a live test before it can be used in production.",
        demoHref: "/demos/mpesa",
        demoLabel: "See the M-Pesa demo",
        icon: (
            <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.75}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <rect x="6" y="2" width="12" height="20" rx="2" />
                <path d="M10 18h4" />
                <path d="M9 8l2 2 4-4" />
            </svg>
        ),
    },
    {
        title: "Order management",
        body: "See incoming orders in one place, open an order to view its items and delivery details, and move its status forward as you fulfil it.",
        status: "available",
        demoHref: "/demos/shop-management",
        demoLabel: "See order management",
        icon: (
            <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.75}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M4 5h16v4H4z" />
                <path d="M4 13h16v6H4z" />
                <path d="M8 17h4" />
            </svg>
        ),
    },
    {
        title: "Inventory and stock",
        body: "Track a stock level for each product, adjust quantities as items sell or get restocked, and hide products that are no longer available.",
        status: "available",
        demoHref: "/demos/shop-management",
        demoLabel: "See stock management",
        icon: (
            <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.75}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M3 7l9-4 9 4-9 4-9-4Z" />
                <path d="M3 7v10l9 4 9-4V7" />
                <path d="M12 11v10" />
            </svg>
        ),
    },
    {
        title: "Customer information",
        body: "See the contact and delivery details a customer provides with each order, so you can follow up about payment or delivery.",
        status: "available",
        demoHref: "/demos/shop-management",
        demoLabel: "See the customer view",
        icon: (
            <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.75}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="12" cy="8" r="3.5" />
                <path d="M4 20c0-4 3.5-7 8-7s8 3 8 7" />
            </svg>
        ),
    },
    {
        title: "Reports and analytics",
        body: "Simple summaries of sales, top products, and order statuses drawn from the orders already recorded in your shop — no separate bookkeeping.",
        status: "available",
        demoHref: "/demos/business-insights",
        demoLabel: "See the reports demo",
        icon: (
            <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.75}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M4 20V10" />
                <path d="M10 20V4" />
                <path d="M16 20v-6" />
                <path d="M22 20H2" />
            </svg>
        ),
    },
    {
        title: "AI assistance",
        body: "An optional assistant inside the admin that accepts a typed question and returns a text reply. Replies are assistance, not advice, and should be checked against your records.",
        status: "requires-setup",
        statusNote:
            "Needs a supported AI provider API key and account. Provider fees, if any, are charged by that provider.",
        demoHref: "/demos/business-insights",
        demoLabel: "See the AI section",
        icon: (
            <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.75}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <rect x="4" y="6" width="16" height="12" rx="2" />
                <circle cx="9" cy="12" r="1" />
                <circle cx="15" cy="12" r="1" />
                <path d="M12 3v3" />
            </svg>
        ),
    },
    {
        title: "WhatsApp and social",
        body: "Link the shop to the WhatsApp, email, and social accounts you already use. Automated connections depend on each platform's API access and account authorisation.",
        status: "requires-setup",
        statusNote:
            "Each platform needs its own account access, credentials, and live testing. A name or button on the site does not mean a platform is synced.",
        demoHref: "/demos/integrations",
        demoLabel: "See integrations",
        icon: (
            <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.75}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z" />
                <path d="M8 14c1 1 2.5 1.5 4 1.5s3-.5 4-1.5" />
            </svg>
        ),
    },
];

export default function FeaturesSection() {
    return (
        <section
            aria-labelledby="features-section-heading"
            className="border-b border-slate-200 bg-white text-slate-900"
        >
            <div className="mx-auto w-full max-w-7xl px-6 py-8">
                <div className="flex flex-col space-y-1.5">
                    
                    <h2
                        id="features-section-heading"
                        className="text-xl font-bold text-blue-950 sm:text-2xl lg:text-3xl"
                    >
                        The core capabilities of your shop
                    </h2>
                    <p className="max-w-2xl text-sm text-slate-700 sm:text-base">
                        Everything below is part of the RazeStore build. Some features are
                        ready to use out of the box, while others need your own account
                        details and testing before they run in production. The badge on each
                        item tells you which.
                    </p>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                    {(Object.keys(statusLabels) as FeatureStatus[]).map((status) => (
                        <span
                            key={status}
                            className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-semibold uppercase ${statusClasses[status]}`}
                        >
                            {statusLabels[status]}
                        </span>
                    ))}
                </div>

                <ul className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature) => (
                        <li
                            key={feature.title}
                            className="flex flex-col space-y-1.5 rounded border border-slate-200 bg-white p-3"
                        >
                            <div className="flex items-center justify-between gap-2">
                                <span
                                    aria-hidden="true"
                                    className="flex h-8 w-8 flex-none items-center justify-center rounded bg-slate-50 text-blue-950"
                                >
                                    {feature.icon}
                                </span>
                                <span
                                    className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-semibold uppercase ${statusClasses[feature.status]}`}
                                >
                                    {statusLabels[feature.status]}
                                </span>
                            </div>

                            <h3 className="text-base font-semibold text-blue-950">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-slate-700">
                                {feature.body}
                            </p>

                            {feature.statusNote ? (
                                <p className="text-xs text-slate-600">
                                    {feature.statusNote}
                                </p>
                            ) : null}

                            {feature.demoHref ? (
                                <div className="mt-auto pt-1">
                                    <Link
                                        href={feature.demoHref}
                                        className="inline-flex rounded px-1 py-1 text-xs font-semibold text-blue-950 transition-colors hover:bg-slate-50 hover:text-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950"
                                    >
                                        {feature.demoLabel ?? "See the demo"} →
                                    </Link>
                                </div>
                            ) : null}
                        </li>
                    ))}
                </ul>

                <p className="mt-3 max-w-3xl text-xs text-slate-600">
                    The final set of features in your shop is confirmed with you before
                    handover. Anything not agreed in writing is out of scope, and any
                    feature that depends on a third-party service is described as working
                    only after it has been configured and tested with your credentials.
                </p>
            </div>
        </section>
    );
}