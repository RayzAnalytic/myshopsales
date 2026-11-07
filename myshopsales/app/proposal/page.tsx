import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Business Proposal",
    description:
        "The RazeStore business proposal — the complete system, delivery process, and investment.",
};

const PDF_PATH = "/documents/razestore-business-proposal.pdf";

const contents = [
    "Introduction",
    "Business challenges",
    "Customer experience",
    "Shop management",
    "Payments & orders",
    "Delivery phases",
    "Investment & milestones",
    "Ownership & management",
    "Next steps",
];

export default function ProposalPage() {
    return (
        <main className="bg-white text-slate-900">
            <section className="mx-auto w-full max-w-7xl px-6 pb-4 pt-6">
                <div className="flex flex-col space-y-2">
                    <span className="text-xs font-semibold uppercase text-green-700">
                        Document
                    </span>
                    <h1 className="text-2xl font-bold text-blue-950 sm:text-3xl lg:text-4xl">
                        RazeStore Business Proposal
                    </h1>
                    <p className="max-w-2xl text-sm text-slate-700 sm:text-base">
                        A complete overview of the system, the delivery process, and the
                        investment. Preview it here, or download a copy to read, print, or
                        share with others.
                    </p>
                </div>
            </section>

            <section className="mx-auto w-full max-w-7xl px-6 py-6">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    <div className="lg:col-span-2">
                        <div className="overflow-hidden rounded border border-slate-200 bg-slate-50">
                            <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-2">
                                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                    Preview · 10 pages
                                </p>
                                <a
                                    href={PDF_PATH}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs font-medium text-blue-950 hover:underline"
                                >
                                    Open full size ↗
                                </a>
                            </div>
                            <div className="no-scrollbar relative h-[calc(100vh-260px)] min-h-[500px] overflow-y-auto bg-slate-100">
                                <iframe
                                    src={`${PDF_PATH}#view=FitH&toolbar=0&navpanes=0`}
                                    title="RazeStore Business Proposal PDF preview"
                                    className="block w-full border-0"
                                    style={{ height: 12000 }}
                                />
                            </div>
                        </div>
                        <p className="mt-2 text-xs text-slate-500">
                            Preview may not display on some mobile browsers — tap{" "}
                            <strong className="text-slate-700">Download PDF</strong> to
                            view on your device.
                        </p>
                    </div>

                    <aside className="lg:col-span-1">
                        <div className="flex flex-col space-y-3 lg:sticky lg:top-6">
                            <a
                                href={PDF_PATH}
                                download="RazeStore-Business-Proposal.pdf"
                                className="inline-flex items-center justify-center rounded bg-blue-950 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950"
                            >
                                Download PDF
                            </a>
                            <a
                                href={PDF_PATH}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-blue-950 transition-colors hover:border-blue-950 hover:bg-slate-50"
                            >
                                Open in new tab
                            </a>
                            <a
                                href={PDF_PATH}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-blue-950 transition-colors hover:border-blue-950 hover:bg-slate-50"
                            >
                                Print
                            </a>
                            <p className="text-xs leading-relaxed text-slate-500">
                                Print opens the PDF in a new tab. Use your browser&apos;s
                                print option from there to send it to a printer or save as
                                PDF.
                            </p>

                            <div className="mt-2 rounded border border-slate-200 bg-slate-50 p-4">
                                <p className="mb-2 text-xs font-semibold uppercase text-slate-500">
                                    What&apos;s inside
                                </p>
                                <ul className="flex flex-col space-y-1.5 text-sm text-slate-700">
                                    {contents.map((item, i) => (
                                        <li key={item} className="flex items-start gap-2">
                                            <span className="mt-0.5 inline-block w-5 flex-none font-mono text-xs text-slate-400">
                                                {String(i + 1).padStart(2, "0")}
                                            </span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="rounded border border-slate-200 bg-slate-50 p-4">
                                <p className="text-sm font-semibold text-blue-950">
                                    Want to talk first?
                                </p>
                                <p className="mt-1 text-sm text-slate-600">
                                    The proposal is a starting point. Reach out to discuss
                                    your shop, the scope, and what fits your business.
                                </p>
                                <Link
                                    href="/pricing"
                                    className="mt-3 inline-flex items-center justify-center rounded border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-blue-950 transition-colors hover:border-blue-950 hover:bg-slate-50"
                                >
                                    See pricing
                                </Link>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>
        </main>
    );
}