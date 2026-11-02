"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const WHATSAPP_NUMBER = "254116103872";

const whatsappMessage = encodeURIComponent(
    "Hi, I'd like to learn more about RazeStore for my business.",
);

const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

const siteLinks = [
    { label: "Home", href: "/" },
    { label: "Demos", href: "/demos" },
    { label: "Pricing", href: "/pricing" },
    { label: "How It Works", href: "/#how-it-works" },
];

const demoLinks = [
    { label: "Online Shop", href: "/demos/online-shop" },
    { label: "M-Pesa Checkout", href: "/demos/mpesa" },
    { label: "Shop Management", href: "/demos/shop-management" },
    { label: "Business Insights", href: "/demos/business-insights" },
    { label: "Integrations", href: "/demos/integrations" },
];

export default function Footer() {
    const [year, setYear] = useState("");

    useEffect(() => {
        setYear(String(new Date().getFullYear()));
    }, []);

    return (
        <footer className="border-t border-blue-900 bg-blue-950 text-white">
            <div className="mx-auto w-full max-w-7xl px-6 py-8">
                <div className="grid grid-cols-1 gap-3 lg:grid-cols-12">
                    <div className="flex flex-col space-y-1.5 lg:col-span-4">
                        <div className="flex items-center gap-2">
                            <Image
                                src="/logo.jpeg"
                                alt=""
                                width={36}
                                height={36}
                                className="h-9 w-9 rounded-sm object-contain"
                            />
                            <span className="text-lg font-bold text-white">
                                RazeStore
                            </span>
                        </div>
                        <p className="max-w-sm text-sm text-slate-200">
                            A customizable e-commerce website built for Kenyan
                            electronics shop owners. Own your store, sell on your
                            own domain, and manage orders without touching code.
                        </p>
                    </div>

                    <nav
                        aria-label="Footer"
                        className="flex flex-col space-y-1.5 lg:col-span-2"
                    >
                        <h2 className="text-[11px] font-semibold uppercase text-slate-400">
                            Site
                        </h2>
                        <ul className="flex flex-col space-y-1">
                            {siteLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="inline-flex rounded px-1 py-1 text-sm text-slate-200 transition-colors hover:bg-blue-900 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <nav
                        aria-label="Demos"
                        className="flex flex-col space-y-1.5 lg:col-span-3"
                    >
                        <h2 className="text-[11px] font-semibold uppercase text-slate-400">
                            Demos
                        </h2>
                        <ul className="flex flex-col space-y-1">
                            {demoLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="inline-flex rounded px-1 py-1 text-sm text-slate-200 transition-colors hover:bg-blue-900 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="flex flex-col space-y-1.5 lg:col-span-3">
                        <h2 className="text-[11px] font-semibold uppercase text-slate-400">
                            Contact
                        </h2>
                        <p className="text-sm text-slate-200">
                            The fastest way to reach us is on WhatsApp. Ask about
                            pricing, demos, and what fits your shop.
                        </p>
                        <a
                            href={whatsappHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-fit items-center rounded px-1 py-1 text-sm font-semibold text-green-400 transition-colors hover:bg-blue-900 hover:text-green-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
                        >
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>

                <div className="mt-4 border-t border-blue-900 pt-4">
                    <div className="flex flex-col space-y-1.5">
                        <p className="text-xs text-slate-300">
                            Third-party integrations such as M-Pesa, email,
                            WhatsApp, AI, and social platforms depend on
                            configuration, credentials, and account access, and are
                            confirmed with you before they are enabled. Any
                            third-party fees are set and charged by those
                            providers.
                        </p>
                        <p className="text-xs text-slate-300">
                            ©{" "}
                            <span
                                suppressHydrationWarning
                                className="inline-block min-w-[2.5ch]"
                            >
                                {year}
                            </span>{" "}
                            RazeStore. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}