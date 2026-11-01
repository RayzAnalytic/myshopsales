import Link from "next/link";
import VideoViewer from "@/components/demos/VideoViewer";
import ScreenshotGallery from "@/components/demos/ScreenshotGallery";
import type { Screenshot } from "@/components/demos/ScreenshotGallery";

const mpesaMedia = {
    videoSrc: "/videos/mpesacheckout.mp4",
    posterSrc: "/images/mpesacheckoutposter.png",
    alt: "RazeStore M-Pesa checkout recording showing a cart proceeding to STK Push.",
    caption:
        "Checkout flow: cart, checkout screen, STK Push request, and the order status update in the admin.",
};

const mpesaScreenshots: Screenshot[] = [
    {
        src: "/images/stkpush.jpeg",
        alt: "RazeStore checkout screen requesting an M-Pesa STK Push.",
        title: "Requesting STK Push",
        caption:
            "The customer confirms their order and requests an M-Pesa STK Push from the checkout screen.",
    },
    {
        src: "/images/successfulpayment.png",
        alt: "RazeStore order status showing a successful M-Pesa payment.",
        title: "Successful payment",
        caption:
            "When the customer enters their M-Pesa PIN and the payment succeeds, the order status updates in the admin. Shown only if a genuine capture is available.",
    },
    {
        src: "/images/cancelledpayment.png",
        alt: "RazeStore order status showing a cancelled M-Pesa payment.",
        title: "Cancelled payment",
        caption:
            "When the customer cancels the prompt or the payment fails, the order status reflects that outcome. Shown only if a genuine capture is available.",
    },
];

const flowSteps = [
    {
        title: "Add products to the cart",
        body: "The customer picks items in the online shop and adds them to the cart.",
    },
    {
        title: "Proceed to checkout",
        body: "The customer opens the checkout screen, reviews the order, and enters their delivery details.",
    },
    {
        title: "Request an M-Pesa STK Push",
        body: "When M-Pesa is configured for the shop, the customer can request an STK Push to pay from their phone.",
    },
    {
        title: "Respond to the prompt",
        body: "The customer receives the payment prompt on their phone and confirms it with their M-Pesa PIN, or cancels it.",
    },
    {
        title: "Order status is updated",
        body: "Based on the payment outcome, the order status in the admin interface reflects success, cancellation, or failure. The admin demo shows where this happens.",
    },
];

const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").replace(
    /\D/g,
    "",
);

const whatsappMessage = encodeURIComponent(
    "Hi, I'd like to ask about M-Pesa checkout setup for a RazeStore shop.",
);

const whatsappHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
    : `https://wa.me/?text=${whatsappMessage}`;

export default function MpesaDemoPage() {
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
                        M-Pesa checkout
                    </h1>
                    <p className="max-w-2xl text-sm text-slate-700 sm:text-base">
                        RazeStore is designed so a customer can pay with M-Pesa directly from
                        the checkout screen. This page walks through how the flow works, what
                        has been tested in development, and what still requires your own
                        M-Pesa account details and live testing before it can be used in
                        production.
                    </p>
                </div>
            </section>

            <section className="mx-auto w-full max-w-7xl px-6 pb-6">
                <VideoViewer
                    videoSrc={mpesaMedia.videoSrc}
                    posterSrc={mpesaMedia.posterSrc}
                    alt={mpesaMedia.alt}
                    caption={mpesaMedia.caption}
                />
                <p className="mt-2 text-xs text-slate-600">
                    The recording above shows the flow as it runs in a development
                    environment with sample data. It is not a live production payment.
                </p>
            </section>

            <section className="border-t border-slate-200 bg-slate-50">
                <div className="mx-auto w-full max-w-7xl px-6 py-8">
                    <div className="flex flex-col space-y-1.5">
                        <h2 className="text-xl font-bold text-blue-950 sm:text-2xl">
                            How the payment flow works
                        </h2>
                        <p className="max-w-2xl text-sm text-slate-700">
                            The flow follows the familiar M-Pesa experience your customers
                            already know, and the outcome is reflected in the admin interface.
                        </p>
                    </div>
                    <ol className="mt-4 flex flex-col space-y-2">
                        {flowSteps.map((step, index) => (
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

            <section className="border-t border-slate-200">
                <div className="mx-auto w-full max-w-7xl px-6 py-6">
                    <div className="flex flex-col space-y-1.5">
                        <h2 className="text-xl font-bold text-blue-950 sm:text-2xl">
                            Screenshots
                        </h2>
                        <p className="max-w-2xl text-sm text-slate-700">
                            Genuine RazeStore captures of the M-Pesa checkout. If a screen has
                            not been captured yet, a clearly labeled placeholder is shown — no
                            fabricated screenshots.
                        </p>
                    </div>
                    <div className="mt-4">
                        <ScreenshotGallery screenshots={mpesaScreenshots} />
                    </div>
                </div>
            </section>

            <section className="border-t border-slate-200 bg-slate-50">
                <div className="mx-auto w-full max-w-7xl px-6 py-6">
                    <div className="flex flex-col space-y-1.5">
                        <h2 className="text-xl font-bold text-blue-950 sm:text-2xl">
                            Development testing vs production integration
                        </h2>
                        <p className="max-w-2xl text-sm text-slate-700">
                            These are different states, and it is important to know which one
                            you are looking at.
                        </p>
                    </div>
                    <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                        <div className="flex-1 rounded-sm border border-slate-200 bg-white p-4">
                            <div className="flex flex-col space-y-1.5">
                                <p className="text-[11px] font-semibold uppercase text-slate-500">
                                    Tested in development
                                </p>
                                <h3 className="text-base font-semibold text-blue-950">
                                    Sandbox / development environment
                                </h3>
                                <p className="text-sm text-slate-700">
                                    The checkout flow, STK Push request, and order status updates
                                    have been built and exercised in a development environment using
                                    sandbox M-Pesa credentials and sample product data.
                                </p>
                            </div>
                        </div>
                        <div className="flex-1 rounded-sm border border-slate-200 bg-white p-3">
                            <div className="flex flex-col space-y-1.5">
                                <p className="text-[11px] font-semibold uppercase text-green-700">
                                    Your production setup
                                </p>
                                <h3 className="text-base font-semibold text-blue-950">
                                    Live payments on your shop
                                </h3>
                                <p className="text-sm text-slate-700">
                                    Live payments only work after your M-Pesa account details,
                                    Daraja credentials, and paybill or till configuration are in
                                    place and tested end to end. Until then, checkout is not live on
                                    your shop.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-t border-slate-200">
                <div className="mx-auto w-full max-w-7xl px-6 py-8">
                    <div className="flex flex-col space-y-1.5">
                        <h2 className="text-xl font-bold text-blue-950 sm:text-2xl">
                            What live M-Pesa setup requires
                        </h2>
                        <p className="max-w-2xl text-sm text-slate-700">
                            M-Pesa payments depend on your own M-Pesa business account. The
                            items below are needed before live payments can be tested and
                            handed over.
                        </p>
                    </div>
                    <ul className="mt-4 flex flex-col space-y-1.5 text-sm text-slate-800">
                        <li>
                            A paybill number or till number that the payments should be
                            associated with.
                        </li>
                        <li>
                            Daraja API credentials for that paybill or till — consumer key,
                            consumer secret, shortcode, and passkey.
                        </li>
                        <li>
                            A publicly reachable callback URL, which we configure as part of the
                            deployment.
                        </li>
                        <li>
                            End-to-end testing with a small live payment before handover.
                        </li>
                        <li>
                            Written confirmation from you of which account money should land
                            in. We do not claim funds are routed to a particular till until
                            your configured setup confirms that behaviour.
                        </li>
                    </ul>
                </div>
            </section>

            <section className="border-t border-slate-200 bg-slate-50">
                <div className="mx-auto w-full max-w-7xl px-6 py-6">
                    <div className="flex flex-col space-y-1.5">
                        <h2 className="text-xl font-bold text-blue-950 sm:text-2xl">
                            Continue exploring
                        </h2>
                        <p className="max-w-2xl text-sm text-slate-700">
                            See how orders show up in the admin after a payment, or return to the
                            full list of RazeStore demos.
                        </p>
                    </div>
                    <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                        <Link
                            href="/demos/shop-management"
                            className="inline-flex items-center justify-center rounded-sm bg-blue-950 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950"
                        >
                            View the shop-management demo
                        </Link>
                        <Link
                            href="/demos"
                            className="inline-flex items-center justify-center rounded-sm border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-blue-950 transition-colors hover:border-blue-950 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950"
                        >
                            Back to all demos
                        </Link>
                    </div>
                </div>
            </section>

            <section className="border-t border-slate-200 bg-white">
                <div className="mx-auto w-full max-w-7xl px-6 py-8">
                    <div className="rounded-sm border border-slate-200 bg-slate-50 p-4 sm:p-6">
                        <div className="flex flex-col space-y-1.5">
                            <h2 className="text-xl font-bold text-blue-950 sm:text-2xl">
                                Want M-Pesa checkout on your shop?
                            </h2>
                            <p className="max-w-2xl text-sm text-slate-700">
                                Share your paybill or till on WhatsApp and we will walk through
                                what setup requires, what can be tested, and what is not yet
                                confirmed.
                            </p>
                            <div className="flex flex-col gap-2 pt-1 sm:flex-row">
                                <a
                                    href={whatsappHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-sm bg-green-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
                                >
                                    Chat on WhatsApp
                                </a>
                                <Link
                                    href="/pricing"
                                    className="inline-flex items-center justify-center rounded-sm border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-blue-950 transition-colors hover:border-blue-950 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950"
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