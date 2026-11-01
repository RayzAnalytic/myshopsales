"use client";

import { useCallback, useRef, useState } from "react";

export type VideoSource = {
    src: string;
    type?: string;
};

export type VideoTrack = {
    src: string;
    kind?: "subtitles" | "captions" | "descriptions" | "chapters" | "metadata";
    srcLang: string;
    label: string;
    default?: boolean;
};

export type VideoViewerProps = {
    videoSrc?: string;
    videoType?: string;
    sources?: VideoSource[];
    tracks?: VideoTrack[];
    posterSrc?: string;
    alt: string;
    title?: string;
    description?: string;
    caption?: string;
    className?: string;
    autoPlay?: boolean;
    muted?: boolean;
    loop?: boolean;
    controls?: boolean;
    playsInline?: boolean;
    preload?: "none" | "metadata" | "auto";
    aspectRatio?: "video" | "square" | "wide" | "auto";
    onEnded?: () => void;
    onPlay?: () => void;
    onPause?: () => void;
};

export default function VideoViewer({
    videoSrc,
    videoType = "video/mp4",
    sources,
    tracks = [],
    posterSrc,
    alt,
    title,
    description,
    caption,
    className = "",
    autoPlay = false,
    muted = false,
    loop = false,
    controls = true,
    playsInline = true,
    preload = "metadata",
    aspectRatio = "video",
    onEnded,
    onPlay,
    onPause,
}: VideoViewerProps) {
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [posterBroken, setPosterBroken] = useState(false);
    const [retryKey, setRetryKey] = useState(0);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const resolvedSources: VideoSource[] = (() => {
        if (sources && sources.length > 0) {
            return sources.filter((s) => Boolean(s.src));
        }
        if (videoSrc) {
            return [{ src: videoSrc, type: videoType }];
        }
        return [];
    })();

    const hasSource = resolvedSources.length > 0;
    const showFallback = !hasSource || hasError;

    const aspectClass =
        aspectRatio === "square"
            ? "aspect-square"
            : aspectRatio === "wide"
                ? "aspect-[21/9]"
                : aspectRatio === "auto"
                    ? ""
                    : "aspect-video";

    const retry = useCallback(() => {
        setHasError(false);
        setIsLoading(true);
        setRetryKey((k) => k + 1);
        const el = videoRef.current;
        if (el) {
            try {
                el.load();
            } catch {
                // ignore
            }
        }
    }, []);

    return (
        <div className={`flex flex-col space-y-1.5 ${className}`.trim()}>
            <div
                className={`relative ${aspectClass} w-full overflow-hidden rounded border border-slate-200 bg-slate-900`}
            >
                {showFallback ? (
                    <div className="flex h-full w-full items-center justify-center p-3">
                        <div className="flex flex-col items-center space-y-2 text-center">
                            <span className="text-sm font-semibold text-slate-100">
                                {hasSource
                                    ? "Video could not be loaded"
                                    : "Video not available"}
                            </span>
                            <span className="max-w-sm text-xs text-slate-300">
                                {hasSource
                                    ? "The video source could not be played in this browser. Please try again later."
                                    : "A recording has not been supplied for this section yet."}
                            </span>
                            {hasSource ? (
                                <button
                                    type="button"
                                    onClick={retry}
                                    className="mt-1 inline-flex items-center justify-center rounded border border-slate-400 bg-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-100 transition-colors hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    Try again
                                </button>
                            ) : null}
                        </div>
                    </div>
                ) : (
                    <>
                        {isLoading ? (
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-slate-900/60"
                            >
                                <svg
                                    className="h-8 w-8 animate-spin text-slate-100"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <circle
                                        cx="12"
                                        cy="12"
                                        r="9"
                                        stroke="currentColor"
                                        strokeOpacity="0.25"
                                        strokeWidth="3"
                                    />
                                    <path
                                        d="M21 12a9 9 0 0 0-9-9"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                    />
                                </svg>
                                <span className="sr-only">Loading video</span>
                            </div>
                        ) : null}

                        <video
                            key={retryKey}
                            ref={videoRef}
                            className="h-full w-full object-contain"
                            controls={controls}
                            playsInline={playsInline}
                            preload={preload}
                            autoPlay={autoPlay}
                            muted={muted || autoPlay}
                            loop={loop}
                            poster={
                                posterSrc && !posterBroken
                                    ? posterSrc
                                    : undefined
                            }
                            aria-label={alt}
                            onLoadedData={() => setIsLoading(false)}
                            onCanPlay={() => setIsLoading(false)}
                            onWaiting={() => setIsLoading(true)}
                            onPlaying={() => setIsLoading(false)}
                            onError={() => {
                                setHasError(true);
                                setIsLoading(false);
                            }}
                            onEnded={onEnded}
                            onPlay={onPlay}
                            onPause={onPause}
                        >
                            {resolvedSources.map((source) => (
                                <source
                                    key={`${source.src}-${source.type ?? ""}`}
                                    src={source.src}
                                    type={source.type ?? videoType}
                                    onError={() => setHasError(true)}
                                />
                            ))}
                            {tracks.map((track) => (
                                <track
                                    key={`${track.src}-${track.srcLang}`}
                                    src={track.src}
                                    kind={track.kind ?? "subtitles"}
                                    srcLang={track.srcLang}
                                    label={track.label}
                                    default={track.default}
                                />
                            ))}
                            Your browser does not support the video tag.
                        </video>
                    </>
                )}
            </div>

            {title ? (
                <h3 className="text-base font-semibold text-blue-950">
                    {title}
                </h3>
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