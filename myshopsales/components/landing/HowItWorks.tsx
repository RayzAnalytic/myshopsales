import WhatsAppButton from "@/components/WhatsAppButton";

const steps = [
    {
        title: "Discuss your shop's requirements",
        body: "We start on WhatsApp. You share how your shop works today, what you sell, and what you want the online store to do. Nothing is committed at this stage — it is a conversation to understand your business.",
    },
    {
        title: "Agree on features, branding, scope, price, and milestones",
        body: "Before any build begins, we agree in writing on the features included, how your branding is applied, what is out of scope, the one-time price, and the milestones along the way. This is the point where everything becomes concrete.",
    },
    {
        title: "Customize the store and upload the agreed products",
        body: "We customize the RazeStore build around your business — brand name, colors, product listings, and the categories you have agreed. Up to the agreed number of products are uploaded and organized.",
    },
    {
        title: "Deploy the site and configure the required integrations",
        body: "The store is deployed to Vercel on your domain, and any integrations in scope — M-Pesa, email, WhatsApp, AI, or social — are configured with the account details you provide. Anything that needs credentials, account access, or live testing is set up at this stage.",
    },
    {
        title: "Test the agreed workflows, train the owner, and hand over the system",
        body: "We test each workflow included in the agreed scope end to end, walk you through the admin in a one-hour training session, and hand over access to the store, the code, and the accounts. Thirty days of bug fixes follow handover.",
    },
];

export default function HowItWorks() {
    return (
        <section
            id="how-it-works"
            aria-labelledby="how-it-works-heading"
            className="border-b border-slate-200 bg-white text-slate-900"
        >
            <div className="mx-auto w-full max-w-7xl px-6 py-8">
                <div className="flex flex-col space-y-1.5">
                    
                    <h2
                        id="how-it-works-heading"
                        className="text-xl font-bold text-blue-950 sm:text-2xl lg:text-3xl"
                    >
                        From first message to handover, in five steps
                    </h2>
                    <p className="max-w-2xl text-sm text-slate-700 sm:text-base">
                        Every RazeStore build follows the same structure, so you always know
                        what stage you are in, what is expected from you, and what comes next.
                    </p>
                </div>

                <ol className="mt-6 flex flex-col space-y-2">
                    {steps.map((step, index) => (
                        <li
                            key={step.title}
                            className="relative flex flex-col gap-2 rounded border border-slate-200 bg-white p-3 sm:flex-row sm:items-start"
                        >
                            <div className="flex items-center gap-2 sm:flex-col sm:items-center">
                                <span
                                    aria-hidden="true"
                                    className="flex h-8 w-8 flex-none items-center justify-center rounded bg-blue-950 text-xs font-bold text-white"
                                >
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                {index < steps.length - 1 ? (
                                    <span
                                        aria-hidden="true"
                                        className="hidden w-px flex-none self-stretch bg-slate-200 sm:block"
                                    />
                                ) : null}
                            </div>

                            <div className="flex flex-col space-y-1">
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

                <div className="mt-4 rounded border border-slate-200 bg-slate-50 p-4">
                    <div className="flex flex-col space-y-1.5">
                        <p className="text-[11px] font-semibold uppercase text-slate-500">
                            Please note
                        </p>
                        <ul className="flex flex-col space-y-1.5 text-sm text-slate-700">
                            <li>
                                Integration setup depends on you supplying the required account
                                access, credentials, and information for each service in scope.
                                Until those are received, that integration cannot be configured
                                or tested.
                            </li>
                            <li>
                                Timelines depend on your scope, how quickly your content and
                                credentials reach us, and any third-party approval steps (for
                                example M-Pesa onboarding or a domain transfer). A completion date
                                is confirmed with you once the scope is agreed — no date is
                                promised before then.
                            </li>
                            <li>
                                Any third-party costs, such as Vercel hosting, domain
                                registration, or provider fees, are separate and are set and
                                charged by those providers.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-4 flex flex-col space-y-1.5">
                    <h3 className="text-base font-semibold text-blue-950">
                        Ready to start the conversation?
                    </h3>
                    <p className="max-w-2xl text-sm text-slate-700">
                        Send a message on WhatsApp and share a little about your shop. We will
                        walk through the steps together and answer any questions before
                        anything is agreed.
                    </p>
                    <div className="pt-1">
                        {/*<WhatsAppButton
                            message="Hi, I'd like to discuss getting a RazeStore online shop for my business."
                            variant="primary"
                        >
                            Chat on WhatsApp
                        </WhatsAppButton>*/}
                    </div>
                </div>
            </div>
        </section>
    );
}