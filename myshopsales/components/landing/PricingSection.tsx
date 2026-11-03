import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";

const inclusions = [
    "Customization of the RazeStore build and agreed deployment.",
    "Domain setup on a domain you provide or register.",
    "Agreed M-Pesa integration setup within the confirmed scope.",
    "Upload of up to 20 products with images and pricing.",
    "One hour of training on how to manage your store.",
    "30 days of bug fixes after handover, subject to the agreed terms.",
];

export default function PricingSection() {
    return (
        <section
            aria-labelledby="pricing-section-heading"
            className="border-b border-slate-200 bg-white text-slate-900"
        >
            <div className="mx-auto w-full max-w-7xl px-6 py-8">
                <div className="flex flex-col space-y-1.5">
                    
                    <h2
                        id="pricing-section-heading"
                        className="text-xl font-bold text-blue-950 sm:text-2xl lg:text-3xl"
                    >
                        One price. Your own shop.
                    </h2>
                    <p className="max-w-2xl text-sm text-slate-700 sm:text-base">
                        RazeStore is a one-time purchase, not a subscription. The price is
                        shared with you directly and confirmed in writing before any work
                        begins.
                    </p>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-3 lg:grid-cols-5">
                    <div className="flex flex-col space-y-1.5 rounded-sm border border-slate-200 bg-slate-50 p-3 lg:col-span-2">
                        <p className="text-[11px] font-semibold uppercase text-slate-500">
                            Pricing
                        </p>
                        <p className="text-xl font-bold text-blue-950 sm:text-2xl">
                            Confirmed with you before the build
                        </p>
                        <p className="text-xs font-semibold text-green-700">
                            One-time. Subject to final confirmation.
                        </p>
                        <p className="text-sm text-slate-700">
                            Paid once for the build. Not a subscription and not a recurring fee
                            from us.
                        </p>
                    </div>

                    <div className="flex flex-col space-y-1.5 rounded-sm border border-slate-200 bg-white p-4 lg:col-span-3">
                        <p className="text-[11px] font-semibold uppercase text-slate-500">
                            What the price includes
                        </p>
                        <ul className="flex flex-col space-y-1.5 text-sm text-slate-800">
                            {inclusions.map((item) => (
                                <li key={item} className="flex items-start gap-2">
                                    <span
                                        aria-hidden="true"
                                        className="mt-1.5 inline-block h-1.5 w-1.5 flex-none rounded-sm bg-green-600"
                                    />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-4 rounded-sm border border-slate-200 bg-slate-50 p-4">
                    <div className="flex flex-col space-y-1.5">
                        <p className="text-[11px] font-semibold uppercase text-slate-500">
                            Please note
                        </p>
                        <ul className="flex flex-col space-y-1.5 text-sm text-slate-700">
                            <li>
                                Hosting and other third-party services may have separate costs.
                                Vercel hosting, domain renewal, and any provider fees are set and
                                charged by those providers, not included in the one-time price.
                            </li>
                            <li>
                                M-Pesa, email, WhatsApp, AI, and social integrations require your
                                account access and credentials, and are tested live before
                                handover. They are not presented as already working.
                            </li>
                            <li>
                                The exact inclusions, exclusions, and payment schedule are
                                confirmed with you in writing before the build starts. Anything
                                not listed there is out of scope.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
                    {/*<WhatsAppButton
                        message="Hi, I'd like to confirm the current RazeStore price and what it includes."
                        variant="primary"
                    >
                        Chat on WhatsApp
                    </WhatsAppButton>*/}
                    <Link
                        href="/pricing"
                        className="inline-flex items-center justify-center rounded border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-blue-950 transition-colors hover:border-blue-950 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950"
                    >
                        View full pricing details
                    </Link>
                </div>
            </div>
        </section>
    );
}