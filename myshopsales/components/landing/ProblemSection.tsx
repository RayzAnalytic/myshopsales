const problems = [
    {
        title: "Orders arrive from several places",
        icon: (
            <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.75}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M4 6h16M4 12h16M4 18h10" />
                <circle cx="18" cy="18" r="2" />
            </svg>
        ),
        problem:
            "A sale can start on WhatsApp, in a DM, in a phone call, or in person. Keeping track of who ordered what — and remembering to follow up — takes a lot of attention when the conversations live in different places.",
        capability:
            "A RazeStore shop gives each order a single record inside the admin, so you can see incoming orders in one list instead of scrolling through chats.",
        capabilityLabel: "Order management",
    },
    {
        title: "Checking payments by hand",
        icon: (
            <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.75}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <rect x="3" y="6" width="18" height="12" rx="2" />
                <path d="M3 10h18" />
                <path d="M7 15h3" />
            </svg>
        ),
        problem:
            "Confirming that a customer has actually paid often means opening the M-Pesa message, matching it to the order, and then updating a note or spreadsheet. Doing this for every order takes time, and it is easy to lose track.",
        capability:
            "When M-Pesa is configured and tested for your account, the payment outcome updates the order status in the admin, so you do not have to keep that record by hand.",
        capabilityLabel: "M-Pesa checkout, once configured",
    },
    {
        title: "Losing track of stock",
        icon: (
            <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.75}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M3 7l9-4 9 4-9 4-9-4Z" />
                <path d="M3 7v10l9 4 9-4V7" />
                <path d="M12 11v10" />
            </svg>
        ),
        problem:
            "Counting what is on the shelf after a busy day is slow, and knowing what has sold — and what needs restocking — usually comes down to memory or a notebook.",
        capability:
            "The admin keeps a stock level for each product so you can see what is available and adjust quantities as items sell or are restocked.",
        capabilityLabel: "Stock and inventory",
    },
];

export default function ProblemSection() {
    return (
        <section
            aria-labelledby="problem-section-heading"
            className="border-b border-slate-200 bg-white text-slate-900"
        >
            <div className="mx-auto w-full max-w-7xl px-6 py-8">
                <div className="flex flex-col space-y-1.5">
                  
                    <h2
                        id="problem-section-heading"
                        className="text-xl font-bold text-blue-950 sm:text-2xl lg:text-3xl"
                    >
                        Running a shop online brings a few recurring headaches
                    </h2>
                    <p className="max-w-2xl text-sm text-slate-700 sm:text-base">
                        If you sell electronics, you probably already know these ones. They
                        are not unusual — they are the normal friction of trying to keep
                        everything in your head, in chats, and in a notebook at the same time.
                    </p>
                </div>

                <ul className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
                    {problems.map((item, index) => (
                        <li
                            key={item.title}
                            className="flex flex-col space-y-1.5 rounded border border-slate-200 bg-white p-3"
                        >
                            <div className="flex items-center gap-2">
                                <span
                                    aria-hidden="true"
                                    className="flex h-8 w-8 flex-none items-center justify-center rounded-sm bg-slate-50 text-blue-950"
                                >
                                    {item.icon}
                                </span>
                                <span className="text-[11px] font-semibold uppercase text-slate-500">
                                    Problem {index + 1}
                                </span>
                            </div>

                            <h3 className="text-base font-semibold text-blue-950">
                                {item.title}
                            </h3>

                            <p className="text-sm text-slate-700">
                                {item.problem}
                            </p>

                            <div className="mt-1 border-t border-slate-200 pt-2">
                                <p className="text-[11px] font-semibold uppercase text-green-700">
                                    {item.capabilityLabel}
                                </p>
                                <p className="mt-0.5 text-sm text-slate-700">
                                    {item.capability}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>

                <p className="mt-2 max-w-3xl text-xs text-slate-600">
                    These are common situations, not universal ones. If any of them sound
                    like your week, the RazeStore admin is built to bring the record of each
                    order and product into one place so you can spend less time chasing
                    details. Integrations such as M-Pesa and WhatsApp depend on
                    configuration and account access, and are confirmed with you before
                    they are enabled.
                </p>
            </div>
        </section>
    );
}