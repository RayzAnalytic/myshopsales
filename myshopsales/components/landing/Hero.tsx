import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";

const capabilityLabels = [
    "Custom storefront",
    "Product browsing",
    "Cart and checkout",
    "Admin dashboard",
    "Your own domain",
];

export default function Hero() {
    return (
        <section className="border-b border-slate-200 bg-white px-6 py-8 text-slate-900">
            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-6 lg:grid-cols-5 lg:gap-10">
                <div className="flex flex-col justify-center space-y-3 lg:col-span-2">
                    <h1 className="text-3xl font-bold leading-tight text-blue-950 sm:text-4xl lg:text-4xl">
                        Own a customized online shop for your electronics business
                    </h1>
                    <p className="max-w-xl text-base text-slate-700 sm:text-sm">
                        RazeStore is a real online store built around your shop. Customers browse your
                        products, open an item to see its details, add what they want to a cart, and
                        check out — with M-Pesa available once it is configured for your account. You
                        own the store, the content, and the domain.
                    </p>

                    <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
                        <WhatsAppButton
                            message="Hi, I'd like to know more about getting a RazeStore online shop for my business."
                            variant="primary"
                        >
                            Chat on WhatsApp
                        </WhatsAppButton>
                        <Link
                            href="/demos"
                            className="inline-flex items-center justify-center rounded border border-slate-300 bg-white px-5 py-3 text-base font-semibold text-blue-950 transition-colors hover:border-blue-950 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950"
                        >
                            Explore Demos
                        </Link>
                    </div>

                    <ul aria-label="What the shop includes" className="mt-3 flex flex-wrap gap-3">
                        {capabilityLabels.map((label) => (
                            <li
                                key={label}
                                className="inline-flex items-center rounded border border-slate-200 bg-slate-50 px-2 py-2 text-xs font-medium text-slate-700"
                            >
                                {label}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex w-full justify-center lg:col-span-3">
                    <div className="w-full max-w-full overflow-hidden rounded border border-slate-200 bg-slate-50 p-2">
                        <video
                            className="block h-auto max-h-[600px] w-full rounded object-contain"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            poster="/landing/hero-storefront.webp"
                            aria-label="RazeStore storefront preview"
                        >
                            <source src="/videos/completestorefront.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </section>
    );
}