import Link from "next/link";
import DemoGrid from "@/components/demos/DemoGrid";
import { demos } from "@/data/demos";

const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").replace(/\D/g, "");

const whatsappMessage = encodeURIComponent(
    "Hi, I saw the RazeStore demos and would like a shop customized for my business.",
);

const whatsappHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
    : `https://wa.me/?text=${whatsappMessage}`;

export default function DemosPage() {
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
                        Explore the main parts of a RazeStore shop — the storefront, M-Pesa
                        checkout, shop management, business insights, and integrations. Each
                        demo shows what the feature looks like inside a working shop, so you
                        can compare it to how you sell today.
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
                                Demos use sample product data to show how the shop looks when it
                                is filled in with real listings.
                            </li>
                            <li>
                                M-Pesa, WhatsApp, AI, and social features only work after your
                                credentials are configured and tested on your account. They are
                                not presented as already live.
                            </li>
                            <li>
                                Your final store is customized to your shop, brand, and product
                                list — not shipped as the demo you see here.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="border-t border-slate-200">
                <div className="mx-auto w-full max-w-7xl px-6 py-8">
                    <DemoGrid demos={demos} />
                </div>
            </section>

            <section className="border-t border-slate-200 bg-slate-50">
                <div className="mx-auto w-full max-w-7xl px-6 py-8">
                    <div className="rounded-sm border border-slate-200 bg-white p-4 sm:p-6">
                        <div className="flex flex-col space-y-1.5">
                            <h2 className="text-xl font-bold text-blue-950 sm:text-2xl">
                                Want a shop like this for your business?
                            </h2>
                            <p className="max-w-2xl text-sm text-slate-700">
                                We customize RazeStore for Kenyan electronics shops. Share your
                                shop on WhatsApp and we will walk through what fits your business
                                — no obligation.
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