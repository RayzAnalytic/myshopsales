export default function RootLoading() {
    return (
        <div
            role="status"
            aria-live="polite"
            className="fixed inset-0 z-50 flex items-center justify-center bg-white"
        >
            <div className="flex flex-col items-center gap-4">
                <span
                    aria-hidden="true"
                    className="inline-block h-10 w-10 animate-spin rounded-full border-2 border-slate-200 border-t-blue-950"
                />
                <p className="text-sm font-medium text-slate-500">Loading…</p>
            </div>
            <span className="sr-only">Loading page</span>
        </div>
    );
}