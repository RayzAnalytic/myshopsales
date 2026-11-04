import Link from "next/link";
import VideoViewer from "@/components/demos/VideoViewer";
import ScreenshotGallery from "@/components/demos/ScreenshotGallery";
import type { Screenshot } from "@/components/demos/ScreenshotGallery";

const adminMedia = {
    videoSrc: "/videos/shopmanagement.mp4",
    posterSrc: "/images/ordersadmin.png",
    alt: "RazeStore admin walkthrough showing orders, products, and stock being managed.",
    caption:
        "Admin walkthrough: reviewing incoming orders, editing products, and adjusting stock levels.",
};

const adminScreenshots: Screenshot[] = [
    {
        src: "/images/ordersadmin.png",
        alt: "RazeStore admin order list showing recent orders and their statuses.",
        title: "Orders",
        caption:
            "Review incoming orders, open an order to see its details, and update its status as you fulfil it.",
    },
    {
        src: "/images/productsadmin.png",
        alt: "RazeStore admin product list with names, prices, and stock levels.",
        title: "Products",
        caption:
            "Add, edit, or remove products, upload images, and set prices without touching any code.",
    },
    {
        src: "/images/categorisadmin.png",
        alt: "RazeStore admin category management screen.",
        title: "Categories",
        caption:
            "Organize products into categories so customers can find things quickly on the storefront.",
    },
    {
        src: "/images/inventoryadmin.png",
        alt: "RazeStore admin inventory view showing stock quantities.",
        title: "Stock and inventory",
        caption:
            "See current stock levels and adjust quantities as items sell or get restocked.",
    },
    {
        src: "/images/customersadmin.png",
        alt: "RazeStore admin customer view showing customer details for recent orders.",
        title: "Customers",
        caption:
            "See the customer details attached to orders, such as name, phone number, and delivery information.",
    },
];

type Feature = {
    title: string;
    body: string;
    pendingVerification?: boolean;
};

const coreFeatures: Feature[] = [
    {
        title: "Order management",
        body: "View incoming orders, open an order to see the items and delivery details, and move its status forward as you fulfil it — for example from new to paid to delivered.",
    },
    {
        title: "Product management",
        body: "Add new products, upload images, set prices and descriptions, and take products off the storefront when they are no longer available.",
    },
    {
        title: "Stock and inventory",
        body: "Track how many of each product you have on hand, so you can restock before you run out and know what to hide when an item sells out.",
    },
    {
        title: "Categories",
        body: "Group your products into categories so the storefront stays organized and customers can browse by type.",
    },
    {
        title: "Customer information",
        body: "See the details a customer provides when they place an order, so you can contact them about payment or delivery.",
    },
];

const conditionalFeatures: Feature[] = [
    {
        title: "Discounts",
        body: "Discount pricing may be supported in the current build depending on the agreed scope.",
        pendingVerification: true,
    },
    {
        title: "Reviews",
        body: "Customer reviews may be supported in the current build depending on the agreed scope.",
        pendingVerification: true,
    },
    {
        title: "Supplier management",
        body: "Supplier tracking may be supported in the current build depending on the agreed scope.",
        pendingVerification: true,
    },
    {
        title: "Reports and administrative summaries",
        body: "Admin summaries such as recent orders and basic sales totals may be supported in the current build, and are described in more detail on the business-insights demo.",
        pendingVerification: true,
    },
];

const whatsappNumber = ("+254116103872").replace(/\D/g, "");

const whatsappMessage = encodeURIComponent(
    "Hi, I'd like to discuss the RazeStore admin and what can be customized for my shop.",
);

const whatsappHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
    : `https://wa.me/?text=${whatsappMessage}`;

function FeatureList({ features }: { features: Feature[] }) {
    return (
        <ul className="mt-4 flex flex-col space-y-2">
            {features.map((feature) => (
                <li
                    key={feature.title}
                    className="rounded border border-slate-200 bg-white p-3"
                >
                    <div className="flex flex-col space-y-1.5">
                        <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-base font-semibold text-blue-950">
                                {feature.title}
                            </h3>
                            {feature.pendingVerification ? (
                                <span className="rounded border border-slate-300 bg-slate-50 px-2 py-0.5 text-[11px] font-semibold uppercase text-slate-600">
                                    Confirm scope
                                </span>
                            ) : null}
                        </div>
                        <p className="text-sm text-slate-700">
                            {feature.body}
                        </p>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default function ShopManagementDemoPage() {
    return (
        <main className="bg-white text-slate-900">
            <section className="mx-auto w-full max-w-7xl px-6 pb-4 pt-6">
                <div className="flex flex-col space-y-1.5">
                    <Link
                        href="/demos"
                        className="text-xs font-semibold text-green-700 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
                    >
                        ← Back to demos
                    </Link>
                    <h1 className="text-xl font-bold text-blue-950 sm:text-2xl lg:text-3xl">
                        Shop management
                    </h1>
                    <p className="max-w-2xl text-sm text-slate-700 sm:text-base">
                        The RazeStore admin is where you manage your online shop after it
                        goes live. You do not need to write code: you add products, track
                        orders, and update statuses from a simple interface. This page walks
                        through the features that are part of the current build, and flags
                        anything that depends on your final agreed scope.
                    </p>
                </div>
            </section>

            <section className="mx-auto w-full max-w-7xl px-6 pb-4">
                <VideoViewer
                    videoSrc={adminMedia.videoSrc}
                    posterSrc={adminMedia.posterSrc}
                    alt={adminMedia.alt}
                    caption={adminMedia.caption}
                />
                <p className="mt-2 text-xs text-slate-600">
                    The recording above uses sample data from a demonstration shop. It is not
                    a live shop or real customer information.
                </p>
            </section>

            <section className="mx-auto w-full max-w-7xl px-6 pb-6">
                <div className="rounded border border-slate-200 bg-slate-50 p-4">
                    <div className="flex flex-col space-y-1.5">
                        <p className="text-[11px] font-semibold uppercase text-slate-500">
                            About this demo
                        </p>
                        <ul className="flex flex-col space-y-1.5 text-sm text-slate-700">
                            <li>
                                Screenshots on this page are taken from the RazeStore admin and
                                use sample data. Where a screen has not been captured yet, a
                                clearly labeled placeholder is shown.
                            </li>
                            <li>
                                Core features described below are part of the current build.
                                Features marked{" "}
                                <span className="font-semibold">Confirm scope</span> may be
                                supported depending on what is agreed, and are not presented as
                                already delivered.
                            </li>
                            <li>
                                The final admin you receive is customized for your shop, so the
                                exact set of screens and actions is confirmed with you before
                                handover.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="border-t border-slate-200">
                <div className="mx-auto w-full max-w-7xl px-6 py-8">
                    <div className="flex flex-col space-y-1.5">
                        <h2 className="text-xl font-bold text-blue-950 sm:text-2xl">
                            Admin screens
                        </h2>
                        <p className="max-w-2xl text-sm text-slate-700">
                            Each caption explains what the screen helps you do as the shop
                            owner.
                        </p>
                    </div>
                    <div className="mt-4">
                        <ScreenshotGallery screenshots={adminScreenshots} />
                    </div>
                </div>
            </section>

            <section className="border-t border-slate-200 bg-slate-50">
                <div className="mx-auto w-full max-w-7xl px-6 py-6">
                    <div className="flex flex-col space-y-1.5">
                        <h2 className="text-xl font-bold text-blue-950 sm:text-2xl">
                            Features in the current build
                        </h2>
                        <p className="max-w-2xl text-sm text-slate-700">
                            These are the core admin features used in day-to-day running of the
                            shop.
                        </p>
                    </div>
                    <FeatureList features={coreFeatures} />
                </div>
            </section>

            <section className="border-t border-slate-200">
                <div className="mx-auto w-full max-w-7xl px-6 py-6">
                    <div className="flex flex-col space-y-1.5">
                        <h2 className="text-xl font-bold text-blue-950 sm:text-2xl">
                            Features that depend on your agreed scope
                        </h2>
                        <p className="max-w-2xl text-sm text-slate-700">
                            The items below can be part of the admin, but only when they are
                            confirmed in the final scope. They are not presented as already
                            delivered.
                        </p>
                    </div>
                    <FeatureList features={conditionalFeatures} />
                </div>
            </section>

            <section className="border-t border-slate-200 bg-slate-50">
                <div className="mx-auto w-full max-w-7xl px-6 py-6">
                    <div className="flex flex-col space-y-1.5">
                        <h2 className="text-xl font-bold text-blue-950 sm:text-2xl">
                            Continue exploring
                        </h2>
                        <p className="max-w-2xl text-sm text-slate-700">
                            See how admin data turns into simple business insights, or return to
                            the full list of RazeStore demos.
                        </p>
                    </div>
                    <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                        <Link
                            href="/demos/business-insights"
                            className="inline-flex items-center justify-center rounded bg-blue-950 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950"
                        >
                            View the business-insights demo
                        </Link>
                        <Link
                            href="/demos"
                            className="inline-flex items-center justify-center rounded border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-blue-950 transition-colors hover:border-blue-950 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950"
                        >
                            Back to all demos
                        </Link>
                    </div>
                </div>
            </section>

            <section className="border-t border-slate-200 bg-white">
                <div className="mx-auto w-full max-w-7xl px-6 py-6">
                    <div className="rounded border border-slate-200 bg-slate-50 p-4">
                        <div className="flex flex-col space-y-1.5">
                            <h2 className="text-xl font-bold text-blue-950 sm:text-2xl">
                                Want the admin customized for your shop?
                            </h2>
                            <p className="max-w-2xl text-sm text-slate-700">
                                Share how you run your shop today on WhatsApp and we will walk
                                through what the admin covers, what needs to be confirmed, and
                                what fits your business.
                            </p>
                            <div className="flex flex-col gap-2 pt-1 sm:flex-row">
                                <a
                                    href={whatsappHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded bg-green-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
                                >
                                    Chat on WhatsApp
                                </a>
                                <Link
                                    href="/pricing"
                                    className="inline-flex items-center justify-center rounded border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-blue-950 transition-colors hover:border-blue-950 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950"
                                >
                                    View pricing
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}