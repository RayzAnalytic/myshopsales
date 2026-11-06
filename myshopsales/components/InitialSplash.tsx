"use client";

import { useEffect, useState } from "react";

export default function InitialSplash() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const t = setTimeout(() => setVisible(false), 350);
        return () => clearTimeout(t);
    }, []);

    if (!visible) return null;

    return (
        <div
            role="status"
            aria-live="polite"
            className="fixed inset-0 z-[60] flex items-center justify-center bg-white transition-opacity duration-300"
        >
            <div className="flex flex-col items-center gap-4">
                <span
                    aria-hidden="true"
                    className="inline-block h-10 w-10 animate-spin rounded-full border-2 border-slate-200 border-t-blue-950"
                />
                <p className="text-sm font-medium text-slate-500">Loading…</p>
            </div>
            <span className="sr-only">Loading RazeStore</span>
        </div>
    );
}