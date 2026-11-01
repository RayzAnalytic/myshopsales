"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

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
    index: number;
    total: number;
};

function ScreenshotThumb({ shot, onOpen, index, total }: ScreenshotThumbProps) {
    const [brokenSrc, setBrokenSrc] = useState<string | null>(null);
    const hasSource = Boolean(shot.src);
    const broken = brokenSrc === shot.src;

    return (
        <button
            type="button"
            onClick={onOpen}
            aria-label={
                shot.title
                    ? `Open screenshot ${index + 1} of ${total}: ${shot.title}`
                    : `Open screenshot ${index + 1} of ${total}`
            }
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
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        onError={() => setBrokenSrc(shot.src)}
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
                        <p className="text-xs text-slate-700">{shot.caption}</p>
                    ) : null}
                </div>
            ) : null}
        </button>
    );
}

type ScreenshotModalProps = {
    shot: Screenshot;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
    index: number;
    total: number;
};

function ScreenshotModal({
    shot,
    onClose,
    onPrev,
    onNext,
    index,
    total,
}: ScreenshotModalProps) {
    const [brokenSrc, setBrokenSrc] = useState<string | null>(null);
    const closeRef = useRef<HTMLButtonElement | null>(null);
    const dialogRef = useRef<HTMLDivElement | null>(null);
    const hasSource = Boolean(shot.src);
    const broken = brokenSrc === shot.src;

    useEffect(() => {
        closeRef.current?.focus();
    }, []);

    useEffect(() => {
        function handleKey(event: KeyboardEvent) {
            if (event.key === "Escape") {
                event.preventDefault();
                onClose();
                return;
            }
            if (event.key === "ArrowLeft") {
                event.preventDefault();
                onPrev();
                return;
            }
            if (event.key === "ArrowRight") {
                event.preventDefault();
                onNext();
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
    }, [onClose, onPrev, onNext]);

    const showNav = total > 1;

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-label={
                shot.title
                    ? `Enlarged view: ${shot.title}`
                    : "Enlarged screenshot"
            }
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
            <div
                aria-hidden="true"
                onClick={onClose}
                className="absolute inset-0 bg-slate-950/70"
            />

            <div
                ref={dialogRef}
                className="relative z-10 flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded border border-slate-200 bg-white"
            >
                <div className="flex items-center justify-between gap-2 border-b border-slate-200 px-3 py-2">
                    <span className="flex items-center gap-2 text-sm font-semibold text-blue-950">
                        <span>{shot.title ?? "Screenshot"}</span>
                        {showNav ? (
                            <span className="text-xs font-normal text-slate-500">
                                {index + 1} / {total}
                            </span>
                        ) : null}
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

                <div className="relative h-[60vh] max-h-[800px] w-full bg-slate-50">
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
                            sizes="(min-width: 1024px) 960px, 100vw"
                            className="object-contain"
                            onError={() => setBrokenSrc(shot.src)}
                        />
                    )}

                    {showNav ? (
                        <>
                            <button
                                type="button"
                                onClick={onPrev}
                                aria-label="Previous screenshot"
                                className="absolute left-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-blue-950 shadow ring-1 ring-slate-200 transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950"
                            >
                                <svg
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    className="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M15 18l-6-6 6-6" />
                                </svg>
                            </button>
                            <button
                                type="button"
                                onClick={onNext}
                                aria-label="Next screenshot"
                                className="absolute right-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-blue-950 shadow ring-1 ring-slate-200 transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950"
                            >
                                <svg
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    className="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M9 6l6 6-6 6" />
                                </svg>
                            </button>
                        </>
                    ) : null}
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
    const total = screenshots?.length ?? 0;

    const close = useCallback(() => setOpenIndex(null), []);

    const prev = useCallback(() => {
        setOpenIndex((current) => {
            if (current === null || total === 0) return current;
            return (current - 1 + total) % total;
        });
    }, [total]);

    const next = useCallback(() => {
        setOpenIndex((current) => {
            if (current === null || total === 0) return current;
            return (current + 1) % total;
        });
    }, [total]);

    useEffect(() => {
        if (openIndex !== null && total > 0 && openIndex >= total) {
            setOpenIndex(null);
        }
    }, [openIndex, total]);

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

    const active =
        openIndex !== null && openIndex < screenshots.length
            ? screenshots[openIndex]
            : null;

    return (
        <div className={className}>
            <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                {screenshots.map((shot, index) => (
                    <li key={`${shot.src}-${index}`} className="h-full">
                        <ScreenshotThumb
                            shot={shot}
                            index={index}
                            total={screenshots.length}
                            onOpen={() => setOpenIndex(index)}
                        />
                    </li>
                ))}
            </ul>

            {active ? (
                <ScreenshotModal
                    shot={active}
                    onClose={close}
                    onPrev={prev}
                    onNext={next}
                    index={openIndex ?? 0}
                    total={screenshots.length}
                />
            ) : null}
        </div>
    );
}