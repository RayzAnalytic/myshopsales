"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { NavItem } from "@/components/Navbar";

type MobileMenuProps = {
    items: NavItem[];
    whatsappHref: string;
};

export default function MobileMenu({ items, whatsappHref }: MobileMenuProps) {
    const [open, setOpen] = useState(false);
    const [expanded, setExpanded] = useState<number | null>(null);
    const triggerRef = useRef<HTMLButtonElement | null>(null);
    const panelRef = useRef<HTMLDivElement | null>(null);
    const closeRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        if (!open) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        function handleKey(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setOpen(false);
                triggerRef.current?.focus();
            }
        }

        document.addEventListener("keydown", handleKey);

        const focusTimer = window.setTimeout(() => {
            closeRef.current?.focus();
        }, 0);

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener("keydown", handleKey);
            window.clearTimeout(focusTimer);
        };
    }, [open]);

    function openMenu() {
        setExpanded(null);
        setOpen(true);
    }

    function closeMenu() {
        setOpen(false);
        triggerRef.current?.focus();
    }

    function closeAfterNavigation() {
        setOpen(false);
        setExpanded(null);
    }

    function toggleGroup(index: number) {
        setExpanded((current) => (current === index ? null : index));
    }

    function handlePanelKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
        if (event.key !== "Tab") return;
        const panel = panelRef.current;
        if (!panel) return;

        const focusables = panel.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (focusables.length === 0) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement as HTMLElement | null;

        if (event.shiftKey) {
            if (active === first || !active || !panel.contains(active)) {
                event.preventDefault();
                last.focus();
            }
        } else {
            if (active === last || !active || !panel.contains(active)) {
                event.preventDefault();
                first.focus();
            }
        }
    }

    return (
        <>
            <button
                ref={triggerRef}
                type="button"
                aria-expanded={open}
                aria-controls="mobile-menu-panel"
                aria-label="Open menu"
                onClick={openMenu}
                className="inline-flex items-center justify-center rounded px-2 py-2 text-white transition-colors hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
                <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                >
                    <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            {open ? (
                <div className="fixed inset-0 z-50 lg:hidden">
                    <div
                        aria-hidden="true"
                        onClick={closeMenu}
                        className="absolute inset-0 bg-slate-950/60"
                    />

                    <div
                        id="mobile-menu-panel"
                        ref={panelRef}
                        role="dialog"
                        aria-modal="true"
                        aria-label="Mobile navigation"
                        onKeyDown={handlePanelKeyDown}
                        className="absolute inset-y-0 right-0 flex h-full w-full max-w-sm flex-col overflow-y-auto border-l border-blue-900 bg-blue-950"
                    >
                        <div className="flex items-center justify-between gap-2 border-b border-blue-900 px-4 py-2">
                            <Link
                                href="/"
                                onClick={closeAfterNavigation}
                                className="flex items-center gap-2 rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                <Image
                                    src="/logo.jpeg"
                                    alt="RazeStore logo"
                                    width={32}
                                    height={32}
                                    className="h-8 w-8 rounded object-contain"
                                />
                                <span className="text-base font-bold text-white">
                                    RazeStore
                                </span>
                            </Link>
                            <button
                                ref={closeRef}
                                type="button"
                                onClick={closeMenu}
                                aria-label="Close menu"
                                className="inline-flex items-center justify-center rounded px-2 py-2 text-slate-200 transition-colors hover:bg-blue-900 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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

                        <nav aria-label="Mobile" className="flex flex-col px-4 py-2">
                            <ul className="flex flex-col space-y-1">
                                {items.map((item, index) => {
                                    if (!item.children || item.children.length === 0) {
                                        return (
                                            <li key={item.href}>
                                                <Link
                                                    href={item.href}
                                                    onClick={closeAfterNavigation}
                                                    className="block rounded px-2 py-1.5 text-sm font-medium text-slate-200 transition-colors hover:bg-blue-900 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                                >
                                                    {item.label}
                                                </Link>
                                            </li>
                                        );
                                    }

                                    const isExpanded = expanded === index;
                                    const triggerId = `mobile-nav-group-trigger-${index}`;
                                    const panelId = `mobile-nav-group-panel-${index}`;

                                    return (
                                        <li key={item.href}>
                                            <button
                                                id={triggerId}
                                                type="button"
                                                aria-expanded={isExpanded}
                                                aria-controls={panelId}
                                                onClick={() => toggleGroup(index)}
                                                className="flex w-full items-center justify-between gap-2 rounded px-2 py-1.5 text-left text-sm font-medium text-slate-200 transition-colors hover:bg-blue-900 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                            >
                                                <span>{item.label}</span>
                                                <svg
                                                    aria-hidden="true"
                                                    viewBox="0 0 20 20"
                                                    className={`h-4 w-4 text-slate-400 transition-transform ${isExpanded ? "rotate-180" : ""
                                                        }`}
                                                >
                                                    <path
                                                        fill="currentColor"
                                                        d="M5.5 7.5a1 1 0 0 1 1.4 0L10 10.6l3.1-3.1a1 1 0 1 1 1.4 1.4l-3.8 3.8a1 1 0 0 1-1.4 0L5.5 8.9a1 1 0 0 1 0-1.4Z"
                                                    />
                                                </svg>
                                            </button>

                                            {isExpanded ? (
                                                <ul
                                                    id={panelId}
                                                    aria-labelledby={triggerId}
                                                    className="mt-1 flex flex-col space-y-1 border-l border-blue-900 pl-3"
                                                >
                                                    {item.children.map((child) => (
                                                        <li key={child.href}>
                                                            <Link
                                                                href={child.href}
                                                                onClick={closeAfterNavigation}
                                                                className="block rounded px-2 py-1.5 text-sm text-slate-200 transition-colors hover:bg-blue-900 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                                            >
                                                                <span className="block font-medium text-white">
                                                                    {child.label}
                                                                </span>
                                                                {child.description ? (
                                                                    <span className="mt-0.5 block text-xs text-slate-300">
                                                                        {child.description}
                                                                    </span>
                                                                ) : null}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            ) : null}
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>

                        <div className="mt-auto border-t border-blue-900 px-4 py-3">
                            <a
                                href={whatsappHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={closeAfterNavigation}
                                className="inline-flex w-full items-center justify-center rounded bg-green-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
                            >
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
}