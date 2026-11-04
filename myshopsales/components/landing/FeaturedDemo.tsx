import Link from "next/link";
import VideoViewer from "@/components/demos/VideoViewer";
import DemoGrid from "@/components/demos/DemoGrid";
import type { DemoItem } from "@/components/demos/DemoGrid";
import { demos } from "@/data/demos";

const FEATURED_MEDIA = {
    videoSrc: "/videos/completestorefront.mp4",
    posterSrc: "/images/storefrontposter.png",
    alt: "RazeStore featured demo recording showing the customer-facing online shop.",
    caption:
        "Featured demo: browsing products, opening a product detail, and moving to checkout inside a RazeStore shop.",
};

const FEATURED_DEMO_SLUG = "online-shop";

// Excludes the featured demo so it isn't shown twice on the page.
const SMALLER_DEMO_SLUGS = ["mpesa", "shop-management", "business-insights"];

type RawDemo = (typeof demos)[number];

// Normalizes a Demo record into the shape DemoGrid/DemoCard expect,
// filling empty thumbnailSrc with the poster so the preview is never blank.
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

export default function FeaturedDemo() {
    const smallerDemos: DemoItem[] = demos
        .filter((demo) => SMALLER_DEMO_SLUGS.includes(demo.slug))
        .map(toDemoItem);

    const hasFeaturedVideo = Boolean(FEATURED_MEDIA.videoSrc);

    return (
        <section
            aria-labelledby="featured-demo-heading"
            className="border-b border-slate-200 bg-white text-slate-900"
        >
            <div className="mx-auto w-full max-w-7xl px-6 py-8">
                <div className="flex flex-col space-y-1.5">
                    <h2
                        id="featured-demo-heading"
                        className="text-xl font-bold text-blue-950 sm:text-2xl lg:text-3xl"
                    >
                        See the online shop your customers will use
                    </h2>
                    <p className="max-w-2xl text-sm text-slate-700 sm:text-base">
                        A short look at the customer-facing side of a RazeStore shop — the
                        product listing, a single product page, the cart, and the step into
                        checkout. The full walkthrough, including the admin behind it, is on
                        the dedicated demo page.
                    </p>
                </div>

                <div className="mt-2 grid grid-cols-1 items-center gap-3 lg:grid-cols-5">
                    <div className="lg:col-span-3">
                        {hasFeaturedVideo ? (
                            <VideoViewer
                                videoSrc={FEATURED_MEDIA.videoSrc}
                                posterSrc={FEATURED_MEDIA.posterSrc}
                                alt={FEATURED_MEDIA.alt}
                                caption={FEATURED_MEDIA.caption}
                            />
                        ) : (
                            <div className="flex aspect-video w-full items-center justify-center rounded border border-slate-200 bg-slate-50 p-4">
                                <div className="flex flex-col items-center space-y-2 text-center">
                                    <span className="text-sm font-semibold text-slate-700">
                                        Featured demo preview
                                    </span>
                                    <span className="max-w-sm text-xs text-slate-500">
                                        A real RazeStore recording will appear here once it is
                                        supplied. Until then, explore the dedicated demo page for the
                                        full walkthrough.
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col space-y-2 lg:col-span-2">
                        <h3 className="text-base font-semibold text-blue-950">
                            Online shop walkthrough
                        </h3>
                        <p className="text-sm text-slate-700">
                            Customers browse your products, open an item to see its images and
                            price, add what they want to the cart, and continue to checkout.
                            Payment options such as M-Pesa are enabled only after they are
                            configured and tested for your account.
                        </p>
                        <div className="flex flex-col gap-2 pt-1 sm:flex-row">
                            <Link
                                href={`/demos/${FEATURED_DEMO_SLUG}`}
                                className="inline-flex items-center justify-center rounded bg-blue-950 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950"
                            >
                                Watch Demo
                            </Link>
                            <Link
                                href="/demos"
                                className="inline-flex items-center justify-center rounded border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-blue-950 transition-colors hover:border-blue-950 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950"
                            >
                                View All Demos
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {smallerDemos.length > 0 ? (
                <div className="mx-auto w-full max-w-7xl px-6 pb-6">
                    <div className="flex flex-col space-y-1.5">
                        <h3
                            id="also-explore-heading"
                            className="text-base font-semibold text-blue-950"
                        >
                            Also explore
                        </h3>
                        <p className="max-w-2xl text-sm text-slate-700">
                            More demos from the RazeStore shop. Each one opens a dedicated
                            page with its own screenshots and explanation.
                        </p>
                    </div>
                    <div className="mt-2">
                        <DemoGrid
                            demos={smallerDemos}
                            columns={3}
                            emptyMessage="More demos are being prepared."
                        />
                    </div>
                </div>
            ) : null}
        </section>
    );
}