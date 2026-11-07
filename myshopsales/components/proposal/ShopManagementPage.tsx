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

const adminScreens = [
 {
 src: "images/ordersadmin.png",
 title: "Orders",
 description: "Every incoming order in one list, from new to delivered.",
 },
 {
 src: "images/productsadmin.png",
 title: "Products",
 description: "Add, edit and organise products with images, prices and categories.",
 },
 {
 src: "images/inventoryadmin.png",
 title: "Stock",
 description: "Current stock levels, with clear visibility of what needs attention.",
 },
];

const extraTools = [
 "Category management",
 "Customer records",
 "Banner management",
 "Shipping zones",
 "Returns handling",
 "Discounts & promotions",
 "Customer reviews",
 "Newsletter campaigns",
];

export default function ShopManagementPage() {
 return (
 <Page size="A4" style={tw("bg-white px-11 py-10 flex flex-col justify-between")}>
 <View>
 <View style={tw("flex flex-row items-center justify-between pb-3 border-b border-slate-200")}>
 <Text style={tw("text-slate-500 text-[9px] uppercase")}>Shop management</Text>
 <Text style={tw("text-slate-400 text-[9px]")}>05</Text>
 </View>

 <View style={tw("flex flex-row gap-8 mt-8 items-start")}>
 <View style={tw("flex-1")}>
 <Text style={tw("text-blue-950 text-3xl font-bold")}>
 Manage your shop from one place.
 </Text>
 </View>
 <View style={tw("flex-1 flex flex-col gap-3")}>
 <Text style={tw("text-slate-700 text-[11px]")}>
 Behind the customer storefront, RazeStore provides an administrative area where the shop owner handles orders, products, stock and business activity.
 </Text>
 <Text style={tw("text-slate-700 text-[11px]")}>
 The screenshots below show the real admin interface, using sample data for illustration.
 </Text>
 </View>
 </View>
 </View>

 <View style={tw("mt-8")}>
 <View style={tw("flex flex-row gap-3")}>
 {adminScreens.map((s) => {
 const imgSrc = loadImage(s.src, "image/png");
 return (
 <View key={s.src} style={tw("flex-1 flex flex-col")}>
 <View style={tw("bg-slate-50 border border-slate-200 h-[112px] w-full")}>
 <Image src={imgSrc} style={styles.screenshot} />
 </View>
 <Text style={tw("text-blue-950 text-[10px] font-bold mt-2")}>
 {s.title}
 </Text>
 <Text style={tw("text-slate-600 text-[9px] mt-1")}>
 {s.description}
 </Text>
 </View>
 );
 })}
 </View>
 </View>

 <View style={tw("mt-6 flex flex-row gap-8 items-start")}>
 <View style={tw("flex-1")}>
 <Text style={tw("text-blue-950 text-[11px] font-bold mb-2")}>
 Business overview
 </Text>
 <Text style={tw("text-slate-700 text-[10px]")}>
 Order status summaries, business insights across modules, and activity reporting are available inside the admin, so you can see how the shop is performing without compiling figures by hand.
 </Text>
 </View>
 <View style={tw("flex-1")}>
 <Text style={tw("text-blue-950 text-[11px] font-bold mb-2")}>
 Also included
 </Text>
 <View style={tw("flex flex-row gap-4")}>
 <View style={tw("flex-1 flex flex-col gap-1")}>
 {extraTools.slice(0, 4).map((tool) => (
 <View key={tool} style={tw("flex flex-row items-start gap-2")}>
 <View style={tw("w-[4px] h-[4px] mt-[5px] bg-slate-400")} />
 <Text style={tw("text-slate-700 text-[10px]")}>{tool}</Text>
 </View>
 ))}
 </View>
 <View style={tw("flex-1 flex flex-col gap-1")}>
 {extraTools.slice(4).map((tool) => (
 <View key={tool} style={tw("flex flex-row items-start gap-2")}>
 <View style={tw("w-[4px] h-[4px] mt-[5px] bg-slate-400")} />
 <Text style={tw("text-slate-700 text-[10px]")}>{tool}</Text>
 </View>
 ))}
 </View>
 </View>
 </View>
 </View>

 <View style={tw("mt-6 border-t border-slate-200 pt-4 flex flex-row gap-6 items-start")}>
 <View style={tw("w-[160px]")}>
 <Text style={tw("text-slate-500 text-[9px] uppercase")}>
 Integrations
 </Text>
 </View>
 <View style={tw("flex-1")}>
 <Text style={tw("text-green-700 text-[10px]")}>
 WhatsApp Business, TikTok Business and other social integrations become active once the required API access, credentials and configuration are completed during Phase 2 of the delivery.
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