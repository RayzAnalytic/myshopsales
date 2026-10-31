"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type Screenshot = {
    src: string;
    alt: string;
    title?: string;
    caption?: string;
};

type ScreenshotGalleryProps = {
    screenshots: Screenshot[];
    emptyMessage?: string;
    className?: string;
};

type ScreenshotThumbProps = {
    shot: Screenshot;
    onOpen: () => void;
};

function ScreenshotThumb({ shot, onOpen }: ScreenshotThumbProps) {
    const [broken, setBroken] = useState(false);
    const hasSource = Boolean(shot.src);

    return (
        <button
            type="button"
            onClick={onOpen}
            className="group flex h-full w-full flex-col overflow-hidden rounded border border-slate-200 bg-white text-left transition-colors hover:border-blue-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950"
        >
            <div className="relative aspect-video w-full flex-none bg-slate-50">
                {!hasSource || broken ? (
                    <div className="flex h-full w-full items-center justify-center p-4">
                        <span className="text-center text-xs text-slate-500">
                            Screenshot not yet supplied
                        </span>
                    </div>
                ) : (
                    <Image
                        src={shot.src}
                        alt={shot.alt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                        onError={() => setBroken(true)}
                    />
                )}
            </div>

            {shot.title || shot.caption ? (
                <div className="flex flex-1 flex-col space-y-1 p-3">
                    {shot.title ? (
                        <h3 className="text-sm font-semibold text-blue-950">
                            {shot.title}
                        </h3>
                    ) : null}
                    {shot.caption ? (
                        <p className="text-xs text-slate-700">
                            {shot.caption}
                        </p>
                    ) : null}
                </div>
            ) : null}
        </button>
    );
}

type ScreenshotModalProps = {
    shot: Screenshot;
    onClose: () => void;
};

function ScreenshotModal({ shot, onClose }: ScreenshotModalProps) {
    const [broken, setBroken] = useState(false);
    const closeRef = useRef<HTMLButtonElement | null>(null);
    const dialogRef = useRef<HTMLDivElement | null>(null);
    const hasSource = Boolean(shot.src);

    useEffect(() => {
        closeRef.current?.focus();
    }, []);

    useEffect(() => {
        function handleKey(event: KeyboardEvent) {
            if (event.key === "Escape") {
                onClose();
                return;
            }
            if (event.key !== "Tab") return;
            const dialog = dialogRef.current;
            if (!dialog) return;
            const focusables = dialog.querySelectorAll<HTMLElement>(
                'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
            );
            if (focusables.length === 0) return;
            const first = focusables[0];
            const last = focusables[focusables.length - 1];
            const active = document.activeElement as HTMLElement | null;
            if (event.shiftKey) {
                if (active === first || !dialog.contains(active)) {
                    event.preventDefault();
                    last.focus();
                }
            } else {
                if (active === last || !dialog.contains(active)) {
                    event.preventDefault();
                    first.focus();
                }
            }
        }

        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [onClose]);

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-label={shot.title ? `Enlarged view: ${shot.title}` : "Enlarged screenshot"}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
            <div
                aria-hidden="true"
                onClick={onClose}
                className="absolute inset-0 bg-slate-950/70"
            />

            <div
                ref={dialogRef}
                className="relative z-10 flex max-h-full w-full max-w-4xl flex-col overflow-hidden rounded border border-slate-200 bg-white"
            >
                <div className="flex items-center justify-between gap-2 border-b border-slate-200 px-3 py-2">
                    <span className="text-sm font-semibold text-blue-950">
                        {shot.title ?? "Screenshot"}
                    </span>
                    <button
                        ref={closeRef}
                        type="button"
                        onClick={onClose}
                        aria-label="Close enlarged screenshot"
                        className="inline-flex items-center justify-center rounded px-2 py-2 text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950"
                    >
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                        >
                            <path d="M6 6l12 12M18 6l-12 12" />
                        </svg>
                    </button>
                </div>

                <div className="relative aspect-video w-full overflow-auto bg-slate-50">
                    {!hasSource || broken ? (
                        <div className="flex h-full w-full items-center justify-center p-4">
                            <span className="text-center text-sm text-slate-500">
                                Screenshot not yet supplied
                            </span>
                        </div>
                    ) : (
                        <Image
                            src={shot.src}
                            alt={shot.alt}
                            fill
                            sizes="(min-width: 1024px) 900px, 100vw"
                            className="object-contain"
                            onError={() => setBroken(true)}
                        />
                    )}
                </div>

                {shot.caption ? (
                    <p className="border-t border-slate-200 px-3 py-2 text-xs text-slate-700">
                        {shot.caption}
                    </p>
                ) : null}
            </div>
        </div>
    );
}

export default function ScreenshotGallery({
    screenshots,
    emptyMessage = "No screenshots have been added yet.",
    className = "",
}: ScreenshotGalleryProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const lastFocusRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (openIndex !== null) {
            lastFocusRef.current = document.activeElement as HTMLElement | null;
            const previous = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            return () => {
                document.body.style.overflow = previous;
            };
        }
        if (lastFocusRef.current) {
            lastFocusRef.current.focus();
            lastFocusRef.current = null;
        }
    }, [openIndex]);

    if (!screenshots || screenshots.length === 0) {
        return (
            <div
                className={`rounded-sm border border-slate-200 bg-slate-50 p-3 ${className}`.trim()}
            >
                <p className="text-sm text-slate-700">{emptyMessage}</p>
            </div>
        );
    }

    const active = openIndex !== null ? screenshots[openIndex] : null;

    return (
        <div className={className}>
            <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                {screenshots.map((shot, index) => (
                    <li key={`${shot.src}-${index}`} className="h-full">
                        <ScreenshotThumb
                            shot={shot}
                            onOpen={() => setOpenIndex(index)}
                        />
                    </li>
                ))}
            </ul>

            {active ? (
                <ScreenshotModal
                    shot={active}
                    onClose={() => setOpenIndex(null)}
                />
            ) : null}
        </div>
    );
}