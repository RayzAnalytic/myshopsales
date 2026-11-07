import { Page, View, Text, Link } from "@react-pdf/renderer";
import { tw } from "@/lib/proposal/tw";

const steps = [
 {
 n: "01",
 title: "Contact RazeStore",
 detail: "Discuss your business and what you need the shop to do.",
 },
 {
 n: "02",
 title: "Confirm the scope",
 detail: "Agree on the features, integrations and delivery expectations.",
 },
 {
 n: "03",
 title: "Review the arrangement",
 detail: "Confirm the payment milestones and the three delivery phases.",
 },
 {
 n: "04",
 title: "Begin the project",
 detail: "Once the agreed initial deposit is made, customization begins.",
 },
];

const WHATSAPP_DISPLAY = "+254 116 103 872";
const WHATSAPP_LINK = "https://wa.me/254116103872";
const WEBSITE_DISPLAY = "myshopsales.vercel.app";
const WEBSITE_LINK = "https://myshopsales.vercel.app";
const ENQUIRY_LINK = "https://myshopsales.vercel.app/pricing";

export default function NextStepsPage() {
 return (
 <Page size="A4" style={tw("bg-white px-11 py-10 flex flex-col justify-between")}>
 <View>
 <View style={tw("flex flex-row items-center justify-between pb-3 border-b border-slate-200")}>
 <Text style={tw("text-slate-500 text-[9px] uppercase")}>Next steps</Text>
 <Text style={tw("text-slate-400 text-[9px]")}>10</Text>
 </View>

 <View style={tw("flex flex-row gap-8 mt-8 items-start")}>
 <View style={tw("flex-1")}>
 <Text style={tw("text-blue-950 text-3xl font-bold")}>
 Let&apos;s discuss your online shop.
 </Text>
 </View>
 <View style={tw("flex-1 flex flex-col gap-3")}>
 <Text style={tw("text-slate-700 text-[11px]")}>
 There is no obligation to proceed. The first conversation is simply an opportunity to describe your shop and hear how the system would fit.
 </Text>
 <Text style={tw("text-slate-700 text-[11px]")}>
 Most shop owners find the WhatsApp conversation is enough to know whether RazeStore is right for them.
 </Text>
 </View>
 </View>
 </View>

 <View style={tw("mt-6")}>
 <Text style={tw("text-blue-950 text-[11px] font-bold uppercase mb-3")}>
 From conversation to launch
 </Text>
 <View style={tw("flex flex-row gap-3")}>
 {steps.map((s) => (
 <View key={s.n} style={tw("flex-1 flex flex-col")}>
 <View style={tw("h-[3px] bg-blue-950 mb-3 w-full")} />
 <Text style={tw("text-blue-950 text-[18px] font-bold")}>
 {s.n}
 </Text>
 <Text style={tw("text-blue-950 text-[10.5px] font-bold mt-2")}>
 {s.title}
 </Text>
 <Text style={tw("text-slate-600 text-[9px] mt-1")}>
 {s.detail}
 </Text>
 </View>
 ))}
 </View>
 </View>

 <View style={tw("mt-6 bg-blue-950 p-6")}>
 <View style={tw("flex flex-row items-start justify-between")}>
 <View style={tw("flex flex-col")}>
 <Text style={tw("text-slate-400 text-[9px] uppercase mb-1")}>
 Start the conversation
 </Text>
 <Text style={tw("text-white text-[17px] font-bold")}>
 Reach RazeStore directly.
 </Text>
 </View>
 <Text style={tw("text-slate-300 text-[9px] w-[180px] text-right")}>
 WhatsApp is the fastest way to reach us — and the one most shop owners use.
 </Text>
 </View>

 <View style={tw("mt-5 flex flex-row gap-3")}>
 <Link src={WHATSAPP_LINK} style={tw("flex-1 border border-green-600 p-4")}>
 <Text style={tw("text-green-600 text-[8px] uppercase mb-1")}>
 WhatsApp
 </Text>
 <Text style={tw("text-white text-[12.5px] font-bold")}>
 {WHATSAPP_DISPLAY}
 </Text>
 <Text style={tw("text-slate-400 text-[8px] mt-1")}>
 Tap to open a message
 </Text>
 </Link>

 <Link src={WEBSITE_LINK} style={tw("flex-1 border border-blue-800 p-4")}>
 <Text style={tw("text-slate-400 text-[8px] uppercase mb-1")}>
 Website
 </Text>
 <Text style={tw("text-white text-[12.5px] font-bold")}>
 {WEBSITE_DISPLAY}
 </Text>
 <Text style={tw("text-slate-400 text-[8px] mt-1")}>
 Demos and pricing
 </Text>
 </Link>

 <Link src={ENQUIRY_LINK} style={tw("flex-1 border border-blue-800 p-4")}>
 <Text style={tw("text-slate-400 text-[8px] uppercase mb-1")}>
 Email
 </Text>
 <Text style={tw("text-white text-[12.5px] font-bold")}>
 Enquiry form
 </Text>
 <Text style={tw("text-slate-400 text-[8px] mt-1")}>
 Via the website
 </Text>
 </Link>
 </View>
 </View>

 <View style={tw("mt-6 border-t border-slate-200 pt-4 flex flex-row gap-6 items-start")}>
 <View style={tw("w-[160px]")}>
 <Text style={tw("text-slate-500 text-[9px] uppercase")}>
 Thank you
 </Text>
 </View>
 <View style={tw("flex-1")}>
 <Text style={tw("text-slate-700 text-[10px]")}>
 Thank you for considering RazeStore. This proposal is a starting point for a conversation — nothing in it is a commitment on either side until both parties have agreed the scope in writing.
 </Text>
 </View>
 </View>
 </Page>
 );
}