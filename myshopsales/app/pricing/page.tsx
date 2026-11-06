import Link from "next/link";
import CTASection from "@/components/landing/CTASection";

const whatsappNumber = ("+254116103872").replace(/\D/g, "");

const whatsappMessage = encodeURIComponent(
    "Hi, I'd like to discuss the RazeStore e-commerce system for my business.",
);

const whatsappHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
    : `https://wa.me/?text=${whatsappMessage}`;

const inclusions = [
    "Customized online storefront.",
    "Product and category management.",
    "Shopping cart and checkout.",
    "Order management.",
    "Inventory management.",
    "Customer management.",
    "Administration dashboard.",
    "Agreed payment integrations.",
    "Agreed WhatsApp and social integrations.",
    "Deployment and configuration.",
    "Testing and training.",
    "Final system handover.",
];

const phases = [
    {
        title: "Customization and deployment",
        body: "Your system is customized for your business, populated with agreed product information, configured and deployed live. The online shop and agreed core features become available.",
        note: "WhatsApp Business, TikTok Business and other social integrations remain inactive until the required API access and configuration are completed.",
    },
    {
        title: "API setup and integrations",
        body: "The required credentials, permissions and API access are obtained. The agreed integrations are configured, connected and tested.",
        note: "This includes the WhatsApp Business, TikTok Business and other agreed social integrations.",
    },
    {
        title: "Final testing and handover",
        body: "The complete system undergoes final verification. You receive the agreed ownership and account access, administrator training and final handover.",
        note: null,
    },
];

const paymentMilestones = [
    { label: "Initial deposit", amount: "KES 60,000" },
    { label: "Working demonstration", amount: "KES 80,000" },
    { label: "Final payment", amount: "KES 60,000" },
    { label: "Total", amount: "KES 200,000", total: true },
];

const ownershipItems = [
    "Dedicated customized system for your business.",
    "Your own domain.",
    "Your own hosting account.",
    "Your business data.",
    "Your administrator access.",
    "Exclusive use of your customized deployment.",
];

const additionalCosts = [
    "Domain renewals.",
    "Hosting renewals.",
    "M-Pesa transaction charges.",
    "Third-party subscriptions.",
    "External service fees.",
    "Additional features outside the agreed project scope.",
];

const customerResponsibilities = [
    "Business information and branding.",
    "Product details and images.",
    "Domain and relevant business account information.",
    "Required API access and permissions.",
    "Feedback and approvals during development.",
];

const faqs = [
    {
        q: "Is the KES 200,000 a one-time price?",
        a: "Yes. It is a one-time purchase with no monthly RazeStore rental. Recurring external costs such as domain renewals, hosting renewals, M-Pesa transaction charges and third-party subscriptions are separate and paid directly to those providers.",
    },
    {
        q: "Do I own the system after purchase?",
        a: "Yes. You receive a dedicated customized system for your business, your own domain, your own hosting account, your business data, administrator access and exclusive use of your customized deployment. Ownership and transfer arrangements are documented in the purchase agreement. Source-code transfer is not implied.",
    },
    {
        q: "What are the three delivery phases?",
        a: "Phase 1 is customization and deployment, where your system is customized, populated and deployed live. Phase 2 is API setup and integrations, where credentials and API access are obtained and agreed integrations are configured and tested. Phase 3 is final testing and handover, where the complete system is verified and you receive access, training and final handover.",
    },
    {
        q: "Why are WhatsApp and TikTok integrations inactive at first?",
        a: "WhatsApp Business, TikTok Business and other social integrations remain inactive until the required API access, credentials, permissions and configuration are completed. They are set up and tested during Phase 2.",
    },
    {
        q: "How is payment structured?",
        a: "Payment is structured across three milestones: KES 60,000 initial deposit, KES 80,000 at the working demonstration, and KES 60,000 final payment. The total is KES 200,000.",
    },
    {
        q: "What does the three months free management cover?",
        a: "After final handover you receive three months of free management support covering the agreed technical support, troubleshooting, bug fixes and routine assistance. Continued management after the three-month period can be arranged separately.",
    },
    {
        q: "What additional costs should I expect?",
        a: "The KES 200,000 project price is separate from recurring external expenses such as domain renewals, hosting renewals, M-Pesa transaction charges, third-party subscriptions, external service fees, and additional features outside the agreed project scope.",
    },
    {
        q: "What do I need to provide?",
        a: "You provide business information and branding, product details and images, domain and relevant business account information, the required API access and permissions, and feedback and approvals during development.",
    },
];

export default function PricingPage() {
    return (
        <main className="bg-white text-slate-900">
            <section className="mx-auto w-full max-w-7xl px-6 py-6">
                <div className="grid gap-4 lg:grid-cols-5 lg:gap-6">
                    <div className="flex flex-col space-y-2 lg:col-span-3">
                        <span className="text-xs font-semibold uppercase text-green-700">
                            Pricing
                        </span>
                        <h1 className="text-2xl font-bold text-blue-950 sm:text-3xl lg:text-4xl">
                            A complete e-commerce system for your business.
                        </h1>
                        <p className="max-w-2xl text-sm text-slate-700 sm:text-base">
                            A customized online shop with product management, order management,
                            checkout, inventory and business administration tools. Own it outright —
                            no shared shop, no monthly RazeStore rental.
                        </p>
                    </div>

                    <div className="rounded border border-slate-200 bg-slate-50 p-4 lg:col-span-2">
                        <div className="flex flex-col space-y-2">
                            <p className="text-[11px] font-semibold uppercase text-slate-500">
                                One-time price
                            </p>
                            <p className="text-2xl font-bold text-blue-950 sm:text-3xl">
                                KES 200,000
                            </p>
                            <p className="text-sm text-slate-700">
                                One-time purchase. No monthly RazeStore rental.
                            </p>
                            <div className="flex flex-col gap-2 pt-1 sm:flex-row">
                                <a
                                    href={whatsappHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded bg-green-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
                                >
                                    Discuss on WhatsApp
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
                </div>
            </section>

            <section className="border-t border-slate-200 bg-slate-50">
                <div className="mx-auto w-full max-w-7xl px-6 py-6">
                    <div className="flex flex-col space-y-1.5">
                        <h2 className="text-xl font-bold text-blue-950 sm:text-2xl">
                            What&apos;s included
                        </h2>
                        <p className="text-sm text-slate-700">
                            The KES 200,000 project covers the following items within the
                            agreed scope.
                        </p>
                    </div>
                    <ul className="mt-4 grid gap-x-6 gap-y-2 text-sm text-slate-800 sm:grid-cols-2">
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
                            Three-phase delivery
                        </h2>
                        <p className="text-sm text-slate-700">
                            The project is delivered in three clear phases so you know exactly
                            what is happening at each stage.
                        </p>
                    </div>
                    <ol className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                        {phases.map((phase, index) => (
                            <li
                                key={phase.title}
                                className="flex flex-col rounded border border-slate-200 bg-white p-4"
                            >
                                <p className="text-[11px] font-semibold uppercase text-green-700">
                                    Phase {index + 1}
                                </p>
                                <h3 className="mt-1 text-base font-semibold text-blue-950">
                                    {phase.title}
                                </h3>
                                <p className="mt-2 text-sm text-slate-700">
                                    {phase.body}
                                </p>
                                {phase.note ? (
                                    <p className="mt-2 text-sm text-slate-600">
                                        {phase.note}
                                    </p>
                                ) : null}
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <section className="border-t border-slate-200 bg-slate-50">
                <div className="mx-auto w-full max-w-7xl px-6 py-6">
                    <div className="grid gap-4 lg:grid-cols-5 lg:gap-6">
                        <div className="flex flex-col space-y-1.5 lg:col-span-2">
                            <h2 className="text-xl font-bold text-blue-950 sm:text-2xl">
                                Payment breakdown
                            </h2>
                            <p className="text-sm text-slate-700">
                                The KES 200,000 project price is paid across three
                                milestones, so you always know what&apos;s next.
                            </p>
                            <ul className="mt-2 space-y-1.5 text-sm text-slate-700">
                                <li className="flex items-start gap-2">
                                    <span
                                        aria-hidden="true"
                                        className="mt-1.5 inline-block h-1.5 w-1.5 flex-none rounded-sm bg-green-600"
                                    />
                                    <span>Deposit secures your build slot.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span
                                        aria-hidden="true"
                                        className="mt-1.5 inline-block h-1.5 w-1.5 flex-none rounded-sm bg-green-600"
                                    />
                                    <span>Second payment after live demo.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span
                                        aria-hidden="true"
                                        className="mt-1.5 inline-block h-1.5 w-1.5 flex-none rounded-sm bg-green-600"
                                    />
                                    <span>Final payment on handover.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="lg:col-span-3">
                            <div className="overflow-hidden rounded border border-slate-200 bg-white">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-slate-100 text-[11px] font-semibold uppercase text-slate-500">
                                        <tr>
                                            <th scope="col" className="px-4 py-2">
                                                Milestone
                                            </th>
                                            <th scope="col" className="px-4 py-2 text-right">
                                                Amount
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200">
                                        {paymentMilestones.map((item) => (
                                            <tr
                                                key={item.label}
                                                className={item.total ? "bg-slate-50" : undefined}
                                            >
                                                <td
                                                    className={
                                                        item.total
                                                            ? "px-4 py-2 font-semibold text-blue-950"
                                                            : "px-4 py-2 text-slate-800"
                                                    }
                                                >
                                                    {item.label}
                                                </td>
                                                <td
                                                    className={
                                                        item.total
                                                            ? "px-4 py-2 text-right font-semibold text-green-700"
                                                            : "px-4 py-2 text-right text-slate-800"
                                                    }
                                                >
                                                    {item.amount}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-t border-slate-200">
                <div className="mx-auto w-full max-w-7xl px-6 py-6">
                    <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
                        <div className="rounded border border-slate-200 bg-white p-4">
                            <h2 className="text-xl font-bold text-blue-950 sm:text-2xl">
                                Ownership
                            </h2>
                            <p className="mt-1 text-sm text-slate-700">
                                Your business. Your customized system. Your control.
                            </p>
                            <ul className="mt-3 flex flex-col space-y-1.5 text-sm text-slate-800">
                                {ownershipItems.map((item) => (
                                    <li key={item} className="flex items-start gap-2">
                                        <span
                                            aria-hidden="true"
                                            className="mt-1.5 inline-block h-1.5 w-1.5 flex-none rounded-sm bg-green-600"
                                        />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-3 flex flex-col space-y-1.5 text-sm text-slate-700">
                                <p>No shared shop and no monthly RazeStore rental.</p>
                                <p>
                                    Ownership and transfer arrangements will be documented in the
                                    purchase agreement. Source-code transfer is not implied.
                                </p>
                            </div>
                        </div>

                        <div className="rounded border border-slate-200 bg-slate-50 p-4">
                            <h2 className="text-xl font-bold text-blue-950 sm:text-2xl">
                                Three months free management
                            </h2>
                            <p className="mt-1 text-sm text-slate-700">
                                After final handover, you receive three months of free
                                management support.
                            </p>
                            <div className="mt-3 flex flex-col space-y-2 text-sm text-slate-800">
                                <p>
                                    This covers the agreed technical support, troubleshooting,
                                    bug fixes and routine assistance.
                                </p>
                                <p>
                                    Continued management after the three-month period can be
                                    arranged separately.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-t border-slate-200 bg-slate-50">
                <div className="mx-auto w-full max-w-7xl px-6 py-6">
                    <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
                        <div className="rounded border border-slate-200 bg-white p-4">
                            <h2 className="text-xl font-bold text-blue-950 sm:text-2xl">
                                Additional costs
                            </h2>
                            <p className="mt-1 text-sm text-slate-700">
                                The KES 200,000 project price is separate from recurring
                                external expenses.
                            </p>
                            <ul className="mt-3 flex flex-col space-y-1.5 text-sm text-slate-800">
                                {additionalCosts.map((item) => (
                                    <li key={item} className="flex items-start gap-2">
                                        <span
                                            aria-hidden="true"
                                            className="mt-1.5 inline-block h-1.5 w-1.5 flex-none rounded bg-slate-400"
                                        />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="rounded border border-slate-200 bg-white p-4">
                            <h2 className="text-xl font-bold text-blue-950 sm:text-2xl">
                                Customer responsibilities
                            </h2>
                            <p className="mt-1 text-sm text-slate-700">
                                To complete the project, the customer provides:
                            </p>
                            <ul className="mt-3 flex flex-col space-y-1.5 text-sm text-slate-800">
                                {customerResponsibilities.map((item) => (
                                    <li key={item} className="flex items-start gap-2">
                                        <span
                                            aria-hidden="true"
                                            className="mt-1.5 inline-block h-1.5 w-1.5 flex-none rounded bg-slate-400"
                                        />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-t border-slate-200">
                <div className="mx-auto w-full max-w-7xl px-6 py-6">
                    <div className="flex flex-col space-y-1.5">
                        <h2 className="text-xl font-bold text-blue-950 sm:text-2xl">
                            Frequently asked questions
                        </h2>
                        <p className="text-sm text-slate-700">
                            Clear answers about the one-time price, ownership, the three
                            phases, inactive initial integrations, additional costs,
                            management and handover.
                        </p>
                    </div>
                    <div className="mx-auto mt-4 grid max-w-5xl gap-2 lg:grid-cols-2">
                        {faqs.map((item) => (
                            <details
                                key={item.q}
                                className="group self-start rounded border border-slate-200 bg-white p-3 open:bg-slate-50"
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

            <CTASection variant="compact" whatsappNumber="254116103872" />

            <div className="border-t border-slate-200 bg-white">
                <div className="mx-auto w-full max-w-7xl px-6 py-6">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center rounded border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-blue-950 transition-colors hover:border-blue-950 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950"
                    >
                        Back to home
                    </Link>
                </div>
            </div>
        </main>
    );
}