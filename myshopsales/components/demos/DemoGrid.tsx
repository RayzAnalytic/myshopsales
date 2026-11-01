"use client";

import { useMemo } from "react";
import DemoCard from "@/components/demos/DemoCard";
import type { DemoCardProps } from "@/components/demos/DemoCard";

export type DemoItem = DemoCardProps & {
    slug: string;
    category?: string;
    statusKey?: "available" | "requires-setup" | "confirm-scope";
    title?: string;
};

export type DemoGridColumnCount = 1 | 2 | 3 | 4;

export type DemoGridProps = {
    demos: DemoItem[];
    emptyMessage?: string;
    className?: string;
    columns?: DemoGridColumnCount;
    activeCategory?: string | null;
    activeStatus?: DemoItem["statusKey"] | null;
    searchQuery?: string;
    sortBy?: "default" | "title" | "category";
    onClearFilters?: () => void;
    showCount?: boolean;
};

function matchesSearch(item: DemoItem, query: string) {
    if (!query.trim()) return true;
    const q = query.trim().toLowerCase();
    const haystack = [
        item.slug,
        item.title ?? "",
        item.category ?? "",
        item.statusKey ?? "",
    ]
        .join(" ")
        .toLowerCase();
    return haystack.includes(q);
}

function sortItems(items: DemoItem[], sortBy: NonNullable<DemoGridProps["sortBy"]>) {
    if (sortBy === "default") return items;
    const copy = [...items];
    if (sortBy === "title") {
        copy.sort((a, b) =>
            (a.title ?? a.slug).localeCompare(b.title ?? b.slug, undefined, {
                sensitivity: "base",
            }),
        );
    } else if (sortBy === "category") {
        copy.sort((a, b) => {
            const catCompare = (a.category ?? "").localeCompare(
                b.category ?? "",
                undefined,
                { sensitivity: "base" },
            );
            if (catCompare !== 0) return catCompare;
            return (a.title ?? a.slug).localeCompare(b.title ?? b.slug, {
                sensitivity: "base",
            });
        });
    }
    return copy;
}

function getColumnClasses(columns: DemoGridColumnCount) {
    switch (columns) {
        case 1:
            return "grid-cols-1";
        case 2:
            return "grid-cols-1 md:grid-cols-2";
        case 4:
            return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";
        case 3:
        default:
            return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
    }
}

export default function DemoGrid({
    demos,
    emptyMessage = "No demos are available right now.",
    className = "",
    columns = 3,
    activeCategory = null,
    activeStatus = null,
    searchQuery = "",
    sortBy = "default",
    onClearFilters,
    showCount = false,
}: DemoGridProps) {
    const visible = useMemo(() => {
        const filtered = demos.filter((item) => {
            if (activeCategory && item.category !== activeCategory) {
                return false;
            }
            if (activeStatus && item.statusKey !== activeStatus) {
                return false;
            }
            if (!matchesSearch(item, searchQuery)) {
                return false;
            }
            return true;
        });
        return sortItems(filtered, sortBy);
    }, [demos, activeCategory, activeStatus, searchQuery, sortBy]);

    const hasFilters = Boolean(
        activeCategory || activeStatus || searchQuery.trim(),
    );
    const total = demos.length;

    if (demos.length === 0) {
        return (
            <div
                className={`rounded border border-slate-200 bg-slate-50 p-4 ${className}`.trim()}
                role="status"
                aria-live="polite"
            >
                <p className="text-sm text-slate-700">{emptyMessage}</p>
            </div>
        );
    }

    if (visible.length === 0) {
        return (
            <div
                className={`rounded border border-slate-200 bg-slate-50 p-4 ${className}`.trim()}
                role="status"
                aria-live="polite"
            >
                <p className="text-sm text-slate-700">
                    No demos match the current filters.
                </p>
                {onClearFilters ? (
                    <button
                        type="button"
                        onClick={onClearFilters}
                        className="mt-2 inline-flex items-center justify-center rounded border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-blue-950 transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950"
                    >
                        Clear filters
                    </button>
                ) : null}
            </div>
        );
    }

    return (
        <div className={className}>
            {showCount ? (
                <p
                    className="mb-2 text-xs text-slate-600"
                    aria-live="polite"
                >
                    Showing {visible.length} of {total} demo
                    {total === 1 ? "" : "s"}
                    {hasFilters ? " (filtered)" : ""}
                </p>
            ) : null}

            <ul
                className={`grid gap-3 ${getColumnClasses(columns)}`.trim()}
                aria-label={
                    hasFilters ? "Filtered demo results" : "Available demos"
                }
            >
                {visible.map(({ slug, ...cardProps }, index) => (
                    <li key={`${slug}-${index}`} className="h-full">
                        <DemoCard {...cardProps} />
                    </li>
                ))}
            </ul>
        </div>
    );
}