import Link from "next/link";

type OwnershipItem = {
    title: string;
    body: string;
    scopeNote?: string;
};

const ownershipItems: OwnershipItem[] = [
    {
        title: "Custom branding and business details",
        body: "Your shop name, logo, colors, product listings, and business details are set up as part of the build. Once handover is complete, they are yours to keep and to change.",
    },
    {
        title: "Deployment and domain setup",
        body: "Your store is deployed to Vercel and pointed at a domain you own or register as part of the agreed scope. The domain is registered in your name, and the account stays under your control.",
    },
    {
        title: "Source code and repository handover",
        body: "The codebase can be handed over to you at the end of the build, with access to the repository that holds your store.",
        scopeNote:
            "Source-code and repository handover is included only if it is written into your final agreement. Confirm this before signing.",
    },
    {
        title: "Hosting account ownership and access",
        body: "Your store runs on your own Vercel account, and you keep the login and billing details. We set things up on your account rather than ours, so nothing depends on us staying involved.",
    },
    {
        title: "Administrator access and training",
        body: "You receive administrator access to your store's admin panel, plus the one-hour training session included in the scope so you can run day-to-day operations yourself.",
    },
    {
        title: "Support period and bug fixes",
        body: "Thirty days of bug fixes follow handover. During this window, problems with the features agreed in scope are fixed at no additional charge.",
        scopeNote:
            "After the thirty-day window, ongoing maintenance, new features, and changes in scope are separate and agreed in advance. There is no unlimited support promise.",
    },
    {
        title: "Third-party services and ongoing costs",
        body: "Vercel hosting, domain renewal, and any other third-party services you connect (M-Pesa, email, WhatsApp, AI, social platforms) are separate accounts you own and pay for directly.",
        scopeNote:
            "Third-party prices are set and changed by those providers. We do not guarantee that any particular plan or price will remain the same, and we do not promise that any third-party service is free.",
    },
];

export default function OwnershipSection() {
    return (
        <section
            aria-labelledby="ownership-section-heading"
            className="border-b border-slate-200 bg-slate-50 text-slate-900"
        >
            <div className="mx-auto w-full max-w-7xl px-6 py-8">
                <div className="flex flex-col space-y-1.5">
                   
                    <h2
                        id="ownership-section-heading"
                        className="text-xl font-bold text-blue-950 sm:text-2xl lg:text-3xl"
                    >
                        You own your shop, not just rent it
                    </h2>
                    <p className="max-w-2xl text-sm text-slate-700 sm:text-base">
                        RazeStore is a one-time purchase, not a subscription. Once the build
                        is completed and settled, the shop, the content, the domain, and the
                        accounts are yours. Here is exactly what that covers — and what stays
                        separate.
                    </p>
                </div>

                <ul className="mt-2 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {ownershipItems.map((item) => (
                        <li
                            key={item.title}
                            className="flex flex-col space-y-1.5 rounded-sm border border-slate-200 bg-white p-4"
                        >
                            <h3 className="text-base font-semibold text-blue-950">
                                {item.title}
                            </h3>
                            <p className="text-sm text-slate-700">
                                {item.body}
                            </p>
                            {item.scopeNote ? (
                                <p className="mt-1 border-t border-slate-200 pt-2 text-xs text-slate-600">
                                    {item.scopeNote}
                                </p>
                            ) : null}
                        </li>
                    ))}
                </ul>

                <div className="mt-2 rounded border border-slate-200 bg-white p-4">
                    <div className="flex flex-col space-y-1.5">
                        <p className="text-[11px] font-semibold uppercase text-slate-500">
                            How to read this
                        </p>
                        <ul className="flex flex-col space-y-1.5 text-sm text-slate-700">
                            <li>
                                Everything on this page describes the intended handover for a
                                completed build. The exact set of items transferred — including
                                source-code handover — is written into your final agreement, and
                                anything not listed there is not part of the handover.
                            </li>
                            <li>
                                Ownership rights take effect once the build is completed and the
                                final payment is settled, per the payment schedule agreed with
                                you.
                            </li>
                            <li>
                                Third-party accounts, hosting, and provider fees stay in your name
                                and remain your responsibility. They are not transferred to us or
                                covered by the one-time price.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-2 flex flex-col space-y-1.5">
                    <h3 className="text-base font-semibold text-blue-950">
                        Want to see the full picture?
                    </h3>
                    <p className="max-w-2xl text-sm text-slate-700">
                        The pricing page breaks down what is included, what is excluded, and
                        what is confirmed before purchase.
                    </p>
                    <div className="pt-1">
                        <Link
                            href="/pricing"
                            className="inline-flex items-center justify-center rounded bg-blue-950 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950"
                        >
                            View pricing details
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}