import Link from "next/link";
import DemoViewer from "@/components/demos/VideoViewer";
import ScreenshotGallery from "@/components/demos/ScreenshotGallery";

const insightsMedia = {
    videoSrc: "/videos/completestorefront.mp4",
    posterSrc: "/landing/featured-demo-poster.webp",
    alt: "RazeStore business insights overview showing sample order and sales summaries.",
    caption:
        "Business insights overview: sample order counts, sales totals, and top-selling products inside the RazeStore admin.",
};

const insightScreenshots = [
    {
        src: "",
        alt: "RazeStore sales summary report with sample figures.",
        title: "Sales summary",
        caption:
            "Totals for a chosen period, showing sales value and order count. Figures shown are sample data, not real customer data.",
    },
    {
        src: "",
        alt: "RazeStore top products report with sample figures.",
        title: "Top products",
        caption:
            "Which products sold most in the selected period. Figures shown are sample data, not real customer data.",
    },
    {
        src: "",
        alt: "RazeStore order status summary with sample figures.",
        title: "Order status overview",
        caption:
            "A breakdown of recent orders by status (for example new, paid, delivered). Figures shown are sample data, not real customer data.",
    },
    {
        src: "",
        alt: "RazeStore AI assistant panel shown with sample prompts and replies.",
        title: "AI assistant",
        caption:
            "The AI assistant panel. Only shown after its behaviour has been verified. Prompts and replies shown are sample data, not real customer data.",
    },
];

type VerifiedFeature = {
    title: string;
    body: string;
};

const verifiedReports: VerifiedFeature[] = [
    {
        title: "Sales summary",
        body: "Shows total sales value and order count for a selected period so you can see how trading is going at a glance.",
    },
    {
        title: "Top products",
        body: "Shows which products sold the most in a chosen period, based on orders recorded in the shop.",
    },
    {
        title: "Order status overview",
        body: "Shows how many orders sit in each status — for example new, paid, delivered — so you can see what still needs action.",
    },
];

const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").replace(/\D/g, "");

const whatsappMessage = encodeURIComponent(
    "Hi, I'd like to understand the RazeStore business insights and AI assistant before deciding.",
);

const whatsappHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
    : `https://wa.me/?text=${whatsappMessage}`;

export default function BusinessInsightsDemoPage() {
    return (
        <main className="bg-white text-slate-900">
            <section className="mx-auto w-full max-w-7xl px-6 pb-6 pt-8">
                <div className="flex flex-col space-y-1.5">
                    <Link
                        href="/demos"
                        className="text-xs font-semibold text-green-700 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
                    >
                        ← Back to demos
                    </Link>
                    <h1 className="text-xl font-bold text-blue-950 sm:text-2xl lg:text-3xl">
                        Business insights
                    </h1>
                    <p className="max-w-2xl text-sm text-slate-700 sm:text-base">
                        Business insights help you see what is happening in your shop — how
                        much you sold, what moved fastest, and which orders still need
                        attention — using the orders and products already recorded in your
                        admin. This page shows the reports and AI-assisted features that have
                        been verified in the current build, and is explicit about what is
                        sample data and what still requires setup.
                    </p>
                </div>
            </section>

            <section className="mx-auto w-full max-w-7xl px-6 pb-4">
                <div className="rounded-sm border border-slate-200 bg-slate-50 p-3">
                    <div className="flex flex-col space-y-1.5">
                        <p className="text-[11px] font-semibold uppercase text-slate-500">
                            About the figures on this page
                        </p>
                        <ul className="flex flex-col space-y-1.5 text-sm text-slate-700">
                            <li>
                                Every figure, chart, and AI reply shown on this page uses{" "}
                                <strong className="text-blue-950">sample data</strong>. None of it
                                is real customer data, real sales, or real shop results.
                            </li>
                            <li>
                                Once your shop is live, these screens display figures taken from
                                your own orders and products — nothing is shared with other shops.
                            </li>
                            <li>
                                Reports are read-only summaries of data you already record. They
                                do not predict future revenue and they do not promise growth.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="mx-auto w-full max-w-7xl px-6 pb-4">
                <DemoViewer
                    videoSrc={insightsMedia.videoSrc}
                    posterSrc={insightsMedia.posterSrc}
                    alt={insightsMedia.alt}
                    caption={insightsMedia.caption}
                />
                <p className="mt-1 text-xs text-slate-600">
                    The recording above uses sample data from a demonstration shop.
                </p>
            </section>

            <section className="border-t border-slate-200 bg-slate-50">
                <div className="mx-auto w-full max-w-7xl px-6 py-8">
                    <div className="flex flex-col space-y-1.5">
                        <h2 className="text-xl font-bold text-blue-950 sm:text-2xl">
                            Verified reports
                        </h2>
                        <p className="max-w-2xl text-sm text-slate-700">
                            Each report below has been built and verified in the current
                            admin. Captions explain what the screen helps you understand.
                        </p>
                    </div>
                    <ul className="mt-3 flex flex-col space-y-2">
                        {verifiedReports.map((report) => (
                            <li
                                key={report.title}
                                className="rounded-sm border border-slate-200 bg-white p-3"
                            >
                                <div className="flex flex-col space-y-1">
                                    <h3 className="text-base font-semibold text-blue-950">
                                        {report.title}
                                    </h3>
                                    <p className="text-sm text-slate-700">
                                        {report.body}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="border-t border-slate-200">
                <div className="mx-auto w-full max-w-7xl px-6 py-6">
                    <div className="flex flex-col space-y-1.5">
                        <h2 className="text-xl font-bold text-blue-950 sm:text-2xl">
                            Report screenshots
                        </h2>
                        <p className="max-w-2xl text-sm text-slate-700">
                            Real RazeStore admin captures, using sample data. Where a screen has
                            not been captured yet, a clearly labeled placeholder is shown.
                        </p>
                    </div>
                    <div className="mt-4">
                        <ScreenshotGallery screenshots={insightScreenshots} />
                    </div>
                </div>
            </section>

            <section className="border-t border-slate-200 bg-slate-50">
                <div className="mx-auto w-full max-w-7xl px-6 py-6">
                    <div className="flex flex-col space-y-1.5">
                        <h2 className="text-xl font-bold text-blue-950 sm:text-2xl">
                            AI assistant
                        </h2>
                        <p className="max-w-2xl text-sm text-slate-700">
                            The AI assistant is an optional part of the admin. It is only
                            described here to the extent its behaviour has been verified in the
                            current build.
                        </p>
                    </div>

                    <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                        <div className="flex-1 rounded border border-slate-200 bg-white p-4">
                            <div className="flex flex-col space-y-1.5">
                                <p className="text-[11px] font-semibold uppercase text-green-700">
                                    What is verified
                                </p>
                                <h3 className="text-base font-semibold text-blue-950">
                                    What the assistant does today
                                </h3>
                                <ul className="flex flex-col space-y-1.5 text-sm text-slate-700">
                                    <li>
                                        Accepts a typed question from the admin user and returns a
                                        text reply.
                                    </li>
                                    <li>
                                        Works only when a supported AI provider API key is configured
                                        for the shop.
                                    </li>
                                    <li>
                                        Replies are not guaranteed to be correct — they are
                                        assistance, not advice, and should be checked against your own
                                        records.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex-1 rounded border border-slate-200 bg-white p-3">
                            <div className="flex flex-col space-y-1.5">
                                <p className="text-[11px] font-semibold uppercase text-slate-500">
                                    Requires your setup
                                </p>
                                <h3 className="text-base font-semibold text-blue-950">
                                    What you must provide
                                </h3>
                                <ul className="flex flex-col space-y-1.5 text-sm text-slate-700">
                                    <li>
                                        An API key and account with a supported AI provider. Provider
                                        fees, if any, are charged by that provider — not included in
                                        the one-time price.
                                    </li>
                                    <li>
                                        A working network connection from the deployed shop so the
                                        admin can reach the provider.
                                    </li>
                                    <li>
                                        Confirmation of which features you want enabled, since the
                                        assistant is optional and scope-dependent.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-3 rounded border border-slate-200 bg-white p-4">
                        <div className="flex flex-col space-y-1.5">
                            <p className="text-[11px] font-semibold uppercase text-slate-500">
                                What is not claimed
                            </p>
                            <ul className="flex flex-col space-y-1.5 text-sm text-slate-700">
                                <li>No revenue forecasts or projections.</li>
                                <li>No guarantees of business growth or improved sales.</li>
                                <li>
                                    No claim that the assistant replaces a shop owner&apos;s
                                    judgement, bookkeeping, or tax obligations.
                                </li>
                                <li>
                                    No claim that the AI replies are always accurate or appropriate
                                    for your business.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-t border-slate-200">
                <div className="mx-auto w-full max-w-7xl px-6 py-6">
                    <div className="flex flex-col space-y-1.5">
                        <h2 className="text-xl font-bold text-blue-950 sm:text-2xl">
                            Continue exploring
                        </h2>
                        <p className="max-w-2xl text-sm text-slate-700">
                            See how the underlying orders and products are managed in the shop
                            admin, or return to the full list of RazeStore demos.
                        </p>
                    </div>
                    <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                        <Link
                            href="/demos/shop-management"
                            className="inline-flex items-center justify-center rounded bg-blue-950 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950"
                        >
                            View the shop-management demo
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
                    <div className="rounded border border-slate-200 bg-slate-50 p-3 sm:p-6">
                        <div className="flex flex-col space-y-1.5">
                            <h2 className="text-xl font-bold text-blue-950 sm:text-2xl">
                                Questions about insights or the AI assistant?
                            </h2>
                            <p className="max-w-2xl text-sm text-slate-700">
                                Ask on WhatsApp and we will confirm what is available today, what
                                needs setup, and what stays out of scope.
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