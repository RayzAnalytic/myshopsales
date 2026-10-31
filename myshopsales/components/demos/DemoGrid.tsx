import DemoCard from "@/components/demos/DemoCard";
import type { DemoCardProps } from "@/components/demos/DemoCard";

export type DemoItem = DemoCardProps & {
    slug: string;
};

type DemoGridProps = {
    demos: DemoItem[];
    emptyMessage?: string;
    className?: string;
};

export default function DemoGrid({
    demos,
    emptyMessage = "No demos are available right now.",
    className = "",
}: DemoGridProps) {
    if (demos.length === 0) {
        return (
            <div
                className={`rounded border border-slate-200 bg-slate-50 p-4 ${className}`.trim()}
            >
                <p className="text-sm text-slate-700">{emptyMessage}</p>
            </div>
        );
    }

    return (
        <ul
            className={`grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 ${className}`.trim()}
        >
            {demos.map(({ slug, ...cardProps }) => (
                <li key={slug} className="h-full">
                    <DemoCard {...cardProps} />
                </li>
            ))}
        </ul>
    );
}