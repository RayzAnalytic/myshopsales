import type { Styles } from "@react-pdf/renderer";

const colors: Record<string, string> = {
    "bg-blue-950": "#172554",
    "bg-blue-900": "#1e3a8a",
    "bg-white": "#ffffff",
    "bg-slate-50": "#f8fafc",
    "bg-slate-100": "#f1f5f9",
    "bg-slate-200": "#e2e8f0",
    "text-white": "#ffffff",
    "text-slate-200": "#e2e8f0",
    "text-slate-300": "#cbd5e1",
    "text-slate-400": "#94a3b8",
    "text-slate-500": "#64748b",
    "text-slate-600": "#475569",
    "text-slate-700": "#334155",
    "text-blue-950": "#172554",
    "text-green-600": "#16a34a",
    "text-green-700": "#15803d",
    "border-slate-200": "#e2e8f0",
    "border-slate-300": "#cbd5e1",
    "border-blue-800": "#1e40af",
    "border-blue-900": "#1e3a8a",
    "border-green-600": "#16a34a",
};

const fonts: Record<string, number> = {
    "text-[8px]": 8,
    "text-[9px]": 9,
    "text-[10px]": 10,
    "text-[11px]": 11,
    "text-[12px]": 12,
    "text-[13px]": 13,
    "text-xs": 9,
    "text-sm": 10,
    "text-base": 11,
    "text-lg": 13,
    "text-xl": 15,
    "text-2xl": 18,
    "text-3xl": 22,
    "text-4xl": 26,
    "text-5xl": 32,
};


const weights: Record<string, number> = {
    "font-normal": 400,
    "font-medium": 500,
    "font-semibold": 600,
    "font-bold": 700,
};

const spacing: Record<string, number> = {
    "p-0": 0, "p-1": 2, "p-2": 4, "p-3": 6, "p-4": 8, "p-5": 10, "p-6": 12, "p-8": 16, "p-10": 20, "p-12": 24,
    "px-0": 0, "px-1": 2, "px-2": 4, "px-3": 6, "px-4": 8, "px-5": 10, "px-6": 12, "px-8": 16, "px-10": 20, "px-11": 22, "px-12": 24,
    "py-0": 0, "py-1": 2, "py-2": 4, "py-3": 6, "py-4": 8, "py-5": 10, "py-6": 12, "py-8": 16, "py-10": 20, "py-12": 24,
    "pt-0": 0, "pt-1": 2, "pt-2": 4, "pt-3": 6, "pt-4": 8, "pt-6": 12, "pt-8": 16,
    "pb-0": 0, "pb-1": 2, "pb-2": 4, "pb-3": 6, "pb-4": 8, "pb-6": 12, "pb-8": 16, "pb-10": 20,
    "mt-0": 0, "mt-1": 2, "mt-2": 4, "mt-3": 6, "mt-4": 8, "mt-6": 12, "mt-8": 16, "mt-10": 20, "mt-12": 24,
    "mb-0": 0, "mb-1": 2, "mb-2": 4, "mb-3": 6, "mb-4": 8, "mb-6": 12, "mb-8": 16, "mb-10": 20,
    "gap-1": 2, "gap-2": 4, "gap-3": 6, "gap-4": 8, "gap-5": 10, "gap-6": 12, "gap-8": 16,
};

const sizes: Record<string, number> = {
    "w-6": 12, "w-8": 16, "w-10": 20, "w-12": 24, "w-16": 32, "w-20": 40,
    "w-24": 48, "w-32": 64, "w-40": 80, "w-48": 96, "w-56": 112, "w-64": 128,
    "h-6": 12, "h-8": 16, "h-10": 20, "h-12": 24, "h-16": 32, "h-20": 40,
    "h-24": 48, "h-32": 64, "h-40": 80, "h-48": 96, "h-56": 112, "h-64": 128,
    "h-80": 160, "h-96": 192,
};

export function tw(classNames: string): Styles[string] {
    const style: Record<string, unknown> = {};
    const tokens = classNames.split(/\s+/).filter(Boolean);

    for (const token of tokens) {
        // Colors
        if (colors[token]) {
            if (token.startsWith("bg-")) style.backgroundColor = colors[token];
            else if (token.startsWith("text-")) style.color = colors[token];
            else if (token.startsWith("border-")) style.borderColor = colors[token];
            continue;
        }

        // Font size — only text-* keys
        if (fonts[token] !== undefined) {
            style.fontSize = fonts[token];
            continue;
        }


        // Font weight
        if (weights[token] !== undefined) {
            style.fontWeight = weights[token];
            continue;
        }

        // Text transform
        if (token === "uppercase") {
            style.textTransform = "uppercase";
            continue;
        }
        if (token === "lowercase") {
            style.textTransform = "lowercase";
            continue;
        }
        if (token === "capitalize") {
            style.textTransform = "capitalize";
            continue;
        }

        // Spacing presets
        if (spacing[token] !== undefined) {
            const [prefix] = token.split("-");
            const value = spacing[token];
            if (prefix === "p") style.padding = value;
            else if (prefix === "px") style.paddingHorizontal = value;
            else if (prefix === "py") style.paddingVertical = value;
            else if (prefix === "pt") style.paddingTop = value;
            else if (prefix === "pb") style.paddingBottom = value;
            else if (prefix === "mt") style.marginTop = value;
            else if (prefix === "mb") style.marginBottom = value;
            else if (prefix === "gap") style.gap = value;
            continue;
        }

        // Width/height presets
        if (sizes[token] !== undefined) {
            const [axis] = token.split("-");
            if (axis === "w") style.width = sizes[token];
            else style.height = sizes[token];
            continue;
        }

        // Width/height full
        if (token === "w-full") { style.width = "100%"; continue; }
        if (token === "h-full") { style.height = "100%"; continue; }

        // Arbitrary values: w-[240px], w-[48%], p-[12px], etc.
        const arbMatch = token.match(/^([a-z]+)-\[(\d+(?:\.\d+)?)(px|%)\]$/);
        if (arbMatch) {
            const [, prefix, raw, unit] = arbMatch;
            const num = parseFloat(raw);
            const val: number | string = unit === "%" ? `${raw}%` : num;

            if (prefix === "w") style.width = val;
            else if (prefix === "h") style.height = val;
            else if (prefix === "p") style.padding = num;
            else if (prefix === "px") style.paddingHorizontal = num;
            else if (prefix === "py") style.paddingVertical = num;
            else if (prefix === "pt") style.paddingTop = num;
            else if (prefix === "pb") style.paddingBottom = num;
            else if (prefix === "mt") style.marginTop = num;
            else if (prefix === "mb") style.marginBottom = num;
            continue;
        }

        // Layout primitives
        if (token === "flex") style.display = "flex";
        else if (token === "flex-row") style.flexDirection = "row";
        else if (token === "flex-col") style.flexDirection = "column";
        else if (token === "flex-1") {
            style.flexGrow = 1;
            style.flexShrink = 1;
            style.flexBasis = "0%";
            style.minWidth = 0;
        }
        else if (token === "items-center") style.alignItems = "center";
        else if (token === "items-start") style.alignItems = "flex-start";
        else if (token === "items-end") style.alignItems = "flex-end";
        else if (token === "text-center") style.textAlign = "center";
        else if (token === "text-left") style.textAlign = "left";
        else if (token === "text-right") style.textAlign = "right";
        else if (token === "justify-center") style.justifyContent = "center";
        else if (token === "justify-between") style.justifyContent = "space-between";
        else if (token === "justify-end") style.justifyContent = "flex-end";
        else if (token === "border") style.borderWidth = 1;
        else if (token === "border-t") style.borderTopWidth = 1;
        else if (token === "border-b") style.borderBottomWidth = 1;
        else if (token === "border-l") style.borderLeftWidth = 1;
        else if (token === "border-r") style.borderRightWidth = 1;
    }

    return style as Styles[string];
}