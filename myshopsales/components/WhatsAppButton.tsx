import type { ReactNode } from "react";

const WHATSAPP_NUMBER = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").replace(
    /\D/g,
    "0116103872",
);

const DEFAULT_MESSAGE = "Hi, I'd like to learn more about RazeStore.";

type WhatsAppButtonProps = {
    message?: string;
    variant?: "primary" | "inline";
    label?: string;
    children?: ReactNode;
    className?: string;
};

function buildWhatsAppHref(message: string) {
    const text = encodeURIComponent(message);
    return WHATSAPP_NUMBER
        ? `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
        : `https://wa.me/?text=${text}`;
}

export default function WhatsAppButton({
    message = DEFAULT_MESSAGE,
    variant = "primary",
    label = "Chat with RazeStore on WhatsApp",
    children,
    className = "",
}: WhatsAppButtonProps) {
    const href = buildWhatsAppHref(message);
    const hasText = Boolean(children);

    const base =
        "inline-flex items-center justify-center rounded-full font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2";

    const variants: Record<"primary" | "inline", string> = {
        primary: hasText
            ? "gap-2 bg-green-600 px-4 py-2 text-sm text-white hover:bg-green-700 focus-visible:outline-green-700"
            : "bg-green-600 p-3 text-white shadow-lg hover:bg-green-700 focus-visible:outline-green-700",
        inline:
            "gap-2 px-2 py-2 text-sm text-green-700 hover:bg-slate-50 hover:text-green-800 focus-visible:outline-green-700",
    };

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`${base} ${variants[variant]} ${className}`.trim()}
        >
            <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className={variant === "primary" ? "h-7 w-7" : "h-7 w-7"}
                fill="currentColor"
            >
                <path d="M20.52 3.48A11.79 11.79 0 0 0 12.02 0C5.4 0 .02 5.38.02 12c0 2.11.55 4.16 1.6 5.97L.02 24l6.18-1.62A11.94 11.94 0 0 0 12.02 24c6.62 0 12-5.38 12-12 0-3.2-1.25-6.21-3.5-8.52ZM12.02 21.9a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.67.96.98-3.58-.23-.37A9.86 9.86 0 0 1 2.14 12c0-5.45 4.43-9.88 9.88-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.98c0 5.45-4.43 9.9-9.88 9.9Zm5.42-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
            </svg>
            {hasText ? <span>{children}</span> : null}
        </a>
    );
}