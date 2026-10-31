import Image from "next/image";
import Link from "next/link";

export type DemoCardProps = {
    title: string;
    description: string;
    thumbnailSrc: string;
    thumbnailAlt: string;
    href: string;
    status?: string;
    category?: string;
    className?: string;
    videoSrc?: string;
    posterSrc?: string;
};

export default function DemoCard({
    title,
    description,
    thumbnailSrc,
    thumbnailAlt,
    href,
    status,
    category,
    className = "",
    videoSrc = "",
    posterSrc = "",
}: DemoCardProps) {
    const hasVideo = Boolean(videoSrc);
    const hasThumbnail = Boolean(thumbnailSrc);

    return (
        <Link
            href={href}
            className={`group flex h-full flex-col overflow-hidden rounded border border-slate-200 bg-white transition-colors hover:border-blue-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950 ${className}`.trim()}
        >
            <div className="relative aspect-video w-full flex-none bg-slate-50">
                {hasVideo ? (
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        poster={posterSrc || undefined}
                        aria-hidden="true"
                        tabIndex={-1}
                        className="h-full w-full object-cover"
                    >
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                ) : hasThumbnail ? (
                    <Image
                        src={thumbnailSrc}
                        alt={thumbnailAlt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center p-4">
                        <span className="text-center text-xs text-slate-500">
                            Preview not yet supplied
                        </span>
                    </div>
                )}
            </div>

            <div className="flex flex-1 flex-col space-y-2 p-4">
                {category || status ? (
                    <div className="flex flex-wrap items-center gap-3">
                        {category ? (
                            <span className="text-xs font-semibold uppercase text-slate-500">
                                {category}
                            </span>
                        ) : null}
                        {status ? (
                            <span className="inline-flex items-center rounded-sm border border-slate-300 bg-slate-50 px-2 py-0.5 text-xs font-semibold text-slate-700">
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
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                        →
                    </span>
                </span>
            </div>
        </Link>
    );
}