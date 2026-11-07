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

export default function ProposalCover() {
 const logoSrc = loadImage("logo.jpeg", "image/jpeg");
 const storefrontSrc = loadImage("images/storefrontposter.png", "image/png");

 const today = new Date();
 const issueDate = today.toLocaleDateString("en-GB", {
 day: "numeric",
 month: "long",
 year: "numeric",
 });

 return (
 <Page size="A4" style={tw("bg-blue-950 px-11 py-10 flex flex-col justify-between")}>
 <View style={tw("flex flex-row items-center justify-between pb-5 border-b border-blue-900")}>
 <View style={tw("flex flex-row items-center gap-2")}>
 <Image src={logoSrc} style={styles.logo} />
 <Text style={tw("text-white text-lg font-bold")}>RazeStore</Text>
 </View>
 <Text style={tw("text-slate-300 text-[10px]")}>myshopsales.vercel.app</Text>
 </View>

 <View style={tw("flex flex-col justify-center flex-1 py-6")}>
 <Text style={tw("text-slate-400 text-[10px] uppercase mb-4")}>
 BUSINESS PROPOSAL
 </Text>
 <Text style={tw("text-white text-4xl font-bold mb-4")}>
 A complete e-commerce system for your business.
 </Text>
 <Text style={tw("text-slate-300 text-[13px] max-w-[440px]")}>
 A dedicated, customized online shop built for your store and owned by your business.
 </Text>

 <View
 style={tw(
 "mt-7 w-full h-[340px] bg-white border border-blue-900"
 )}
 >
 <Image src={storefrontSrc} style={styles.screenshot} />
 </View>
 </View>

 <View style={tw("flex flex-row justify-between border-t border-blue-900 pt-4")}>
 <View style={tw("flex flex-col")}>
 <Text style={tw("text-slate-500 text-[8px] mb-1")}>VERSION</Text>
 <Text style={tw("text-slate-200 text-[10px] font-bold")}>1.0</Text>
 </View>
 <View style={tw("flex flex-col")}>
 <Text style={tw("text-slate-500 text-[8px] mb-1")}>ISSUED</Text>
 <Text style={tw("text-slate-200 text-[10px] font-bold")}>{issueDate}</Text>
 </View>
 <View style={tw("flex flex-col")}>
 <Text style={tw("text-slate-500 text-[8px] mb-1")}>PREPARED BY</Text>
 <Text style={tw("text-slate-200 text-[10px] font-bold")}>RazeStore</Text>
 </View>
 </View>
 </Page>
 );
}

const styles = StyleSheet.create({
 logo: { width: 28, height: 28 },
 screenshot: { width: "100%", height: "100%", objectFit: "contain" },
});