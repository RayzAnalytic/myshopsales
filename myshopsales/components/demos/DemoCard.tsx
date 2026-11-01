"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export type DemoCardStatus = "available" | "requires-setup" | "confirm-scope";

export type DemoCardProps = {
    title: string;
    description: string;
    thumbnailSrc: string;
    thumbnailAlt: string;
    href: string;
    status?: string;
    statusKey?: DemoCardStatus;
    category?: string;
    className?: string;
    videoSrc?: string;
    posterSrc?: string;
};

function statusClasses(statusKey?: DemoCardStatus) {
    switch (statusKey) {
        case "available":
            return "border-emerald-300 bg-emerald-50 text-emerald-800";
        case "requires-setup":
            return "border-amber-300 bg-amber-50 text-amber-800";
        case "confirm-scope":
            return "border-sky-300 bg-sky-50 text-sky-800";
        default:
            return "border-slate-300 bg-slate-50 text-slate-700";
    }
}

export default function DemoCard({
    title,
    description,
    thumbnailSrc,
    thumbnailAlt,
    href,
    status,
    statusKey,
    category,
    className = "",
    videoSrc = "",
    posterSrc = "",
}: DemoCardProps) {
    const [thumbBroken, setThumbBroken] = useState(false);
    const [videoBroken, setVideoBroken] = useState(false);
    const [videoReady, setVideoReady] = useState(false);
    const [reduceMotion, setReduceMotion] = useState(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const hasVideo = Boolean(videoSrc) && !videoBroken;
    const hasThumbnail = Boolean(thumbnailSrc) && !thumbBroken;
    const poster = posterSrc || thumbnailSrc || undefined;

    useEffect(() => {
        if (typeof window === "undefined" || !window.matchMedia) return;
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        const update = () => setReduceMotion(mq.matches);
        update();
        if (mq.addEventListener) {
            mq.addEventListener("change", update);
            return () => mq.removeEventListener("change", update);
        }
        // Safari < 14 fallback
        mq.addListener(update);
        return () => mq.removeListener(update);
    }, []);

    useEffect(() => {
        const el = videoRef.current;
        if (!el) return;
        if (reduceMotion) {
            el.pause();
            return;
        }
        const playPromise = el.play();
        if (playPromise && typeof playPromise.catch === "function") {
            playPromise.catch(() => {
                // Autoplay blocked; poster remains visible.
            });
        }
    }, [reduceMotion, hasVideo]);

    return (
        <Link
            href={href}
            className={`group flex h-full flex-col overflow-hidden rounded border border-slate-200 bg-white transition-colors hover:border-blue-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950 ${className}`.trim()}
        >
            <div className="relative aspect-video w-full flex-none overflow-hidden bg-slate-50">
                {hasVideo ? (
                    <>
                        <video
                            ref={videoRef}
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            poster={poster}
                            aria-hidden="true"
                            tabIndex={-1}
                            onCanPlay={() => setVideoReady(true)}
                            onError={() => setVideoBroken(true)}
                            className={`h-full w-full object-cover transition-opacity duration-300 ${videoReady ? "opacity-100" : "opacity-0"
                                }`}
                        >
                            <source src={videoSrc} type="video/mp4" />
                        </video>

                        {!videoReady ? (
                            <div className="pointer-events-none absolute inset-0">
                                {hasThumbnail ? (
                                    <Image
                                        src={thumbnailSrc}
                                        alt={thumbnailAlt}
                                        fill
                                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                        className="object-cover"
                                        onError={() => setThumbBroken(true)}
                                    />
                                ) : null}
                            </div>
                        ) : null}
                    </>
                ) : hasThumbnail ? (
                    <Image
                        src={thumbnailSrc}
                        alt={thumbnailAlt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                        onError={() => setThumbBroken(true)}
                    />
                ) : posterSrc ? (
                    // Last-resort poster fallback when both video and thumbnail are missing.
                    <Image
                        src={posterSrc}
                        alt={thumbnailAlt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                        onError={() => setThumbBroken(true)}
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center p-4">
                        <span className="text-center text-xs text-slate-500">
                            Preview not yet supplied
                        </span>
                    </div>
                )}
            </div>

            <div className="flex flex-1 flex-col space-y-2 p-2">
                {category || status ? (
                    <div className="flex flex-wrap items-center gap-3">
                        {category ? (
                            <span className="text-xs font-semibold uppercase text-slate-500">
                                {category}
                            </span>
                        ) : null}
                        {status ? (
                            <span
                                className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold ${statusClasses(
                                    statusKey,
                                )}`}
                            >
                                {status}
                            </span>
                        ) : null}
                    </div>
                ) : null}

                <h3 className="text-lg font-semibold text-blue-950 group-hover:text-blue-900">
                    {title}
                </h3>

                <p className="text-base text-slate-700">{description}</p>

                <span className="mt-auto inline-flex items-center gap-3 pt-2 text-sm font-semibold text-blue-950">
                    View Demo
                    <span
                        aria-hidden="true"
                        className="transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
                    >
                        →
                    </span>
                </span>
            </div>
        </Link>
    );
}