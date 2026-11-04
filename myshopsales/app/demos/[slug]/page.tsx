import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import VideoViewer from "@/components/demos/VideoViewer";
import ScreenshotGallery from "@/components/demos/ScreenshotGallery";
import { demos, getDemoBySlug } from "@/data/demos";

const whatsappNumber = ("+254116103872").replace(/\D/g, "");

const whatsappMessage = encodeURIComponent(
    "Hi, I'd like to ask about this RazeStore demo for my shop.",
);

const whatsappHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
    : `https://wa.me/?text=${whatsappMessage}`;

export function generateStaticParams() {
    return demos.map((demo) => ({ slug: demo.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }> | { slug: string };
}): Promise<Metadata> {
    const { slug } = await Promise.resolve(params);
    const demo = getDemoBySlug(slug);
    if (!demo) return { title: "Demo not found" };
    return {
        title: `${demo.title} — RazeStore demo`,
        description: demo.description,
    };
}

function statusBadge(statusKey: string) {
    switch (statusKey) {
        case "available":
            return "border-emerald-300 bg-emerald-50 text-emerald-800";
        case "requires-setup":
            return "border-amber-300 bg-amber-50 text-amber-800";
        case "confirm-scope":
            return "border-sky-300 bg-sky-50 text-sky-800";
        default:
            return "border-slate-300 bg-slate-50 text-slate-700";
    }
}

const categoryHref = (category: string) =>
    `/demos?category=${encodeURIComponent(category)}`;

function DemoDetailSkeleton() {
    return (
        <>
            <div className="mx-auto w-full max-w-7xl px-6 pb-6 pt-8">
                <div className="flex flex-col space-y-2">
                    <div className="h-3 w-24 animate-pulse rounded bg-slate-100" />
                    <div className="h-8 w-64 animate-pulse rounded bg-slate-100" />
                    <div className="h-3 w-20 animate-pulse rounded bg-slate-100" />
                    <div className="h-4 w-full max-w-xl animate-pulse rounded bg-slate-100" />
                    <div className="h-4 w-full max-w-md animate-pulse rounded bg-slate-100" />
                </div>
            </div>
            <div className="mx-auto w-full max-w-7xl px-4 pb-4">
                <div className="aspect-video w-full animate-pulse rounded border border-slate-200 bg-slate-100" />
            </div>
            <div className="mx-auto w-full max-w-7xl px-4 py-8">
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <div
                            key={i}
                            className="h-48 animate-pulse rounded border border-slate-200 bg-slate-100"
                        />
                    ))}
                </div>
            </div>
        </>
    );
}


async function DemoDetail({
    params,
}: {
    params: Promise<{ slug: string }> | { slug: string };
}) {
    const { slug } = await Promise.resolve(params);
    const demo = getDemoBySlug(slug);
    if (!demo) notFound();

    const requiresSetup =
        demo.statusKey === "requires-setup" || demo.statusKey === "confirm-scope";

    return (
        <>
            <section className="mx-auto w-full max-w-7xl px-4 pb-4 pt-6">
                <div className="flex flex-col space-y-1.5">
                    <Link
                        href="/demos"
                        className="text-xs font-semibold text-green-700 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
                    >
                        ← Back to demos
                    </Link>
                    <div className="flex flex-wrap items-center gap-2">
                        <h1 className="text-xl font-bold text-blue-950 sm:text-2xl lg:text-3xl">
                            {demo.title}
                        </h1>
                        <span
                            className={`inline-flex items-center rounded border px-2 py-0.5 text-[11px] font-semibold uppercase ${statusBadge(
                                demo.statusKey,
                            )}`}
                        >
                            {demo.status}
                        </span>
                    </div>
                    <Link
                        href={categoryHref(demo.category)}
                        className="w-fit text-xs font-semibold uppercase text-slate-500 hover:text-blue-950 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950"
                    >
                        {demo.category}
                    </Link>
                    <p className="max-w-2xl text-sm text-slate-700 sm:text-base">
                        {demo.description}
                    </p>
                </div>
            </section>

            {demo.videoSrc ? (
                <section className="mx-auto w-full max-w-7xl px-6 pb-6">
                    <VideoViewer
                        videoSrc={demo.videoSrc}
                        posterSrc={demo.posterSrc}
                        alt={demo.thumbnailAlt}
                        caption={`${demo.title} walkthrough using sample data from a demonstration shop.`}
                    />
                    <p className="mt-2 text-xs text-slate-600">
                        The recording above uses sample data. It is not a live shop or
                        real customer information.
                    </p>
                </section>
            ) : null}

            {requiresSetup ? (
                <section className="mx-auto w-full max-w-7xl px-4 pb-6">
                    <div className="rounded border border-amber-300 bg-amber-50 p-4">
                        <div className="flex flex-col space-y-1.5">
                            <p className="text-[11px] font-semibold uppercase text-amber-800">
                                Requires setup
                            </p>
                            <p className="text-sm text-amber-900">
                                This feature needs your own account access, credentials,
                                and live testing before it works on your shop. The
                                screen shown here is the interface, not a working
                                connection.
                            </p>
                        </div>
                    </div>
                </section>
            ) : null}

            {demo.screenshots.length > 0 ? (
                <section className="border-t border-slate-200 bg-slate-50">
                    <div className="mx-auto w-full max-w-7xl px-6 py-8">
                        <div className="flex flex-col space-y-1.5">
                            <h2 className="text-xl font-bold text-blue-950 sm:text-2xl">
                                Screenshots
                            </h2>
                            <p className="max-w-2xl text-sm text-slate-700">
                                Real RazeStore captures using sample data. Where a
                                screen has not been captured yet, a clearly labeled
                                placeholder is shown.
                            </p>
                        </div>
                        <div className="mt-4">
                            <ScreenshotGallery screenshots={demo.screenshots} />
                        </div>
                    </div>
                </section>
            ) : null}

            <section className="border-t border-slate-200">
                <div className="mx-auto w-full max-w-7xl px-6 py-6">
                    <div className="flex flex-col space-y-1.5">
                        <h2 className="text-xl font-bold text-blue-950 sm:text-2xl">
                            Continue exploring
                        </h2>
                        <p className="max-w-2xl text-sm text-slate-700">
                            Browse more demos in the same category, or return to the
                            full list.
                        </p>
                    </div>
                    <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                        <Link
                            href={categoryHref(demo.category)}
                            className="inline-flex items-center justify-center rounded bg-blue-950 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950"
                        >
                            More {demo.category} demos
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
                    <div className="rounded border border-slate-200 bg-slate-50 p-4 sm:p-6">
                        <div className="flex flex-col space-y-1.5">
                            <h2 className="text-xl font-bold text-blue-950 sm:text-2xl">
                                Want this for your shop?
                            </h2>
                            <p className="max-w-2xl text-sm text-slate-700">
                                Share how you sell today on WhatsApp and we will walk
                                through what fits your business — no obligation.
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
        </>
    );
}


export default function DemoDetailPage({
    params,
}: {
    params: Promise<{ slug: string }> | { slug: string };
}) {
    return (
        <main className="bg-white text-slate-900">
            <Suspense fallback={<DemoDetailSkeleton />}>
                <DemoDetail params={params} />
            </Suspense>
        </main>
    );
}