import { Page, View, Text } from "@react-pdf/renderer";
import { tw } from "@/lib/proposal/tw";

const milestones = [
    {
        number: "01",
        label: "Initial Deposit",
        amount: "KES 60,000",
        when: "On signing",
        description: "Confirms the project and begins Phase 1 — customization, product setup and deployment of the core shop.",
    },
    {
        number: "02",
        label: "Shop Live on Your Domain",
        amount: "KES 80,000",
        when: "At launch",
        description: "Due once the shop is live on your domain and you have reviewed a working demonstration of the agreed core features.",
    },
    {
        number: "03",
        label: "Handover & Training",
        amount: "KES 60,000",
        when: "At handover",
        description: "Due on completion of Phase 3 — final verification, administrator training and agreed handover of access.",
    },
];

const additionalCosts = [
    { label: "Domain renewal", note: "Approx. KES 1,500 per year, through your registrar" },
    { label: "Hosting", note: "Approx. KES 6,000 per year, to your provider" },
    { label: "M-Pesa transaction charges", note: "Charged by Safaricom per transaction" },
    { label: "Third-party subscriptions", note: "API or service fees set by those providers" },
    { label: "Work outside agreed scope", note: "Quoted separately if requested" },
];

export default function PricingPage() {
    return (
        <Page size="A4" style={tw("bg-white px-11 py-10 flex flex-col")}>
            <View style={tw("flex flex-row items-center justify-between pb-3 border-b border-slate-200")}>
                <Text style={tw("text-slate-500 text-[11px] uppercase")}>Investment</Text>
                <Text style={tw("text-slate-400 text-[11px]")}>08</Text>
            </View>

            <View style={tw("bg-blue-950 p-5 mt-6 flex flex-row items-end justify-between")}>
                <View style={tw("flex flex-col")}>
                    <Text style={tw("text-slate-400 text-[10px] uppercase mb-2")}>
                        One-time system investment
                    </Text>
                    <Text style={tw("text-white text-[40px] font-bold")}>
                        KES 200,000
                    </Text>
                    <Text style={tw("text-green-400 text-[10px] font-bold uppercase mt-2")}>
                        No monthly fee to RazeStore
                    </Text>
                </View>
                <View style={tw("w-[220px]")}>
                    <Text style={tw("text-slate-300 text-[10px]")}>
                        Three payment milestones, one complete delivery. No monthly rental, no per-order commission.
                    </Text>
                </View>
            </View>

            <View style={tw("mt-6")}>
                <View style={tw("flex flex-row items-end justify-between mb-2")}>
                    <Text style={tw("text-blue-950 text-[11px] font-bold uppercase")}>
                        Payment milestones
                    </Text>
                    <Text style={tw("text-slate-500 text-[10px]")}>
                        60,000 + 80,000 + 60,000 = 200,000
                    </Text>
                </View>

                <View style={tw("border border-slate-200")}>
                    {milestones.map((m, i) => (
                        <View
                            key={m.number}
                            style={
                                i === 0
                                    ? tw("flex flex-row items-stretch")
                                    : tw("flex flex-row items-stretch border-t border-slate-200")
                            }
                        >
                            <View style={tw("w-[58px] bg-slate-50 p-3 flex flex-col justify-center items-center border-r border-slate-200")}>
                                <Text style={tw("text-blue-950 text-[16px] font-bold")}>
                                    {m.number}
                                </Text>
                            </View>
                            <View style={tw("flex-1 p-3 flex flex-col justify-center")}>
                                <View style={tw("flex flex-row items-center gap-2")}>
                                    <Text style={tw("text-blue-950 text-[10px] font-bold uppercase")}>
                                        {m.label}
                                    </Text>
                                    <Text style={tw("text-slate-500 text-[9px]")}>
                                        · {m.when}
                                    </Text>
                                </View>
                                <Text style={tw("text-slate-700 text-[10px] mt-1")}>
                                    {m.description}
                                </Text>
                            </View>
                            <View style={tw("w-[110px] p-3 flex flex-col justify-center items-end border-l border-slate-200")}>
                                <Text style={tw("text-blue-950 text-[13px] font-bold")}>
                                    {m.amount}
                                </Text>
                            </View>
                        </View>
                    ))}
                    <View style={tw("flex flex-row items-stretch border-t border-slate-300 bg-slate-50")}>
                        <View style={tw("w-[58px] p-3")} />
                        <View style={tw("flex-1 p-3 flex flex-row items-center justify-end")}>
                            <Text style={tw("text-blue-950 text-[11px] font-bold uppercase")}>
                                Total
                            </Text>
                        </View>
                        <View style={tw("w-[110px] p-3 flex flex-col justify-center items-end border-l border-slate-300")}>
                            <Text style={tw("text-blue-950 text-[14px] font-bold")}>
                                KES 200,000
                            </Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={tw("mt-5")}>
                <View style={tw("flex flex-row items-end justify-between mb-2")}>
                    <Text style={tw("text-blue-950 text-[11px] font-bold uppercase")}>
                        Separate from the investment
                    </Text>
                    <Text style={tw("text-slate-500 text-[10px]")}>
                        Paid directly to providers
                    </Text>
                </View>
                <Text style={tw("text-slate-600 text-[10px] mb-2")}>
                    These costs are not part of the KES 200,000. M-Pesa checkout activates once Daraja API credentials and a matching paybill or till account are provided and tested in Phase 2.
                </Text>
                <View style={tw("flex flex-col")}>
                    {additionalCosts.map((c) => (
                        <View key={c.label} style={tw("flex flex-row items-center gap-3 border-t border-slate-200 py-1")}>
                            <Text style={tw("text-slate-700 text-[10px] font-bold w-[180px]")}>
                                {c.label}
                            </Text>
                            <Text style={tw("text-slate-500 text-[10px] flex-1")}>
                                {c.note}
                            </Text>
                        </View>
                    ))}
                </View>
            </View>

            <View style={tw("mt-5 bg-slate-50 border border-slate-200 p-4 flex flex-row gap-6 items-start")}>
                <View style={tw("w-[160px]")}>
                    <Text style={tw("text-slate-500 text-[11px] uppercase")}>
                        What is included
                    </Text>
                </View>
                <View style={tw("flex-1")}>
                    <Text style={tw("text-slate-700 text-[10px]")}>
                        The KES 200,000 covers customization, deployment, agreed integrations, testing, administrator training and handover, plus three months of free support after completion. Exact inclusion in each phase is confirmed with you in writing before work begins.
                    </Text>
                </View>
            </View>
        </Page>
    );
}