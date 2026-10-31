import Link from "next/link";

const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").replace(/\D/g, "");

const whatsappMessage = encodeURIComponent(
    "Hi, I'd like to get the current RazeStore pricing and inclusions.",
);

const whatsappHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
    : `https://wa.me/?text=${whatsappMessage}`;

const inclusions = [
    "Domain setup on a domain you provide or register.",
    "Agreed M-Pesa integration setup within the confirmed scope.",
    "Upload of up to 20 products with images and pricing.",
    "One hour of training on how to manage your store.",
    "30 days of bug fixes after handover.",
];

const processSteps = [
    {
        title: "Start on WhatsApp",
        body: "You share your shop, products, and what you need the store to do. We confirm the scope together.",
    },
    {
        title: "Confirm scope and pricing",
        body: "We agree on what is included, what is excluded, and the one-time price before any work begins.",
    },
    {
        title: "Customize your RazeStore build",
        body: "We customize branding, colors, and layout on top of the RazeStore base to match your shop.",
    },
    {
        title: "Deploy and test",
        body: "The store is deployed to Vercel and tested with your live credentials before handover.",
    },
    {
        title: "Handover and training",
        body: "You receive access, a one-hour walkthrough, and 30 days of bug fixes.",
    },
];

const exclusions = [
    "Features outside the agreed RazeStore baseline scope.",
    "Product photography, copywriting, and content creation.",
    "Ongoing maintenance after the 30-day bug-fix window.",
    "Marketing, advertising, or SEO campaigns.",
    "Additional product uploads beyond the agreed 20.",
    "Any third-party subscription or service fee.",
    "Any item not written into the final agreed scope.",
];

const faqs = [
    {
        q: "Do I own my store after purchase?",
        a: "Yes. Once the build is completed and the final payment is settled, you own the store, the content, and the domain. There is no ongoing subscription from us for the store itself.",
    },
    {
        q: "How do I pay?",
        a: "Payment is arranged directly on WhatsApp. The one-time price and payment schedule are confirmed in writing before work begins.",
    },
    {
        q: "How long does setup take?",
        a: "Timelines depend on the agreed scope and how quickly we receive your content and credentials. A timeline is confirmed with you before work starts.",
    },
    {
        q: "Is hosting included?",
        a: "No. Hosting is a separate third-party cost. We deploy to Vercel, but Vercel's plans and prices are set by Vercel and may change. We do not guarantee any third-party price.",
    },
    {
        q: "What support is included?",
        a: "Thirty days of bug fixes after handover. New features, changes in scope, and ongoing maintenance are handled separately and agreed in advance.",
    },
    {
        q: "Are the integrations already live?",
        a: "No. Integrations such as M-Pesa, email, WhatsApp, AI, or social features require your credentials, account access, and live testing. They are not presented as ready until configured and tested.",
    },
];

export default function PricingPage() {
    return (
        <main className="bg-white text-slate-900">
            <section className="mx-auto w-full max-w-7xl px-6 pb-6 pt-6">
                <div className="flex flex-col space-y-1.5">
                    <span className="text-xs font-semibold uppercase text-green-700">
                        Pricing
                    </span>
                    <h1 className="text-xl font-bold text-blue-950 sm:text-2xl lg:text-3xl">
                        One-time purchase. Your own online store.
                    </h1>
                    <p className="max-w-2xl text-sm text-slate-700 sm:text-base">
                        RazeStore is a customizable e-commerce website built for Kenyan
                        electronics shop owners. You pay once, you own your store, and we hand
                        it over ready to use.
                    </p>
                </div>

                <div className="mt-4 rounded-sm border border-slate-200 bg-slate-50 p-4 sm:p-4">
                    <div className="flex flex-col space-y-1.5">
                        <p className="text-[11px] font-semibold uppercase text-slate-500">
                            Planned price
                        </p>
                        <p className="text-xl font-bold text-blue-950 sm:text-2xl">
                            Shared privately on WhatsApp
                        </p>
                        <p className="text-sm text-slate-700">
                            The current planned price and exact inclusions are shared with you
                            directly. Final pricing is subject to confirmation based on your
                            agreed scope.
                        </p>
                        <div className="flex flex-col gap-2 pt-1 sm:flex-row">
                            <a
                                href={whatsappHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded bg-green-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
                            >
                                Get pricing on WhatsApp
                            </a>
                            <Link
                                href="/demos"
                                className="inline-flex items-center justify-center rounded border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-blue-950 transition-colors hover:border-blue-950 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950"
                            >
                                Explore demos
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-t border-slate-200">
                <div className="mx-auto w-full max-w-7xl px-6 py-6">
                    <div className="flex flex-col space-y-1.5">
                        <h2 className="text-xl font-bold text-blue-950 sm:text-2xl">
                            Ownership and what you receive
                        </h2>
                        <p className="text-sm text-slate-700">
                            The RazeStore website is delivered as a complete, working online
                            store built on top of the RazeStore base. After handover, the store,
                            the branding, and the content belong to you.
                        </p>
                    </div>

                    <div className="mt-4 flex flex-col space-y-1.5">
                        <p className="text-[11px] font-semibold uppercase text-slate-500">
                            You receive
                        </p>
                        <ul className="flex flex-col space-y-1.5 text-sm text-slate-800">
                            <li>Full ownership of the finished store once settled in full.</li>
                            <li>Your own domain pointing to your store.</li>
                            <li>A store customized to your shop, not a generic template.</li>
                            <li>
                                Access to your codebase, hosting account, and third-party
                                accounts we set up on your behalf.
                            </li>
                            <li>
                                No ongoing subscription from us for the store build itself.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="border-t border-slate-200 bg-slate-50">
                <div className="mx-auto w-full max-w-7xl px-6 py-6">
                    <div className="flex flex-col space-y-1.5">
                        <h2 className="text-xl font-bold text-blue-950 sm:text-2xl">
                            What the price includes
                        </h2>
                        <p className="text-sm text-slate-700">
                            The following items are part of the proposed package. Each is
                            delivered within the final agreed scope.
                        </p>
                    </div>
                    <ul className="mt-4 flex flex-col space-y-1.5 text-sm text-slate-800">
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
            </section>

            <section className="border-t border-slate-200">
                <div className="mx-auto w-full max-w-7xl px-6 py-6">
                    <div className="flex flex-col space-y-1.5">
                        <h2 className="text-xl font-bold text-blue-950 sm:text-2xl">
                            How the process works
                        </h2>
                        <p className="text-sm text-slate-700">
                            Every build is customized, deployed, tested, and handed over in a
                            structured way so you know exactly what is happening at each step.
                        </p>
                    </div>
                    <ol className="mt-3 flex flex-col space-y-2">
                        {processSteps.map((step, index) => (
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
                <div className="mx-auto w-full max-w-7xl px-6 py-6">
                    <div className="flex flex-col space-y-1.5">
                        <h2 className="text-xl font-bold text-blue-950 sm:text-2xl">
                            Hosting and third-party services
                        </h2>
                        <p className="text-sm text-slate-700">
                            The one-time price covers the store build. Third-party services run
                            on separate accounts that you control, and they may charge their own
                            fees.
                        </p>
                    </div>
                    <div className="mt-4 flex flex-col space-y-1.5 text-sm text-slate-800">
                        <p>
                            Common third-party costs include Vercel hosting, domain
                            registration, and any messaging, email, or payment provider you use.
                        </p>
                        <p>
                            These providers set and change their own prices. We do not guarantee
                            any specific hosting plan or price will stay the same, and we do not
                            promise any third-party service is free.
                        </p>
                    </div>
                </div>
            </section>

            <section className="border-t border-slate-200">
                <div className="mx-auto w-full max-w-7xl px-6 py-6">
                    <div className="flex flex-col space-y-1.5">
                        <h2 className="text-xl font-bold text-blue-950 sm:text-2xl">
                            Credentials and account access
                        </h2>
                        <p className="text-sm ext-slate-700">
                            Some features depend on services that belong to you. To set them up,
                            we need credentials or account access, and we test them live before
                            handover.
                        </p>
                    </div>
                    <ul className="mt-3 flex flex-col space-y-1.5 text-sm text-slate-800">
                        <li>
                            M-Pesa setup requires access to your M-Pesa Daraja API credentials
                            and a matching paybill or till account.
                        </li>
                        <li>
                            Email, WhatsApp, AI, or social integrations require their own
                            account access and API keys, and only work once configured and
                            tested.
                        </li>
                        <li>
                            Domain setup requires access to your registrar or permission to
                            register a domain on your behalf.
                        </li>
                        <li>
                            We do not present any integration as already live until it has been
                            configured with your credentials and tested.
                        </li>
                    </ul>
                </div>
            </section>

            <section className="border-t border-slate-200 bg-slate-50">
                <div className="mx-auto w-full max-w-7xl px-6 py-6">
                    <div className="flex flex-col space-y-1.5">
                        <h2 className="text-xl font-bold text-blue-950 sm:text-2xl">
                            Not included, and to confirm before purchase
                        </h2>
                        <p className="text-sm text-slate-700">
                            The following items sit outside the proposed package. Anything you
                            need from this list is confirmed and priced separately before you
                            commit.
                        </p>
                    </div>
                    <ul className="mt-3 flex flex-col space-y-1.5 text-sm text-slate-800">
                        {exclusions.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                                <span
                                    aria-hidden="true"
                                    className="mt-1.5 inline-block h-1.5 w-1.5 flex-none rounded-sm bg-slate-400"
                                />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="border-t border-slate-200">
                <div className="mx-auto w-full max-w-7xl px-6 py-6">
                    <div className="flex flex-col space-y-1.5">
                        <h2 className="text-xl font-bold text-blue-950 sm:text-2xl">
                            Frequently asked questions
                        </h2>
                        <p className="text-sm text-slate-700">
                            Clear answers to the questions shop owners ask most often.
                        </p>
                    </div>
                    <div className="mt-4 flex flex-col space-y-2">
                        {faqs.map((item) => (
                            <details
                                key={item.q}
                                className="group rounded border border-slate-200 bg-white p-3 open:bg-slate-50"
                            >
                                <summary className="cursor-pointer list-none text-sm font-semibold text-blue-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950">
                                    <span className="flex items-center justify-between gap-2">
                                        <span>{item.q}</span>
                                        <span
                                            aria-hidden="true"
                                            className="text-base font-semibold text-green-700 transition-transform group-open:rotate-45"
                                        >
                                            +
                                        </span>
                                    </span>
                                </summary>
                                <p className="mt-2 text-sm text-slate-700">
                                    {item.a}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-t border-slate-200 bg-white">
                <div className="mx-auto w-full max-w-7xl px-6 py-8">
                    <div className="rounded border border-slate-200 bg-slate-50 p-3 sm:p-6">
                        <div className="flex flex-col space-y-1.5">
                            <h2 className="text-xl font-bold text-blue-950 sm:text-2xl">
                                Ready to talk about your store?
                            </h2>
                            <p className="max-w-2xl text-sm text-slate-700">
                                Send a message on WhatsApp and we will walk you through the
                                current price, what is included, and what is not. No pressure and
                                no obligation.
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
                                    href="/"
                                    className="inline-flex items-center justify-center rounded border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-blue-950 transition-colors hover:border-blue-950 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950"
                                >
                                    Back to home
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}