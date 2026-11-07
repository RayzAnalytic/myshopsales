import { Page, View, Text, Image, StyleSheet } from "@react-pdf/renderer";
import fs from "node:fs";
import path from "node:path";
import { tw } from "@/lib/proposal/tw";

function loadImage(relativePath: string, mime: string): string {
 try {
 const fullPath = path.join(process.cwd(), "public", relativePath);
 const buffer = fs.readFileSync(fullPath);
 return `data:${mime};base64,${buffer.toString("base64")}`;
 } catch {
 return `https://myshopsales.vercel.app/${relativePath}`;
 }
}

const paymentSteps = [
 { n: "1", label: "Order placed" },
 { n: "2", label: "M-Pesa selected" },
 { n: "3", label: "Request to phone" },
 { n: "4", label: "Customer approves" },
 { n: "5", label: "Order updated" },
];

export default function PaymentsPage() {
 const orderStatusSrc = loadImage("images/ordersstatusoverview.png", "image/png");

 return (
 <Page size="A4" style={tw("bg-white px-11 py-10 flex flex-col justify-between")}>
 <View>
 <View style={tw("flex flex-row items-center justify-between pb-3 border-b border-slate-200")}>
 <Text style={tw("text-slate-500 text-[9px] uppercase")}>Payments & orders</Text>
 <Text style={tw("text-slate-400 text-[9px]")}>06</Text>
 </View>

 <View style={tw("flex flex-row gap-6 mt-6 items-start")}>
 <View style={tw("flex-1")}>
 <Text style={tw("text-blue-950 text-3xl font-bold")}>
 A clear payment step at checkout.
 </Text>
 </View>
 <View style={tw("flex-1 flex flex-col gap-3")}>
 <Text style={tw("text-slate-700 text-[11px]")}>
 M-Pesa is the most widely used payment method in Kenya. RazeStore supports it at checkout once configured with your business&apos;s own M-Pesa credentials and account details.
 </Text>
 <Text style={tw("text-slate-700 text-[11px]")}>
 The flow is simple for the customer, and every step leaves a trace you can follow in the admin.
 </Text>
 </View>
 </View>
 </View>

 <View style={tw("mt-8")}>
 <Text style={tw("text-blue-950 text-[10px] font-bold uppercase mb-3")}>
 The payment flow
 </Text>
 <View style={tw("flex flex-row justify-between border-t border-b border-slate-200 py-4")}>
 {paymentSteps.map((s) => (
 <View key={s.n} style={tw("flex flex-col items-center w-[92px]")}>
 <View style={tw("w-[24px] h-[24px] bg-blue-950 items-center justify-center mb-2")}>
 <Text style={tw("text-white text-[10px] font-bold")}>{s.n}</Text>
 </View>
 <Text style={tw("text-slate-700 text-[9px] text-center")}>
 {s.label}
 </Text>
 </View>
 ))}
 </View>
 </View>

 <View style={tw("mt-6 bg-slate-50 border border-slate-200 p-4 flex flex-row gap-6 items-start")}>
 <View style={tw("w-[140px]")}>
 <Text style={tw("text-green-700 text-[9px] uppercase mb-1")}>
 On success
 </Text>
 <Text style={tw("text-blue-950 text-[11px] font-bold")}>
 Payment confirmed
 </Text>
 </View>
 <View style={tw("flex-1")}>
 <Text style={tw("text-slate-700 text-[10px]")}>
 Once the payment provider confirms the transaction, the order moves forward with a verified status. Both you and the customer see the same information — no more manually matching screenshots to orders.
 </Text>
 </View>
 </View>

 <View style={tw("mt-6 flex flex-row gap-6 items-start")}>
 <View style={{ width: "60%", display: "flex", flexDirection: "column" }}>
 <View style={tw("bg-slate-50 border border-slate-200 h-[190px] w-full")}>
 <Image src={orderStatusSrc} style={styles.screenshot} />
 </View>
 <Text style={tw("text-slate-500 text-[8.5px] mt-2")}>
 Order status overview, using demonstration data.
 </Text>
 </View>
 <View style={tw("flex-1 flex flex-col")}>
 <Text style={tw("text-blue-950 text-[11px] font-bold mb-2")}>
 Every order, one list
 </Text>
 <Text style={tw("text-slate-700 text-[10px] mb-2")}>
 Each order carries a status that reflects where it currently is — from placed, through paid, to delivered.
 </Text>
 <Text style={tw("text-slate-700 text-[10px] mb-2")}>
 Failed or cancelled attempts remain visible, so nothing is silently lost. You can decide what to do with each one.
 </Text>
 <Text style={tw("text-slate-700 text-[10px]")}>
 For orders still awaiting payment, a reminder can be issued directly to the customer.
 </Text>
 </View>
 </View>

 <View style={tw("mt-6 border-t border-slate-200 pt-4 flex flex-row gap-6 items-start")}>
 <View style={tw("w-[160px]")}>
 <Text style={tw("text-slate-500 text-[9px] uppercase")}>
 Configuration
 </Text>
 </View>
 <View style={tw("flex-1")}>
 <Text style={tw("text-slate-700 text-[10px]")}>
 M-Pesa checkout is enabled once your business&apos;s Daraja API credentials and a matching paybill or till account are provided and tested. Until then, the rest of the shop is fully functional and payments are configured during Phase 2 of the delivery phases described later in this proposal.
 </Text>
 </View>
 </View>
 </Page>
 );
}

const styles = StyleSheet.create({
 screenshot: {
 width: "100%",
 height: "100%",
 objectFit: "contain",
 },
});