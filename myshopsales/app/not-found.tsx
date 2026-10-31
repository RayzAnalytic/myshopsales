import Link from "next/link";

const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").replace(/\D/g, "");

const whatsappHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        "Hi, I was on the RazeStore website and would like to know more.",
    )}`
    : "https://wa.me/";

export default function NotFound() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 py-8 text-slate-900">
            <div className="mx-auto flex w-full max-w-2xl flex-col items-center space-y-2 text-center">
                <span
                    aria-hidden="true"
                    className="flex h-12 w-12 items-center justify-center rounded-sm border border-red-200 bg-red-50 text-red-600"
                >
                    <svg
                        viewBox="0 0 24 24"
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 8v5" />
                        <path d="M12 16h.01" />
                    </svg>
                </span>

                <p className="text-xs font-semibold uppercase tracking-widest text-red-600">
                    Error 404 · Page not found
                </p>
                <h1 className="text-xl font-bold text-blue-950 sm:text-2xl lg:text-3xl">
                    We couldn&apos;t find that page
                </h1>
                <p className="max-w-md text-sm leading-relaxed text-slate-700 sm:text-base">
                    The link may be broken, or the page may have been moved. You can head back
                    to the home page or explore the RazeStore demos instead.
                </p>
            </div>

            <div className="mt-6 flex w-full max-w-md flex-col items-stretch gap-2 sm:w-auto sm:max-w-none sm:flex-row sm:items-center sm:justify-center">
                <Link
                    href="/"
                    className="inline-flex items-center justify-center rounded-sm bg-blue-950 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950"
                >
                    Back to home
                </Link>
                <Link
                    href="/demos"
                    className="inline-flex items-center justify-center rounded-sm border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-blue-950 transition-colors hover:border-blue-950 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950"
                >
                    Explore demos
                </Link>
            </div>

            <div className="mt-6 flex flex-col items-center space-y-1.5 text-center">
                <p className="text-xs text-slate-600">Need help right away?</p>
                <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-sm bg-green-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
                >
                    Chat with us on WhatsApp
                </a>
            </div>
        </main>
    );
}