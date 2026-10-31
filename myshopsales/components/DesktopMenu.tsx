"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { NavItem } from "@/components/Navbar";

type DesktopMenuProps = {
    items: NavItem[];
};

export default function DesktopMenu({ items }: DesktopMenuProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
    const panelRefs = useRef<Array<HTMLDivElement | null>>([]);

    const closeAll = useCallback(() => {
        setOpenIndex(null);
    }, []);

    useEffect(() => {
        if (openIndex === null) return;

        function handlePointerDown(event: MouseEvent) {
            if (!menuRef.current) return;
            if (!menuRef.current.contains(event.target as Node)) {
                closeAll();
            }
        }

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key !== "Escape") return;
            const trigger = triggerRefs.current[openIndex as number];
            closeAll();
            trigger?.focus();
        }

        document.addEventListener("mousedown", handlePointerDown);
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("mousedown", handlePointerDown);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [openIndex, closeAll]);

    function toggle(index: number) {
        setOpenIndex((current) => (current === index ? null : index));
    }

    function focusFirstItem(index: number) {
        const panel = panelRefs.current[index];
        if (!panel) return;
        const first = panel.querySelector<HTMLAnchorElement>("a[href]");
        first?.focus();
    }

    function focusLastItem(index: number) {
        const panel = panelRefs.current[index];
        if (!panel) return;
        const links = panel.querySelectorAll<HTMLAnchorElement>("a[href]");
        const last = links[links.length - 1];
        last?.focus();
    }

    function handleTriggerKeyDown(
        event: React.KeyboardEvent<HTMLButtonElement>,
        index: number,
    ) {
        if (event.key === "ArrowDown") {
            event.preventDefault();
            if (openIndex !== index) {
                setOpenIndex(index);
            }
            window.requestAnimationFrame(() => focusFirstItem(index));
            return;
        }
        if (event.key === "ArrowUp") {
            event.preventDefault();
            if (openIndex !== index) {
                setOpenIndex(index);
            }
            window.requestAnimationFrame(() => focusLastItem(index));
            return;
        }
        if (event.key === "Enter" || event.key === " " || event.key === "Spacebar") {
            return;
        }
        if (event.key === "Tab" && openIndex === index) {
            closeAll();
        }
    }

    function handlePanelKeyDown(
        event: React.KeyboardEvent<HTMLDivElement>,
        index: number,
    ) {
        if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
        event.preventDefault();

        const panel = panelRefs.current[index];
        if (!panel) return;
        const links = Array.from(panel.querySelectorAll<HTMLAnchorElement>("a[href]"));
        if (links.length === 0) return;

        const currentIndex = links.indexOf(document.activeElement as HTMLAnchorElement);
        let nextIndex = 0;
        if (event.key === "ArrowDown") {
            nextIndex = currentIndex < links.length - 1 ? currentIndex + 1 : 0;
        } else {
            nextIndex = currentIndex > 0 ? currentIndex - 1 : links.length - 1;
        }
        links[nextIndex]?.focus();
    }

    function handleWrapperBlur(
        event: React.FocusEvent<HTMLDivElement>,
        index: number,
    ) {
        if (openIndex !== index) return;
        const next = event.relatedTarget as Node | null;
        if (next && event.currentTarget.contains(next)) return;

        window.setTimeout(() => {
            const trigger = triggerRefs.current[index];
            const panel = panelRefs.current[index];
            if (trigger && trigger.contains(document.activeElement)) return;
            if (panel && panel.contains(document.activeElement)) return;
            setOpenIndex((current) => (current === index ? null : current));
        }, 0);
    }

    return (
        <div ref={menuRef}>
            <ul className="flex items-center gap-1">
                {items.map((item, index) => {
                    if (!item.children || item.children.length === 0) {
                        return (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className="inline-flex items-center rounded px-2 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-blue-900 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        );
                    }

                    const isOpen = openIndex === index;
                    const triggerId = `nav-trigger-${index}`;
                    const panelId = `nav-panel-${index}`;

                    return (
                        <li
                            key={item.href}
                            className="relative"
                            onBlur={(event) => handleWrapperBlur(event, index)}
                        >
                            <button
                                id={triggerId}
                                ref={(element) => {
                                    triggerRefs.current[index] = element;
                                }}
                                type="button"
                                aria-expanded={isOpen}
                                aria-haspopup="true"
                                aria-controls={panelId}
                                onClick={() => toggle(index)}
                                onKeyDown={(event) => handleTriggerKeyDown(event, index)}
                                className="inline-flex items-center gap-1 rounded px-2 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-blue-900 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                <span>{item.label}</span>
                                <svg
                                    aria-hidden="true"
                                    viewBox="0 0 20 20"
                                    className={`h-4 w-4 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""
                                        }`}
                                >
                                    <path
                                        fill="currentColor"
                                        d="M5.5 7.5a1 1 0 0 1 1.4 0L10 10.6l3.1-3.1a1 1 0 1 1 1.4 1.4l-3.8 3.8a1 1 0 0 1-1.4 0L5.5 8.9a1 1 0 0 1 0-1.4Z"
                                    />
                                </svg>
                            </button>

                            {isOpen ? (
                                <div
                                    id={panelId}
                                    ref={(element) => {
                                        panelRefs.current[index] = element;
                                    }}
                                    aria-labelledby={triggerId}
                                    onKeyDown={(event) => handlePanelKeyDown(event, index)}
                                    className="absolute left-0 top-full z-50 mt-1 w-72 rounded border border-slate-200 bg-white p-2 shadow-lg"
                                >
                                    <ul className="flex flex-col space-y-1">
                                        {item.children.map((child) => (
                                            <li key={child.href}>
                                                <Link
                                                    href={child.href}
                                                    onClick={closeAll}
                                                    className="block rounded px-2 py-1.5 text-sm text-slate-800 transition-colors hover:bg-slate-50 focus-visible:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950"
                                                >
                                                    <span className="block font-medium text-blue-950">
                                                        {child.label}
                                                    </span>
                                                    {child.description ? (
                                                        <span className="mt-0.5 block text-xs text-slate-600">
                                                            {child.description}
                                                        </span>
                                                    ) : null}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : null}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}