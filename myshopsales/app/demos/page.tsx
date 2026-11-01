import { Suspense } from "react";
import Link from "next/link";
import DemoGrid from "@/components/demos/DemoGrid";
import type { DemoItem } from "@/components/demos/DemoGrid";
import { demos } from "@/data/demos";

const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").replace(
    /\D/g,
    "",
);

const whatsappMessage = encodeURIComponent(
    "Hi, I saw the RazeStore demos and would like a shop customized for my business.",
);

const whatsappHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
    : `https://wa.me/?text=${whatsappMessage}`;

type RawDemo = (typeof demos)[number];

// Normalizes a `Demo` record into the shape `DemoGrid` / `DemoCard` expect.
// Drops `screenshots` (not used by the card) and falls back to the poster
// when `thumbnailSrc` is empty, so the grid never shows a blank preview.
function toDemoItem(demo: RawDemo): DemoItem {
    return {
        slug: demo.slug,
        title: demo.title,
        description: demo.description,
        thumbnailSrc: demo.thumbnailSrc || demo.posterSrc || "",
        thumbnailAlt: demo.thumbnailAlt,
        href: demo.href,
        status: demo.status,
        statusKey: demo.statusKey,
        category: demo.category,
        videoSrc: demo.videoSrc,
        posterSrc: demo.posterSrc,
    };
}

// Categories in the order they first appear in `demos`, so the filter row
// matches the source file rather than alphabetical guesswork.
const allCategories = Array.from(new Set(demos.map((demo) => demo.category)));

const allItems: DemoItem[] = demos.map(toDemoItem);

function chipClasses(active: boolean) {
    return [
        "inline-flex items-center justify-center rounded border px-3 py-1.5 text-xs font-semibold transition-colors",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950",
        active
            ? "border-blue-950 bg-blue-950 text-white"
            : "border-slate-300 bg-white text-blue-950 hover:border-blue-950 hover:bg-slate-50",
    ].join(" ");
}

type DemosSearchParams = {
    category?: string;
    q?: string;
};

/* -------------------------------------------------------------------------
 * Skeletons
 * These render as the static fallback while the URL-dependent region streams
 * in. They approximate the final layout so the page doesn't jump when the
 * real filters and grid arrive.
 * ---------------------------------------------------------------------- */

function FiltersSkeleton() {
    return (
        <div className="mx-auto w-full max-w-7xl px-6 pt-6 pb-2">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex flex-wrap gap-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div
                            key={i}
                            className="h-7 w-20 animate-pulse rounded border border-slate-200 bg-slate-100"
                        />
                    ))}
                </div>
                <div className="h-8 w-48 animate-pulse rounded bg-slate-100" />
            </div>
        </div>
    );
}

function GridSkeleton() {
    return (
        <div className="mx-auto w-full max-w-7xl px-6 py-8">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                    <div
                        key={i}
                        className="h-64 animate-pulse rounded border border-slate-200 bg-slate-100"
                    />
                ))}
            </div>
        </div>
    );
}

/* -------------------------------------------------------------------------
 * URL-dependent region
 * `searchParams` is awaited *here*, inside its own Suspense boundary, so the
 * rest of the page can be prerendered as a shared static shell.
 * ---------------------------------------------------------------------- */

async function DemoResults({
    searchParams,
}: {
    searchParams?: Promise<DemosSearchParams> | DemosSearchParams;
}) {
    const resolved = (await Promise.resolve(
        searchParams ?? {},
    )) as DemosSearchParams;
    const activeCategory = resolved.category?.trim() || null;
    const searchQuery = resolved.q?.trim() || "";
    const hasActiveFilters = Boolean(activeCategory || searchQuery);

    return (
        <>
            <section className="border-t border-slate-200">
                <div className="mx-auto w-full max-w-7xl px-6 pt-6 pb-2">
                    <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                        <nav aria-label="Filter demos by category">
                            <ul className="flex flex-wrap gap-2">
                                <li>
                                    <Link
                                        href="/demos"
                                        aria-current={
                                            activeCategory === null
                                                ? "page"
                                                : undefined
                                        }
                                        className={chipClasses(
                                            activeCategory === null,
                                        )}
                                    >
                                        All
                                    </Link>
                                </li>
                                {allCategories.map((category) => (
                                    <li key={category}>
                                        <Link
                                            href={`/demos?category=${encodeURIComponent(
                                                category,
                                            )}`}
                                            aria-current={
                                                activeCategory === category
                                                    ? "page"
                                                    : undefined
                                            }
                                            className={chipClasses(
                                                activeCategory === category,
                                            )}
                                        >
                                            {category}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className="flex flex-wrap items-center gap-2">
                            <form
                                method="get"
                                action="/demos"
                                className="flex items-center gap-2"
                                role="search"
                                aria-label="Search demos"
                            >
                                {activeCategory ? (
                                    <input
                                        type="hidden"
                                        name="category"
                                        value={activeCategory}
                                    />
                                ) : null}
                                <label
                                    htmlFor="demo-search"
                                    className="sr-only"
                                >
                                    Search demos
                                </label>
                                <input
                                    id="demo-search"
                                    type="search"
                                    name="q"
                                    defaultValue={searchQuery}
                                    placeholder="Search demos"
                                    className="w-48 rounded border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-900 placeholder:text-slate-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950 sm:w-64"
                                />
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center rounded border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-blue-950 transition-colors hover:border-blue-950 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950"
                                >
                                    Search
                                </button>
                            </form>

                            {hasActiveFilters ? (
                                <Link
                                    href="/demos"
                                    className="text-xs font-semibold text-green-700 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
                                >
                                    Clear filters
                                </Link>
                            ) : null}
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-t border-slate-200">
                <div className="mx-auto w-full max-w-7xl px-6 py-8">
                    <DemoGrid
                        demos={allItems}
                        columns={3}
                        activeCategory={activeCategory}
                        searchQuery={searchQuery}
                        showCount
                        emptyMessage="No demos are available right now."
                    />
                </div>
            </section>
        </>
    );
}

/* -------------------------------------------------------------------------
 * Page
 * Synchronous. No `await searchParams` at the top. The static shell (header,
 * about box, closing CTA) prerenders; only <DemoResults> suspends.
 * ---------------------------------------------------------------------- */

export default function DemosPage({
    searchParams,
}: {
    searchParams?: Promise<DemosSearchParams> | DemosSearchParams;
}) {
    return (
        <main className="bg-white text-slate-900">
            <section className="mx-auto w-full max-w-7xl px-6 pb-6 pt-6">
                <div className="flex flex-col space-y-1.5">
                    <span className="text-xs font-semibold uppercase text-green-700">
                        Demos
                    </span>
                    <h1 className="text-xl font-bold text-blue-950 sm:text-2xl lg:text-3xl">
                        See RazeStore in action
                    </h1>
                    <p className="max-w-2xl text-sm text-slate-700 sm:text-base">
                        Explore the main parts of a RazeStore shop — the storefront,
                        M-Pesa checkout, shop management, business insights, and
                        integrations. Each demo shows what the feature looks like
                        inside a working shop, so you can compare it to how you sell
                        today.
                    </p>
                </div>
            </section>

            <section className="mx-auto w-full max-w-7xl px-6 pb-6">
                <div className="rounded border border-slate-200 bg-slate-50 p-4">
                    <div className="flex flex-col space-y-1.5">
                        <p className="text-[11px] font-semibold uppercase text-slate-500">
                            About these demos
                        </p>
                        <ul className="flex flex-col space-y-1.5 text-sm leading-relaxed text-slate-700">
                            <li>
                                Demos use sample product data to show how the shop
                                looks when it is filled in with real listings.
                            </li>
                            <li>
                                M-Pesa, WhatsApp, AI, and social features only work
                                after your credentials are configured and tested on
                                your account. They are not presented as already
                                live.
                            </li>
                            <li>
                                Your final store is customized to your shop, brand,
                                and product list — not shipped as the demo you see
                                here.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <Suspense
                fallback={
                    <>
                        <FiltersSkeleton />
                        <GridSkeleton />
                    </>
                }
            >
                <DemoResults searchParams={searchParams} />
            </Suspense>

            <section className="border-t border-slate-200 bg-slate-50">
                <div className="mx-auto w-full max-w-7xl px-6 py-8">
                    <div className="rounded border border-slate-200 bg-white p-4 sm:p-6">
                        <div className="flex flex-col space-y-1.5">
                            <h2 className="text-xl font-bold text-blue-950 sm:text-2xl">
                                Want a shop like this for your business?
                            </h2>
                            <p className="max-w-2xl text-sm text-slate-700">
                                We customize RazeStore for Kenyan electronics
                                shops. Share your shop on WhatsApp and we will walk
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
        </main>
    );
}