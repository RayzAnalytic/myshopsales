"use client";

import { useState } from "react";

export type VideoViewerProps = {
    videoSrc: string;
    videoType?: string;
    posterSrc?: string;
    alt: string;
    title?: string;
    description?: string;
    caption?: string;
    className?: string;
};

export default function VideoViewer({
    videoSrc,
    videoType = "video/mp4",
    posterSrc,
    alt,
    title,
    description,
    caption,
    className = "",
}: VideoViewerProps) {
    const [hasError, setHasError] = useState(false);

    const hasSource = Boolean(videoSrc);
    const showFallback = !hasSource || hasError;

    return (
        <div className={`flex flex-col space-y-1.5 ${className}`.trim()}>
            <div className="relative aspect-video w-full overflow-hidden rounded border border-slate-200 bg-slate-900">
                {showFallback ? (
                    <div className="flex h-full w-full items-center justify-center p-3">
                        <div className="flex flex-col items-center space-y-1.5 text-center">
                            <span className="text-sm font-semibold text-slate-100">
                                {hasSource ? "Video could not be loaded" : "Video not available"}
                            </span>
                            <span className="max-w-sm text-xs text-slate-300">
                                {hasSource
                                    ? "The video source could not be played in this browser. Please try again later."
                                    : "A recording has not been supplied for this section yet."}
                            </span>
                        </div>
                    </div>
                ) : (
                    <video
                        className="h-full w-full object-contain"
                        controls
                        playsInline
                        preload="metadata"
                        poster={posterSrc || undefined}
                        aria-label={alt}
                        onError={() => setHasError(true)}
                    >
                        <source src={videoSrc} type={videoType} />
                        Your browser does not support the video tag.
                    </video>
                )}
            </div>

            {title ? (
                <h3 className="text-base font-semibold text-blue-950">{title}</h3>
            ) : null}

            {description ? (
                <p className="text-sm text-slate-700">{description}</p>
            ) : null}

            {caption ? (
                <p className="text-xs text-slate-600">{caption}</p>
            ) : null}
        </div>
    );
}