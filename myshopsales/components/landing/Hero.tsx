"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";

const capabilityLabels = [
    "Custom storefront",
    "Product browsing",
    "Cart and checkout",
    "Admin dashboard",
    "Your own domain",
];

const MIN_POSTER_MS = 1200;

export default function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [showPoster, setShowPoster] = useState(true);
    const mountedAtRef = useRef<number>(0);

    useEffect(() => {
        mountedAtRef.current = Date.now();

        const video = videoRef.current;
        if (!video) return;
        video.muted = true;
        const playPromise = video.play();
        if (playPromise && typeof playPromise.catch === "function") {
            playPromise.catch(() => { });
        }
    }, []);

    const revealVideo = () => {
        const elapsed = mountedAtRef.current ? Date.now() - mountedAtRef.current : 0;
        const remaining = Math.max(0, MIN_POSTER_MS - elapsed);
        if (remaining === 0) {
            setShowPoster(false);
        } else {
            window.setTimeout(() => setShowPoster(false), remaining);
        }
    };

    return (
        <section className="border-b border-slate-200 bg-white px-4 py-8 text-slate-900 sm:px-6 lg:py-12">
            <div className="mx-auto grid w-full max-w-[1700px] grid-cols-1 items-center gap-4 lg:grid-cols-12 lg:gap-8">
                <div className="flex flex-col justify-center space-y-3 lg:col-span-6">
                    <h1 className="text-3xl font-bold text-blue-950 sm:text-4xl lg:text-[2rem] xl:text-[2rem]">
                        Own a fully built, ready-to-launch online shop for your electronics business
                    </h1>
                    <p className="max-w-2xl text-base text-slate-700 sm:text-sm">
                        RazeStore is a complete, turn-key e-commerce platform built specifically for your shop.
                        It comes with a fully operational customer storefront, integrated M-Pesa payments,
                        and a powerful 20-module admin dashboard. You own the complete source code, content, and domain.
                    </p>

                    <div className="flex flex-col gap-2 pt-2 sm:flex-row sm:items-center">
                        <WhatsAppButton
                            message="Hi, I'd like to know more about getting a RazeStore online shop for my business."
                            variant="primary"
                        >
                            Chat on WhatsApp
                        </WhatsAppButton>
                        <Link
                            href="/demos"
                            className="inline-flex items-center justify-center rounded border border-slate-300 bg-white px-5 py-3 text-base font-semibold text-blue-950 transition-colors hover:border-blue-950 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950"
                        >
                            Explore Demos
                        </Link>
                    </div>

                    <ul aria-label="What the shop includes" className="mt-2 flex flex-wrap gap-2">
                        {capabilityLabels.map((label) => (
                            <li
                                key={label}
                                className="inline-flex items-center rounded border border-slate-200 bg-slate-50 px-2 py-1.5 text-xs font-medium text-slate-700"
                            >
                                {label}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex w-full justify-center lg:col-span-6">
                    <div className="relative w-full max-w-full overflow-hidden rounded border border-slate-200 bg-slate-100 shadow-sm lg:w-[700px] xl:w-[780px] 2xl:w-[860px]">
                        <video
                            ref={videoRef}
                            className="absolute inset-0 h-full w-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="auto"
                            poster="/images/storefrontposter.png"
                            onPlaying={revealVideo}
                            aria-label="RazeStore storefront preview"
                        >
                            <source src="/videos/completestorefront.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        <div
                            className={`pointer-events-none absolute inset-0 bg-slate-100 transition-opacity duration-500 ${showPoster ? "opacity-100" : "opacity-0"
                                }`}
                            aria-hidden={!showPoster}
                        >
                            <img
                                src="/images/storefrontposter.png"
                                alt="RazeStore storefront preview"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}