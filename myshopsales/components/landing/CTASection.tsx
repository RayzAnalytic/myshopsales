"use client";

import { useState, FormEvent, ChangeEvent, ReactNode } from "react";

const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").replace(/\D/g, "");
const whatsappMessage = encodeURIComponent("Hi, I'd like to discuss getting a RazeStore online shop for my business.");
const whatsappHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
    : `https://wa.me/?text=${whatsappMessage}`;

const businessTypes = [
    "Electronics",
    "Fashion & Apparel",
    "Groceries",
    "Home & Living",
    "Beauty & Wellness",
    "Other",
];

const inputCls =
    "w-full rounded border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 transition focus:border-blue-950 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-950/10";

type Variant = "full" | "compact";

interface CTASectionProps {
    variant?: Variant;
    className?: string;
}

interface FormState {
    fullName: string;
    businessName: string;
    phone: string;
    businessType: string;
    message: string;
}

const emptyForm: FormState = {
    fullName: "",
    businessName: "",
    phone: "",
    businessType: "Electronics",
    message: "",
};

export default function CTASection({ variant = "full", className = "" }: CTASectionProps) {
    const [form, setForm] = useState<FormState>(emptyForm);
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [error, setError] = useState("");

    const isCompact = variant === "compact";

    const update =
        (field: keyof FormState) =>
            (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
                setForm((f) => ({ ...f, [field]: e.target.value }));
            };

    const submit = async (e: FormEvent) => {
        e.preventDefault();
        setError("");

        if (!form.fullName.trim()) {
            setError("Please enter your full name.");
            return;
        }
        if (!form.businessName.trim()) {
            setError("Please enter your business name.");
            return;
        }
        if (!form.phone.trim()) {
            setError("Please enter a phone number or WhatsApp contact.");
            return;
        }

        setStatus("submitting");

        try {
            const res = await fetch("/api/enquiries", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...form,
                    submittedAt: new Date().toISOString(),
                    source: isCompact ? "pricing" : "homepage",
                }),
            });
            if (!res.ok) throw new Error("Submission failed");
            setStatus("success");
        } catch {
            setStatus("error");
            setError("Something went wrong sending your message. Please try WhatsApp below.");
        }
    };

    return (
        <section
            className={`border-t border-slate-200 bg-slate-50 px-4 py-10 text-slate-700 sm:px-6 lg:py-14 ${className}`}
        >
            <div className="mx-auto w-full max-w-6xl">
                <div className={`grid gap-8 ${isCompact ? "lg:grid-cols-1" : "lg:grid-cols-2 lg:gap-10"}`}>
                    <div className="flex flex-col space-y-4">
                        <span className="text-xs font-semibold uppercase tracking-wider text-green-700">
                            Ready to get started?
                        </span>
                        <h2
                            className={`font-bold leading-tight text-blue-950 ${isCompact ? "text-2xl sm:text-3xl" : "text-3xl sm:text-4xl lg:text-[2.4rem]"
                                }`}
                        >
                            Your business deserves its own online shop.
                        </h2>
                        <p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                            Give your customers a better way to browse products, place orders and pay.
                            Get a dedicated e-commerce system customized for your business.
                        </p>

                        <div className="inline-flex flex-col rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm">
                            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                One-time price
                            </span>
                            <span className="text-2xl font-bold text-blue-950">KES 200,000</span>
                            <span className="text-xs text-slate-500">
                                One-time purchase · No monthly system rental
                            </span>
                        </div>

                        <div className="pt-1">
                            <p className="text-sm font-semibold text-blue-950">Let&apos;s discuss your shop</p>
                            <p className="mt-1 text-sm leading-relaxed text-slate-600">
                                Tell us a little about your business. We&apos;ll contact you to discuss
                                customization, delivery and how to get started. No pressure, no obligation.
                            </p>
                        </div>

                        <div className="rounded-lg border border-slate-200 bg-white p-4">
                            <p className="text-sm font-semibold text-blue-950">Prefer WhatsApp?</p>
                            <p className="mt-1 text-sm leading-relaxed text-slate-600">
                                Chat with us directly about your online shop.
                            </p>
                            <a
                                href={whatsappHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 inline-flex items-center justify-center rounded bg-green-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
                            >
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>

                    <div className="w-full">
                        {status === "success" ? (
                            <div className="rounded-lg border border-green-200 bg-white p-5 sm:p-6">
                                <div className="flex items-center gap-2 text-green-700">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <p className="text-sm font-semibold">Request received</p>
                                </div>
                                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                    Thank you, {form.fullName.split(" ")[0] || "friend"}. We&apos;ve received
                                    your enquiry and will be in touch soon.
                                </p>
                                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                                    In the meantime, you can start the conversation on WhatsApp right now.
                                </p>
                                <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                                    <a
                                        href={whatsappHref}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center rounded bg-green-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-green-700"
                                    >
                                        Continue on WhatsApp
                                    </a>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setForm(emptyForm);
                                            setStatus("idle");
                                        }}
                                        className="inline-flex items-center justify-center rounded border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-blue-950 transition-colors hover:border-blue-950 hover:bg-slate-50"
                                    >
                                        Submit another enquiry
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <form
                                onSubmit={submit}
                                className="rounded-lg border border-slate-200 bg-white p-5 sm:p-6"
                                noValidate
                            >
                                <div className="space-y-4">
                                    <FormField label="Full name" required>
                                        <input
                                            type="text"
                                            value={form.fullName}
                                            onChange={update("fullName")}
                                            placeholder="e.g. Jane Wanjiru"
                                            className={inputCls}
                                            autoComplete="name"
                                        />
                                    </FormField>

                                    <FormField label="Business / shop name" required>
                                        <input
                                            type="text"
                                            value={form.businessName}
                                            onChange={update("businessName")}
                                            placeholder="e.g. TechHub Electronics"
                                            className={inputCls}
                                            autoComplete="organization"
                                        />
                                    </FormField>

                                    <FormField label="Phone number / WhatsApp" required>
                                        <input
                                            type="tel"
                                            value={form.phone}
                                            onChange={update("phone")}
                                            placeholder="e.g. 0712 345 678"
                                            className={inputCls}
                                            autoComplete="tel"
                                        />
                                    </FormField>

                                    <FormField label="Type of business">
                                        <select
                                            value={form.businessType}
                                            onChange={update("businessType")}
                                            className={inputCls}
                                        >
                                            {businessTypes.map((t) => (
                                                <option key={t} value={t}>
                                                    {t}
                                                </option>
                                            ))}
                                        </select>
                                    </FormField>

                                    <FormField label="Tell us what you need" hint="Optional">
                                        <textarea
                                            value={form.message}
                                            onChange={update("message")}
                                            rows={3}
                                            placeholder="e.g. I'd like to move my shop online, need M-Pesa checkout, and about 200 products."
                                            className={`${inputCls} resize-none`}
                                        />
                                    </FormField>
                                </div>

                                {error && (
                                    <p
                                        role="alert"
                                        className="mt-3 rounded border border-red-200 bg-red-50 px-3 py-2 text-sm leading-relaxed text-red-700"
                                    >
                                        {error}
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === "submitting"}
                                    className="mt-4 inline-flex w-full items-center justify-center rounded bg-blue-950 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-900 disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {status === "submitting" ? "Sending…" : "Request a Consultation"}
                                </button>

                                <p className="mt-3 text-center text-xs leading-relaxed text-slate-500">
                                    Your details will only be used to respond to your enquiry.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

function FormField({
    label,
    hint,
    required,
    children,
}: {
    label: string;
    hint?: string;
    required?: boolean;
    children: ReactNode;
}) {
    return (
        <label className="block">
            <span className="mb-1 flex items-center gap-1">
                <span className="text-sm font-medium text-slate-700">
                    {label}
                    {required && <span className="ml-0.5 text-red-600">*</span>}
                </span>
                {hint && <span className="text-xs text-slate-400">({hint})</span>}
            </span>
            {children}
        </label>
    );
}