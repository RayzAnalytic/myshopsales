import Link from "next/link";
import ScreenshotGallery from "@/components/demos/ScreenshotGallery";
import type { Screenshot } from "@/components/demos/ScreenshotGallery";

const integrationScreenshots: Screenshot[] = [
    {
        src: "/images/whatsapadmin.png",
        alt: "RazeStore admin WhatsApp integration settings screen showing configuration fields.",
        title: "WhatsApp integration",
        caption:
            "Where the WhatsApp Business API credentials, phone number, and message templates are entered. Keys are stored on the server, not shown to customers.",
    },
    {
        src: "/images/tiktokbusiness.png",
        alt: "RazeStore admin social media management screen showing connected platforms and their status.",
        title: "Social media management",
        caption:
            "Where the social accounts you use — Facebook, Instagram, and others — are linked. Each shows whether it is connected, unconfigured, or in error.",
    },
    {
        src: "/images/socialmanagement.png",
        alt: "RazeStore admin TikTok Business integration screen showing configuration fields.",
        title: "TikTok Business",
        caption:
            "Where the TikTok Business account is authorised and its access token stored. Automated posting or content pull only works after this is configured and tested.",
    },
];

type IntegrationStatus = "tested" | "preview" | "requires-setup";

type Integration = {
    name: string;
    status: IntegrationStatus;
    summary: string;
    requires: string[];
    caveat: string;
};

const integrations: Integration[] = [
    {
        name: "WhatsApp",
        status: "requires-setup",
        summary:
            "An outbound WhatsApp contact button is straightforward to wire. Automated order notifications via the WhatsApp Business API require your own Meta app, a verified business phone number, approved message templates, and a server-side access token.",
        requires: [
            "A Meta business account and a WhatsApp Business phone number.",
            "Approved message templates for any automated outbound messages.",
            "A server-side access token stored in environment variables.",
            "Live testing with your number before handover.",
        ],
        caveat:
            "A WhatsApp button on the storefront does not mean WhatsApp notifications are live. Notifications only work after the API setup above is configured and tested.",
    },
    {
        name: "Email",
        status: "requires-setup",
        summary:
            "Order receipts and status notifications can be sent by email once an SMTP provider or transactional email service is connected to your shop.",
        requires: [
            "SMTP credentials or a provider API key for a transactional email service.",
            "A verified sender domain or sender address.",
            "Live testing of at least one real message before handover.",
        ],
        caveat:
            "Any provider fees are set and charged by that provider and are not included in the one-time price. We do not guarantee any provider is free.",
    },
    {
        name: "AI services",
        status: "requires-setup",
        summary:
            "An optional AI assistant inside the admin. Its current, verified behaviour is described on the business-insights demo. It does not run without a supported provider key.",
        requires: [
            "An API key and account with a supported AI provider.",
            "A working network connection from the deployed shop so the admin can reach the provider.",
            "Confirmation of which AI features you want enabled, since they are optional.",
        ],
        caveat:
            "Provider fees, if any, are charged by that provider. AI replies are assistance, not advice, and are not guaranteed to be accurate.",
    },
    {
        name: "YouTube",
        status: "requires-setup",
        summary:
            "Product videos can be embedded on a product page by pasting a YouTube link. Automatically pulling a channel's videos into the store would require a YouTube Data API key and additional configuration.",
        requires: [
            "For simple embeds: only the video URLs. No API key needed.",
            "For channel sync: a YouTube Data API key and a project in Google Cloud Console.",
            "Confirmation of which mode you want, since they have very different setup steps.",
        ],
        caveat:
            "Listing YouTube here does not mean your channel is synced with your shop. Unless channel sync is configured and tested, the shop only embeds the specific video links you provide.",
    },
    {
        name: "Instagram",
        status: "requires-setup",
        summary:
            "An Instagram feed, product links, or embedded posts can be shown on the storefront. Pulling content automatically requires a Meta app with the Instagram Graph API, a Business or Creator account, and page access.",
        requires: [
            "A Meta developer app with Instagram Graph API access.",
            "An Instagram Business or Creator account linked to a Facebook page.",
            "Page access tokens stored server-side and refreshed as required.",
            "Live testing with your account before handover.",
        ],
        caveat:
            "The Instagram name appearing on the site does not mean your Instagram is connected. Automatic sync only works after the above setup is completed and tested.",
    },
    {
        name: "TikTok",
        status: "requires-setup",
        summary:
            "TikTok video links can be displayed or embedded on product pages. Any automated content pull or posting to a TikTok Business account requires a TikTok developer app and account authorisation.",
        requires: [
            "For simple links: only the TikTok URLs. No developer app needed.",
            "For automated pull/posting: a TikTok developer app and authorised account access.",
            "Confirmation of which mode you want.",
        ],
        caveat:
            "Listing TikTok here does not mean the shop is posting to or pulling from TikTok. That only works after the account authorisation and testing are completed.",
    },
    {
        name: "Facebook",
        status: "requires-setup",
        summary:
            "A Facebook page link or embedded content can be shown on the storefront. Automated connections such as a page shop or catalog sync require a Meta app and page access.",
        requires: [
            "For simple links: only the Facebook page URL.",
            "For page connections or catalog sync: a Meta developer app and page access tokens.",
            "Live testing with your page before handover.",
        ],
        caveat:
            "The Facebook name appearing on the site does not mean the shop is connected to your Facebook page or catalog. That only works after the setup above is configured and tested.",
    },
];

const statusLabels: Record<IntegrationStatus, string> = {
    tested: "Tested",
    preview: "Interface preview",
    "requires-setup": "Requires setup",
};

const statusClasses: Record<IntegrationStatus, string> = {
    tested: "border-green-700 bg-green-50 text-green-800",
    preview: "border-blue-950 bg-white text-blue-950",
    "requires-setup": "border-slate-400 bg-slate-50 text-slate-700",
};

const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").replace(
    /\D/g,
    "",
);

const whatsappMessage = encodeURIComponent(
    "Hi, I'd like to discuss which integrations can be set up for my RazeStore shop.",
);

const whatsappHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
    : `https://wa.me/?text=${whatsappMessage}`;

export default function IntegrationsDemoPage() {
    return (
        <main className="bg-white text-slate-900">
            <section className="mx-auto w-full max-w-7xl px-6 pb-6 pt-8">
                <div className="flex flex-col space-y-1.5">
                    <Link
                        href="/demos"
                        className="text-xs font-semibold text-green-700 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
                    >
                        ← Back to demos
                    </Link>
                    <h1 className="text-xl font-bold text-blue-950 sm:text-2xl lg:text-3xl">
                        Integrations
                    </h1>
                    <p className="max-w-2xl text-sm text-slate-700 sm:text-base">
                        RazeStore can connect to services you already use — WhatsApp, email,
                        AI providers, and social platforms — but each one depends on your own
                        accounts, credentials, and testing. This page lists what each
                        integration is intended to do, what it requires from you, and how
                        honest it is to describe its current state. The final set of
                        integrations is agreed with you before the build starts.
                    </p>
                </div>
            </section>

            <section className="mx-auto w-full max-w-7xl px-6 pb-4">
                <div className="rounded-sm border border-slate-200 bg-slate-50 p-3">
                    <div className="flex flex-col space-y-1.5">
                        <p className="text-[11px] font-semibold uppercase text-slate-500">
                            What the badges mean
                        </p>
                        <ul className="flex flex-col space-y-1.5 text-sm text-slate-700">
                            <li>
                                <span
                                    className={`mr-2 inline-flex items-center rounded border px-2 py-0.5 text-[11px] font-semibold uppercase ${statusClasses.tested}`}
                                >
                                    {statusLabels.tested}
                                </span>
                                Configured and verified end-to-end with real credentials in a
                                real environment.
                            </li>
                            <li>
                                <span
                                    className={`mr-2 inline-flex items-center rounded border px-2 py-0.5 text-[11px] font-semibold uppercase ${statusClasses.preview}`}
                                >
                                    {statusLabels.preview}
                                </span>
                                The interface exists, but the service is not connected. Any
                                content shown is sample data.
                            </li>
                            <li>
                                <span
                                    className={`mr-2 inline-flex items-center rounded border px-2 py-0.5 text-[11px] font-semibold uppercase ${statusClasses["requires-setup"]}`}
                                >
                                    {statusLabels["requires-setup"]}
                                </span>
                                Needs your credentials, account access, and live testing before
                                it works.
                            </li>
                        </ul>
                        <p className="text-sm leading-relaxed text-slate-700">
                            None of the integrations below are presented as already live on
                            your shop. Where an item is currently at{" "}
                            <strong className="text-blue-950">Requires setup</strong>, treat it
                            as available to configure, not working out of the box.
                        </p>
                    </div>
                </div>
            </section>

            <section className="border-t border-slate-200">
                <div className="mx-auto w-full max-w-7xl px-6 py-6">
                    <div className="flex flex-col space-y-1.5">
                        <h2 className="text-xl font-bold text-blue-950 sm:text-2xl">
                            Integrations
                        </h2>
                        <p className="max-w-2xl text-sm leading-relaxed text-slate-700">
                            Each card shows what the integration is for, what it requires from
                            you, and what it does not mean until it has been configured.
                        </p>
                    </div>
                    <ul className="mt-4 flex flex-col space-y-2">
                        {integrations.map((integration) => (
                            <li
                                key={integration.name}
                                className="rounded-sm border border-slate-200 bg-white p-4"
                            >
                                <div className="flex flex-col space-y-1.5">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <h3 className="text-base font-semibold text-blue-950">
                                            {integration.name}
                                        </h3>
                                        <span
                                            className={`inline-flex items-center rounded-sm border px-2 py-0.5 text-[11px] font-semibold uppercase ${statusClasses[integration.status]}`}
                                        >
                                            {statusLabels[integration.status]}
                                        </span>
                                    </div>
                                    <p className="text-sm leading-relaxed text-slate-700">
                                        {integration.summary}
                                    </p>
                                    <div className="flex flex-col space-y-1">
                                        <p className="text-[11px] font-semibold uppercase text-slate-500">
                                            What it requires from you
                                        </p>
                                        <ul className="flex flex-col space-y-1 text-sm text-slate-800">
                                            {integration.requires.map((item) => (
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
                                    <p className="text-xs text-slate-600">
                                        {integration.caveat}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="border-t border-slate-200 bg-slate-50">
                <div className="mx-auto w-full max-w-7xl px-6 py-6">
                    <div className="flex flex-col space-y-1.5">
                        <h2 className="text-xl font-bold text-blue-950 sm:text-2xl">
                            What a name or logo on the site does not mean
                        </h2>
                        <p className="max-w-2xl text-sm text-slate-700">
                            The presence of a service&apos;s name, badge, or button on your
                            storefront does not mean the service is synchronised with your shop.
                            Until the integration is configured with your credentials and
                            verified end-to-end, the storefront only links to or embeds the
                            specific content you provide — it does not pull data from those
                            platforms automatically.
                        </p>
                    </div>
                </div>
            </section>

            <section className="border-t border-slate-200">
                <div className="mx-auto w-full max-w-7xl px-6 py-6">
                    <div className="flex flex-col space-y-1.5">
                        <h2 className="text-xl font-bold text-blue-950 sm:text-2xl">
                            Interface screenshots
                        </h2>
                        <p className="max-w-2xl text-sm text-slate-700">
                            Captures of the admin screens where integrations are configured.
                            Where a screen has not been captured yet, a clearly labeled
                            placeholder is shown — no fabricated screenshots.
                        </p>
                    </div>
                    <div className="mt-3">
                        <ScreenshotGallery screenshots={integrationScreenshots} />
                    </div>
                </div>
            </section>

            <section className="border-t border-slate-200 bg-slate-50">
                <div className="mx-auto w-full max-w-7xl px-6 py-6">
                    <div className="flex flex-col space-y-1.5">
                        <h2 className="text-xl font-bold text-blue-950 sm:text-2xl">
                            Scope is agreed with you
                        </h2>
                        <p className="max-w-2xl text-sm text-slate-700">
                            Not every integration on this page is right for every shop.
                            Together we agree which ones make sense for your business, which are
                            in scope for the one-time price, and which need their own setup and
                            any third-party fees. Anything not confirmed in writing is out of
                            scope.
                        </p>
                    </div>
                </div>
            </section>

            <section className="border-t border-slate-200">
                <div className="mx-auto w-full max-w-7xl px-6 py-6">
                    <div className="flex flex-col space-y-1.5">
                        <h2 className="text-xl font-bold text-blue-950 sm:text-2xl">
                            Continue exploring
                        </h2>
                        <p className="max-w-2xl text-sm text-slate-700">
                            See the related demos, or return to the full list of RazeStore
                            demos.
                        </p>
                    </div>
                    <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                        <Link
                            href="/demos/business-insights"
                            className="inline-flex items-center justify-center rounded bg-blue-950 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950"
                        >
                            Business insights demo
                        </Link>
                        <Link
                            href="/demos/shop-management"
                            className="inline-flex items-center justify-center rounded border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-blue-950 transition-colors hover:border-blue-950 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950"
                        >
                            Shop management demo
                        </Link>
                        <Link
                            href="/demos"
                            className="inline-flex items-center justify-center rounded border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-blue-950 transition-colors hover:border-blue-950 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950"
                        >
                            Back to all demos
                        </Link>
                    </div>
                </div>
            </section>

            <section className="border-t border-slate-200 bg-white">
                <div className="mx-auto w-full max-w-7xl px-6 py-6">
                    <div className="rounded-sm border border-slate-200 bg-slate-50 p-3 sm:p-6">
                        <div className="flex flex-col space-y-1.5">
                            <h2 className="text-xl font-bold text-blue-950 sm:text-2xl">
                                Which integrations fit your shop?
                            </h2>
                            <p className="max-w-2xl text-sm text-slate-700">
                                Share the accounts you already use on WhatsApp and we will walk
                                through what can be connected, what needs your credentials, and
                                what stays out of scope.
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