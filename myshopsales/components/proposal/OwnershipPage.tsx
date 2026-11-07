import { Page, View, Text } from "@react-pdf/renderer";
import { tw } from "@/lib/proposal/tw";

const ownershipItems = [
 {
 label: "Dedicated customized deployment",
 detail: "A shop customized for your business and deployed for you alone — not a shared slot on a platform with other shops.",
 },
 {
 label: "Your own business domain",
 detail: "Control of the agreed domain that points to your shop.",
 },
 {
 label: "Hosting account and business data",
 detail: "Control of the hosting account and of the business data your shop records.",
 },
 {
 label: "Administrative access",
 detail: "Agreed administrator access to manage your own shop.",
 },
 {
 label: "Your own connected business accounts",
 detail: "WhatsApp Business, TikTok Business and other external accounts remain yours and stay under your control.",
 highlight: true,
 },
];

const ongoingCosts = [
 {
 label: "Domain renewal",
 detail: "Renewed periodically through your domain registrar.",
 },
 {
 label: "Hosting",
 detail: "Paid to your hosting provider directly.",
 },
 {
 label: "M-Pesa transaction charges",
 detail: "Charged by Safaricom per transaction.",
 },
 {
 label: "Third-party subscriptions",
 detail: "API or service fees set by those providers.",
 },
];

export default function OwnershipPage() {
 return (
 <Page size="A4" style={tw("bg-white px-11 py-10 flex flex-col justify-between")}>
 <View>
 <View style={tw("flex flex-row items-center justify-between pb-3 border-b border-slate-200")}>
 <Text style={tw("text-slate-500 text-[9px] uppercase")}>Ownership & management</Text>
 <Text style={tw("text-slate-400 text-[9px]")}>09</Text>
 </View>

 <View style={tw("flex flex-row gap-8 mt-8 items-start")}>
 <View style={tw("flex-1")}>
 <Text style={tw("text-blue-950 text-3xl font-bold")}>
 Your business. Your shop. Your control.
 </Text>
 </View>
 <View style={tw("flex-1 flex flex-col gap-3")}>
 <Text style={tw("text-slate-700 text-[11px]")}>
 RazeStore is not a monthly subscription or a shared shop platform. Each RazeStore system is customized for one business and deployed for that business alone.
 </Text>
 <Text style={tw("text-slate-700 text-[11px]")}>
 After handover, the shop, the business data and the agreed account access belong to you.
 </Text>
 </View>
 </View>
 </View>

 <View style={tw("mt-6")}>
 <Text style={tw("text-blue-950 text-[11px] font-bold uppercase mb-3")}>
 What you control
 </Text>
 <View style={tw("flex flex-row gap-4 items-start")}>
 <View style={tw("flex-1 flex flex-col gap-2")}>
 {ownershipItems.slice(0, 3).map((item) => (
 <View key={item.label} style={tw("border border-slate-200 p-3")}>
 <Text style={tw("text-blue-950 text-[10.5px] font-bold")}>
 {item.label}
 </Text>
 <Text
 style={
 item.highlight
 ? tw("text-green-700 text-[9px] mt-1")
 : tw("text-slate-600 text-[9px] mt-1")
 }
 >
 {item.detail}
 </Text>
 </View>
 ))}
 </View>
 <View style={tw("flex-1 flex flex-col gap-2")}>
 {ownershipItems.slice(3).map((item) => (
 <View key={item.label} style={tw("border border-slate-200 p-3")}>
 <Text style={tw("text-blue-950 text-[10.5px] font-bold")}>
 {item.label}
 </Text>
 <Text
 style={
 item.highlight
 ? tw("text-green-700 text-[9px] mt-1")
 : tw("text-slate-600 text-[9px] mt-1")
 }
 >
 {item.detail}
 </Text>
 </View>
 ))}
 </View>
 </View>
 </View>

 <View style={tw("mt-5 bg-slate-50 border border-slate-200 flex flex-row items-stretch")}>
 <View style={tw("w-[150px] p-4 bg-blue-950 flex flex-col justify-center")}>
 <Text style={tw("text-slate-400 text-[8px] uppercase mb-1")}>
 Included
 </Text>
 <Text style={tw("text-white text-[20px] font-bold")}>
 3 months
 </Text>
 <Text style={tw("text-slate-300 text-[9px] mt-1")}>
 free management after handover
 </Text>
 </View>
 <View style={tw("flex-1 p-4 flex flex-col gap-2")}>
 <Text style={tw("text-slate-700 text-[9.5px]")}>
 Covers agreed technical support, troubleshooting, bug fixes and routine assistance for three months after final handover. Continued management after the three-month period can be arranged separately.
 </Text>
 <Text style={tw("text-slate-500 text-[9px]")}>
 Not included: new features, redesigns, product uploads beyond the agreed scope, or ongoing development. Any additional work is quoted separately.
 </Text>
 </View>
 </View>

 <View style={tw("mt-5")}>
 <View style={tw("flex flex-row items-end justify-between mb-2")}>
 <Text style={tw("text-blue-950 text-[11px] font-bold uppercase")}>
 Separate from ownership
 </Text>
 <Text style={tw("text-slate-500 text-[9px]")}>
 Paid directly to providers
 </Text>
 </View>
 <View style={tw("flex flex-row gap-4")}>
 {ongoingCosts.map((cost) => (
 <View
 key={cost.label}
 style={tw("flex-1 border-t border-slate-300 pt-2")}
 >
 <Text style={tw("text-blue-950 text-[9.5px] font-bold")}>
 {cost.label}
 </Text>
 <Text style={tw("text-slate-600 text-[8.5px] mt-1")}>
 {cost.detail}
 </Text>
 </View>
 ))}
 </View>
 </View>

 <View style={tw("mt-5 border-t border-slate-200 pt-3 flex flex-row gap-6 items-start")}>
 <View style={tw("w-[160px]")}>
 <Text style={tw("text-slate-500 text-[9px] uppercase")}>
 Ownership terms
 </Text>
 </View>
 <View style={tw("flex-1")}>
 <Text style={tw("text-slate-700 text-[9.5px]")}>
 Ownership and transfer arrangements are documented in the purchase agreement. Source-code transfer is not implied. Any shared third-party service remains governed by the terms of the provider that operates it.
 </Text>
 </View>
 </View>
 </Page>
 );
}