import Link from "next/link";

export default function DemoNotFound() {
    return (
        <main className="mx-auto w-full max-w-3xl px-6 py-16">
            <h1 className="text-2xl font-bold text-blue-950">Demo not found</h1>
            <p className="mt-2 text-sm text-slate-700">
                That demo does not exist or has been renamed.
            </p>
            <Link
                href="/demos"
                className="mt-4 inline-flex items-center justify-center rounded bg-blue-950 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950"
            >
                Back to all demos
            </Link>
        </main>
    );
}