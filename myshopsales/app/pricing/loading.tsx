export default function PricingLoading() {
    return (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-white">
            <div className="mx-auto w-full max-w-7xl animate-pulse px-6 py-6">
                <div className="grid gap-4 lg:grid-cols-5 lg:gap-6">
                    <div className="flex flex-col space-y-3 lg:col-span-3">
                        <div className="h-3 w-20 rounded bg-slate-200" />
                        <div className="h-8 w-3/4 rounded bg-slate-200" />
                        <div className="h-4 w-full max-w-2xl rounded bg-slate-100" />
                        <div className="h-4 w-5/6 max-w-xl rounded bg-slate-100" />
                    </div>
                    <div className="rounded border border-slate-200 bg-slate-50 p-4 lg:col-span-2">
                        <div className="space-y-3">
                            <div className="h-3 w-24 rounded bg-slate-200" />
                            <div className="h-8 w-40 rounded bg-slate-300" />
                            <div className="h-4 w-full rounded bg-slate-200" />
                            <div className="flex gap-2 pt-1">
                                <div className="h-9 w-40 rounded bg-slate-300" />
                                <div className="h-9 w-32 rounded bg-slate-200" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <div className="h-6 w-48 rounded bg-slate-200" />
                    <div className="mt-2 h-4 w-80 max-w-full rounded bg-slate-100" />
                    <div className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                        {Array.from({ length: 12 }).map((_, i) => (
                            <div key={i} className="flex items-start gap-2">
                                <div className="mt-1.5 h-1.5 w-1.5 rounded-sm bg-slate-300" />
                                <div className="h-4 flex-1 rounded bg-slate-100" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-10">
                    <div className="h-6 w-56 rounded bg-slate-200" />
                    <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                        {Array.from({ length: 3 }).map((_, i) => (
                            <div key={i} className="rounded border border-slate-200 bg-white p-4">
                                <div className="h-3 w-16 rounded bg-slate-200" />
                                <div className="mt-2 h-5 w-3/4 rounded bg-slate-200" />
                                <div className="mt-3 h-4 w-full rounded bg-slate-100" />
                                <div className="mt-1.5 h-4 w-5/6 rounded bg-slate-100" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}