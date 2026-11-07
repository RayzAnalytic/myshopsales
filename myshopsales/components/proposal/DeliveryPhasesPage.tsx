import { Page, View, Text } from "@react-pdf/renderer";
import { tw } from "@/lib/proposal/tw";

const phases = [
 {
 number: "01",
 kicker: "PHASE ONE",
 title: "Customization and launch",
 body: "After the initial deposit, the system is customized for your business. Branding, product information and the agreed core shop are prepared and deployed live on your domain.",
 activities: [
 "Agree on branding, colours and layout",
 "Populate products with agreed pricing and images",
 "Configure the storefront and shop structure",
 "Deploy the core shop live",
 ],
 outcome: "Online shop live on your domain",
 integrationNote: null,
 },
 {
 number: "02",
 kicker: "PHASE TWO",
 title: "Integrations and configuration",
 body: "The necessary access, permissions and credentials are obtained, and the agreed external integrations are configured, connected and tested.",
 activities: [
 "Obtain API credentials and account access",
 "Configure agreed payment integrations",
 "Connect and test social and messaging integrations",
 "Confirm functionality with live testing",
 ],
 outcome: "Integrations connected and verified",
 integrationNote: "WhatsApp Business, TikTok Business and other agreed social integrations become active in this phase, once the required credentials are configured and tested. External provider approval times depend on those providers.",
 },
 {
 number: "03",
 kicker: "PHASE THREE",
 title: "Final verification and handover",
 body: "The complete system is checked against the agreed scope, then handed over together with the agreed ownership, accounts and access.",
 activities: [
 "Verify the agreed functions are working",
 "Provide administrator training",
 "Transfer agreed account access and ownership",
 "Final handover and completion",
 ],
 outcome: "System handed over — three months free management begins",
 integrationNote: null,
 },
];

export default function DeliveryPhasesPage() {
 return (
 <Page size="A4" style={tw("bg-white px-11 py-10 flex flex-col justify-between")}>
 <View>
 <View style={tw("flex flex-row items-center justify-between pb-3 border-b border-slate-200")}>
 <Text style={tw("text-slate-500 text-[11px] uppercase")}>Delivery phases</Text>
 <Text style={tw("text-slate-400 text-[11px]")}>07</Text>
 </View>

 <View style={tw("flex flex-row gap-6 mt-6 items-start")}>
 <View style={tw("flex-1")}>
 <Text style={tw("text-blue-950 text-3xl font-bold")}>
 From purchase to handover, in three phases.
 </Text>
 </View>
 <View style={tw("flex-1 flex flex-col gap-3")}>
 <Text style={tw("text-slate-700 text-[11px]")}>
 Every RazeStore project follows the same three-stage sequence. Each phase has a defined scope, a clear outcome, and a payment milestone that becomes due when the phase is complete.
 </Text>
 <Text style={tw("text-slate-700 text-[11px]")}>
 No integration is treated as active until it has been configured with your own credentials and tested with real data.
 </Text>
 </View>
 </View>
 </View>

 <View style={tw("flex flex-col gap-2 mt-6")}>
 {phases.map((phase) => (
 <View
 key={phase.number}
 style={tw("flex flex-row border border-slate-200")}
 >
 <View
 style={tw("w-[74px] bg-blue-950 p-3 flex flex-col justify-between")}
 >
 <View>
 <Text style={tw("text-slate-400 text-[9px] uppercase")}>
 {phase.kicker}
 </Text>
 <Text style={tw("text-white text-[26px] font-bold mt-1")}>
 {phase.number}
 </Text>
 </View>
 </View>

 <View style={tw("flex-1 p-4")}>
 <Text style={tw("text-blue-950 text-[12px] font-bold")}>
 {phase.title}
 </Text>
 <Text style={tw("text-slate-700 text-[11px] mt-1")}>
 {phase.body}
 </Text>

 <View style={tw("mt-2 flex flex-col gap-[3px]")}>
 {phase.activities.map((activity) => (
 <View key={activity} style={tw("flex flex-row items-start gap-2")}>
 <View style={tw("w-[4px] h-[4px] mt-[4px] bg-slate-400")} />
 <Text style={tw("text-slate-600 text-[9px]")}>
 {activity}
 </Text>
 </View>
 ))}
 </View>

 {phase.integrationNote && (
 <View style={tw("mt-2 border-l border-green-600 pl-3")}>
 <Text style={tw("text-green-700 text-[10px]")}>
 {phase.integrationNote}
 </Text>
 </View>
 )}

 <View style={tw("mt-2 pt-2 border-t border-slate-200")}>
 <Text style={tw("text-slate-500 text-[9px] uppercase")}>
 Outcome
 </Text>
 <Text style={tw("text-blue-950 text-[11px] font-bold mt-[2px]")}>
 {phase.outcome}
 </Text>
 </View>
 </View>
 </View>
 ))}
 </View>

 <View style={tw("mt-6 border-t border-slate-200 pt-4 flex flex-row gap-6 items-start")}>
 <View style={tw("w-[160px]")}>
 <Text style={tw("text-slate-500 text-[11px] uppercase")}>
 Timing note
 </Text>
 </View>
 <View style={tw("flex-1")}>
 <Text style={tw("text-slate-700 text-[13px]")}>
 Delivery timelines depend on the agreed scope, on how quickly the necessary products and credentials are provided, and on external provider approvals. A specific timeline for each phase is confirmed with you in writing before work begins.
 </Text>
 </View>
 </View>
 </Page>
 );
}