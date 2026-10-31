import Link from "next/link";
import DemoViewer from "@/components/demos/VideoViewer";
import ScreenshotGallery from "@/components/demos/ScreenshotGallery";

const storefrontMedia = {
    videoSrc: "/videos/completestorefront.mp4",
    posterSrc: "/landing/featured-demo-poster.webp",
    alt: "RazeStore online shop storefront showing product listings and navigation.",
    caption:
        "Storefront view: product listings, categories, and search as a customer sees them.",
};

const galleryScreenshots = [
    {
        src: "",
        alt: "RazeStore online shop product listing with real product entries.",
        title: "Product listing",
        caption:
            "A grid of products with names, images, and prices as customers browse them.",
    },
    {
        src: "",
        alt: "RazeStore product detail page showing a single item's photos and price.",
        title: "Product details",
        caption:
            "Individual product page with images, description, and the add-to-cart action.",
    },
    {
        src: "",
        alt: "RazeStore shopping cart with items ready for checkout.",
        title: "Shopping cart",
        caption:
            "Cart view showing selected items, quantities, and the proceed-to-checkout action.",
    },
];

const shoppingSteps = [
    {
        title: "Browse products",
        body: "Customers land on your shop, see product listings organized by category, and use search to find what they need.",
    },
    {
        title: "Select items",
        body: "Tapping a product opens its detail page with images, description, price, and the option to add it to the cart.",
    },
    {
        title: "Review the cart",
        body: "The cart shows everything the customer has chosen, with quantities and totals they can adjust before paying.",
    },
    {
        title: "Proceed to checkout",
        body: "Checkout collects delivery details and hands off to M-Pesa payment. M-Pesa must be configured and tested with your credentials before this step is live.",
    },
];

const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").replace(/\D/g, "");

const whatsappMessage = encodeURIComponent(
    "Hi, I'm interested in a RazeStore online shop for my electronics business.",
);

const whatsappHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
    : `https://wa.me/?text=${whatsappMessage}`;

export default function OnlineShopDemoPage() {
    return (
        <main className="bg-white text-slate-900">
            <section className="mx-auto w-full max-w-7xl px-6 pb-6 pt-6">
                <div className="flex flex-col space-y-1.5">
                    <Link
                        href="/demos"
                        className="text-xs font-semibold text-green-700 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
                    >
                        ← Back to demos
                    </Link>
                    <h1 className="text-xl font-bold text-blue-950 sm:text-2xl lg:text-3xl">
                        Online shop
                    </h1>
                    <p className="max-w-2xl text-sm text-slate-700 sm:text-base">
                        This is what your customers see when they visit your RazeStore online
                        shop. They browse your products, open a product to see more, add items
                        to a cart, and go to checkout — all from a phone or laptop.
                    </p>
                </div>
            </section>

            <section className="mx-auto w-full max-w-7xl px-6 pb-6">
                <DemoViewer
                    videoSrc={storefrontMedia.videoSrc}
                    posterSrc={storefrontMedia.posterSrc}
                    alt={storefrontMedia.alt}
                    caption={storefrontMedia.caption}
                />
                <p className="mt-2 text-xs text-slate-600">
                    The storefront above is captured from a working RazeStore shop. Product
                    data shown is sample data used for demonstration.
                </p>
            </section>

            <section className="border-t border-slate-200 bg-slate-50">
                <div className="mx-auto w-full max-w-7xl px-6 py-6">
                    <div className="flex flex-col space-y-1.5">
                        <h2 className="text-xl font-bold text-blue-950 sm:text-2xl">
                            Storefront screenshots
                        </h2>
                        <p className="max-w-2xl text-sm text-slate-700">
                            Real RazeStore captures of the product listing, product details, and
                            cart. Where a screen is not yet captured, a clearly labeled
                            placeholder is shown.
                        </p>
                    </div>
                    <div className="mt-4">
                        <ScreenshotGallery screenshots={galleryScreenshots} />
                    </div>
                </div>
            </section>

            <section className="border-t border-slate-200">
                <div className="mx-auto w-full max-w-7xl px-6 py-6">
                    <div className="flex flex-col space-y-1.5">
                        <h2 className="text-xl font-bold text-blue-950 sm:text-2xl">
                            How a customer shops
                        </h2>
                        <p className="max-w-2xl text-sm text-slate-700">
                            The online shop follows the familiar flow of any online store, so
                            your customers already know what to do.
                        </p>
                    </div>
                    <ol className="mt-3 flex flex-col space-y-2">
                        {shoppingSteps.map((step, index) => (
                            <li
                                key={step.title}
                                className="rounded-sm border border-slate-200 bg-white p-4"
                            >
                                <div className="flex flex-col space-y-1">
                                    <p className="text-[11px] font-semibold uppercase text-green-700">
                                        Step {index + 1}
                                    </p>
                                    <h3 className="text-base font-semibold text-blue-950">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-slate-700">
                                        {step.body}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <section className="border-t border-slate-200 bg-slate-50">
                <div className="mx-auto w-full max-w-7xl px-6 py-8">
                    <div className="flex flex-col space-y-1.5">
                        <h2 className="text-xl font-bold text-blue-950 sm:text-2xl">
                            Your shop, your brand
                        </h2>
                        <p className="max-w-2xl text-sm text-slate-700">
                            The online shop you receive is built around your business, not a
                            generic template. You provide the details, we set the shop up around
                            them.
                        </p>
                    </div>
                    <ul className="mt-3 flex flex-col space-y-1.5 text-sm text-slate-800">
                        <li>
                            <strong className="text-blue-950">Business name and branding:</strong>{" "}
                            your shop name, logo, and colors are used across the storefront.
                        </li>
                        <li>
                            <strong className="text-blue-950">Your products:</strong> your
                            product list, images, prices, and descriptions replace the sample
                            data.
                        </li>
                        <li>
                            <strong className="text-blue-950">Your domain:</strong> your online
                            shop is served on a domain you own, once it is set up on Vercel.
                        </li>
                        <li>
                            <strong className="text-blue-950">Your credentials:</strong> checkout
                            and other integrations use accounts you control, configured and
                            tested before handover.
                        </li>
                    </ul>
                </div>
            </section>

            <section className="border-t border-slate-200">
                <div className="mx-auto w-full max-w-7xl px-6 py-6">
                    <div className="flex flex-col space-y-1.5">
                        <h2 className="text-xl font-bold text-blue-950 sm:text-2xl">
                            Continue exploring
                        </h2>
                        <p className="max-w-2xl text-sm text-slate-700">
                            See how payment works inside the same shop, or return to the full
                            list of RazeStore demos.
                        </p>
                    </div>
                    <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                        <Link
                            href="/demos/mpesa"
                            className="inline-flex items-center justify-center rounded-sm bg-blue-950 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950"
                        >
                            View the M-Pesa checkout demo
                        </Link>
                        <Link
                            href="/demos"
                            className="inline-flex items-center justify-center rounded-sm border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-blue-950 transition-colors hover:border-blue-950 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950"
                        >
                            Back to all demos
                        </Link>
                    </div>
                </div>
            </section>

            <section className="border-t border-slate-200 bg-white">
                <div className="mx-auto w-full max-w-7xl px-6 py-8">
                    <div className="rounded border border-slate-200 bg-slate-50 p-4 sm:p-6">
                        <div className="flex flex-col space-y-1.5">
                            <h2 className="text-xl font-bold text-blue-950 sm:text-2xl">
                                Want this shop customized for your business?
                            </h2>
                            <p className="max-w-2xl text-sm text-slate-700">
                                Share your shop on WhatsApp and we will walk through how the online
                                shop would look with your own products, branding, and domain.
                            </p>
                            <div className="flex flex-col gap-2 pt-1 sm:flex-row">
                                <a
                                    href={whatsappHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-sm bg-green-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
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