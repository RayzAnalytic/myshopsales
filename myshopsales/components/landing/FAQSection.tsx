import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";

const faqs = [
    {
        q: "What is RazeStore?",
        a: "RazeStore is a customizable e-commerce website built for Kenyan electronics shop owners. It gives your shop a storefront customers can browse, a cart and checkout, an admin for managing orders and products, and simple reports drawn from your own data. You buy it once and own the shop, the content, and the domain.",
    },
    {
        q: "Is the website customized for my business?",
        a: "Yes. The build is customized around your shop — your business name, branding, product listings, categories, and the workflows you agree. It is not shipped as a generic template. The exact customization is confirmed with you in writing before the build starts, and anything not listed in that scope is out of scope.",
    },
    {
        q: "How does M-Pesa checkout work?",
        a: "When M-Pesa is configured for your shop, a customer can request an M-Pesa STK Push at checkout, receive the payment prompt on their phone, and confirm it with their M-Pesa PIN. The order status in the admin then reflects the payment outcome. Live M-Pesa setup requires your Daraja API credentials, paybill or till details, and a successful end-to-end test before it can be used in production — it is not live until that is done.",
    },
    {
        q: "What happens if I need WhatsApp or social integrations?",
        a: "WhatsApp, email, AI, and social integrations can be included, but each depends on the accounts you already hold and the access they grant. Automated connections, such as WhatsApp Business API messaging or pulling content from Instagram or TikTok, require your account access, developer app setup, and live testing. A button or name on your storefront does not mean a platform is synced. The final integration set is agreed with you, and any that need credentials are only described as working once they have been configured and tested.",
    },
    {
        q: "Who owns the website and code?",
        a: "You do. Once the build is complete and final payment is settled, the shop, the content, the domain, and the accounts are yours. Source-code and repository handover is included only if it is written into your final agreement — confirm this before signing. Hosting accounts are set up in your name so nothing depends on us staying involved.",
    },
    {
        q: "Do I pay a monthly fee for RazeStore itself?",
        a: "No. RazeStore is a one-time purchase for the build. There is no subscription from us for the shop itself. That said, hosting, domain renewal, and any third-party services you connect charge their own fees directly — those are separate from the one-time price.",
    },
    {
        q: "Are hosting and third-party services included?",
        a: "No. Hosting, domain registration and renewal, and provider fees for M-Pesa, email, WhatsApp, AI, or social platforms are separate and are set and charged by those providers. We do not guarantee that any particular hosting plan or price will stay the same, and we do not promise that any third-party service is free.",
    },
    {
        q: "How long does setup take?",
        a: "Timelines depend on the agreed scope, how quickly your content and credentials reach us, and any third-party approval steps — such as M-Pesa onboarding or a domain transfer. A completion date is confirmed with you once the scope is agreed. No specific number of days is promised before that.",
    },
    {
        q: "What does the support period cover?",
        a: "Thirty days of bug fixes follow handover. During this window, problems with features agreed in scope are fixed at no additional charge. After the thirty days, ongoing maintenance, new features, and changes in scope are handled separately and agreed in advance. There is no unlimited support promise.",
    },
    {
        q: "How do I get started?",
        a: "Send a message on WhatsApp and share a little about your shop. We will walk through your requirements, agree on scope, features, and price in writing, and only then begin the build. Nothing is committed until that agreement is in place.",
    },
];

export default function FAQSection() {
    return (
        <section
            aria-labelledby="faq-section-heading"
            className="border-b border-slate-200 bg-white text-slate-900"
        >
            <div className="mx-auto w-full max-w-7xl px-6 py-8">
                <div className="flex flex-col space-y-1.5">
                    
                    <h2
                        id="faq-section-heading"
                        className="text-xl font-bold text-blue-950 sm:text-2xl lg:text-3xl"
                    >
                        Answers to the questions shop owners ask most
                    </h2>
                    <p className="max-w-2xl text-sm text-slate-700 sm:text-base">
                        Clear answers to the things that come up before a purchase. Anything
                        that depends on your final agreement is flagged inside the answer.
                    </p>
                </div>

                <div className="mt-3 flex flex-col space-y-2">
                    {faqs.map((item, index) => (
                        <details
                            key={item.q}
                            className="group rounded border border-slate-200 bg-white p-4 open:bg-slate-50"
                        >
                            <summary className="cursor-pointer list-none rounded text-sm font-semibold text-blue-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950">
                                <span className="flex items-start justify-between gap-2">
                                    <span className="flex items-start gap-2">
                                        <span
                                            aria-hidden="true"
                                            className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-sm bg-slate-100 text-[11px] font-bold text-blue-950"
                                        >
                                            {index + 1}
                                        </span>
                                        <span>{item.q}</span>
                                    </span>
                                    <span
                                        aria-hidden="true"
                                        className="mt-0.5 flex-none text-base font-semibold text-green-700 transition-transform group-open:rotate-45"
                                    >
                                        +
                                    </span>
                                </span>
                            </summary>
                            <p className="mt-1 pl-7 text-sm text-slate-700">
                                {item.a}
                            </p>
                        </details>
                    ))}
                </div>

                <div className="mt-2 rounded border border-slate-200 bg-slate-50 p-4">
                    <div className="flex flex-col space-y-1.5">
                        <h3 className="text-base font-semibold text-blue-950">
                            Still have a question?
                        </h3>
                        <p className="max-w-2xl text-sm text-slate-700">
                            Ask directly on WhatsApp. If the answer depends on your specific
                            shop, we will say so and confirm it with you in writing before
                            anything is agreed.
                        </p>
                        <div className="flex flex-col gap-2 pt-1 sm:flex-row">
                            <WhatsAppButton
                                message="Hi, I have a question about RazeStore for my business."
                                variant="primary"
                            >
                                Chat on WhatsApp
                            </WhatsAppButton>
                            <Link
                                href="/pricing"
                                className="inline-flex items-center justify-center rounded border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-blue-950 transition-colors hover:border-blue-950 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950"
                            >
                                View pricing details
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}