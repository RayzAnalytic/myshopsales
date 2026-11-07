import { Page, View, Text } from "@react-pdf/renderer";
import { tw } from "@/lib/proposal/tw";

const milestones = [
 {
 number: "01",
 label: "INITIAL DEPOSIT",
 amount: "KES 60,000",
 when: "At the start",
 description: "Confirms the project and begins Phase 1 — customization, product setup and deployment of the core shop.",
 },
 {
 number: "02",
 label: "WORKING DEMONSTRATION",
 amount: "KES 80,000",
 when: "At the live demo",
 description: "Due once the shop is live and you have reviewed a working demonstration of the agreed core features.",
 },
 {
 number: "03",
 label: "FINAL PAYMENT",
 amount: "KES 60,000",
 when: "At handover",
 description: "Due on completion of Phase 3 — final verification, administrator training and agreed handover of access.",
 },
];

const additionalCosts = [
 { label: "Domain renewal", note: "Renewed through your domain registrar" },
 { label: "Hosting", note: "Paid to your hosting provider" },
 { label: "M-Pesa transaction charges", note: "Charged by Safaricom per transaction" },
 { label: "Third-party subscriptions", note: "API or service fees charged by those providers" },
 { label: "Work outside the agreed scope", note: "Quoted separately if requested" },
];

export default function PricingPage() {
 return (
 <Page size="A4" style={tw("bg-white px-11 py-10 flex flex-col justify-between")}>
 <View>
 <View style={tw("flex flex-row items-center justify-between pb-3 border-b border-slate-200")}>
 <Text style={tw("text-slate-500 text-[9px] uppercase")}>Investment</Text>
 <Text style={tw("text-slate-400 text-[9px]")}>08</Text>
 </View>
 </View>

 <View style={tw("bg-blue-950 p-8 mt-8 flex flex-row items-end justify-between")}>
 <View style={tw("flex flex-col")}>
 <Text style={tw("text-slate-400 text-[9px] uppercase mb-2")}>
 One-time system investment
 </Text>
 <Text style={tw("text-white text-[42px] font-bold")}>
 KES 200,000
 </Text>
 </View>
 <View style={tw("w-[220px]")}>
 <Text style={tw("text-slate-300 text-[10px]")}>
 A single payment plan across three milestones. No monthly RazeStore rental, no per-order commission.
 </Text>
 </View>
 </View>

 <View style={tw("mt-6")}>
 <View style={tw("flex flex-row items-end justify-between mb-3")}>
 <Text style={tw("text-blue-950 text-[11px] font-bold uppercase")}>
 Payment milestones
 </Text>
 <Text style={tw("text-slate-500 text-[9px]")}>
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
 <View style={tw("w-[54px] bg-slate-50 p-3 flex flex-col justify-center items-center border-r border-slate-200")}>
 <Text style={tw("text-blue-950 text-[16px] font-bold")}>
 {m.number}
 </Text>
 </View>
 <View style={tw("w-[130px] p-3 flex flex-col justify-center border-r border-slate-200")}>
 <Text style={tw("text-slate-500 text-[7.5px] uppercase")}>
 {m.label}
 </Text>
 <Text style={tw("text-slate-500 text-[8px] mt-1")}>
 {m.when}
 </Text>
 </View>
 <View style={tw("w-[92px] p-3 flex flex-col justify-center items-end border-r border-slate-200")}>
 <Text style={tw("text-blue-950 text-[13px] font-bold")}>
 {m.amount.replace("KES ", "")}
 </Text>
 <Text style={tw("text-slate-500 text-[7.5px] mt-[3px]")}>KES</Text>
 </View>
 <View style={tw("flex-1 p-3 flex flex-col justify-center")}>
 <Text style={tw("text-slate-700 text-[9px]")}>
 {m.description}
 </Text>
 </View>
 </View>
 ))}
 <View style={tw("flex flex-row items-stretch border-t border-slate-300 bg-slate-50")}>
 <View style={tw("w-[54px] p-3")} />
 <View style={tw("flex-1 p-3 flex flex-row items-center justify-between")}>
 <Text style={tw("text-blue-950 text-[10px] font-bold uppercase")}>
 Total
 </Text>
 <Text style={tw("text-blue-950 text-[14px] font-bold")}>
 KES 200,000
 </Text>
 </View>
 </View>
 </View>
 </View>

 <View style={tw("mt-6 flex flex-row gap-8 items-start")}>
 <View style={tw("w-[180px]")}>
 <Text style={tw("text-blue-950 text-[11px] font-bold mb-2")}>
 Separate from the investment
 </Text>
 <Text style={tw("text-slate-600 text-[9px]")}>
 The following costs are not part of the KES 200,000 and are paid directly to the providers involved.
 </Text>
 </View>
 <View style={tw("flex-1 flex flex-col gap-[5px]")}>
 {additionalCosts.map((c) => (
 <View key={c.label} style={tw("flex flex-row items-start gap-2")}>
 <View style={tw("w-[4px] h-[4px] mt-[5px] bg-slate-400")} />
 <View style={tw("flex-1 flex flex-row")}>
 <Text style={tw("text-slate-700 text-[9.5px] font-bold w-[160px]")}>
 {c.label}
 </Text>
 <Text style={tw("text-slate-500 text-[9px] flex-1")}>
 {c.note}
 </Text>
 </View>
 </View>
 ))}
 </View>
 </View>

 <View style={tw("mt-6 border-t border-slate-200 pt-4 flex flex-row gap-6 items-start")}>
 <View style={tw("w-[160px]")}>
 <Text style={tw("text-slate-500 text-[9px] uppercase")}>
 What is included
 </Text>
 </View>
 <View style={tw("flex-1")}>
 <Text style={tw("text-slate-700 text-[10px]")}>
 The KES 200,000 covers customization, deployment, agreed integrations, testing, administrator training and handover, plus three months of free management support after completion. Exact inclusion in each phase is confirmed with you in writing before work begins.
 </Text>
 </View>
 </View>
 </Page>
 );
}