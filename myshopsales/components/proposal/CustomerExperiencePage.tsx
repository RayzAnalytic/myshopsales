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

const steps = [
 { n: "1", label: "Opens the shop" },
 { n: "2", label: "Browses products" },
 { n: "3", label: "Views product details" },
 { n: "4", label: "Adds items to cart" },
 { n: "5", label: "Proceeds to checkout" },
 { n: "6", label: "Selects payment method" },
 { n: "7", label: "Places the order" },
];

const screens = [
 {
 src: "images/storefrontposter.png",
 caption: "The storefront homepage",
 note: "Customers arrive on a branded shop, not a marketplace.",
 },
 {
 src: "images/productlisting.png",
 caption: "Product listing",
 note: "Products organised by category, with images and prices.",
 },
 {
 src: "images/productdetails.png",
 caption: "Product details",
 note: "Photos, description, price and add-to-cart in one view.",
 },
];

export default function CustomerExperiencePage() {
 return (
 <Page size="A4" style={tw("bg-white px-11 py-10 flex flex-col justify-between")}>
 <View>
 <View style={tw("flex flex-row items-center justify-between pb-3 border-b border-slate-200")}>
 <Text style={tw("text-slate-500 text-[12px] uppercase")}>Customer experience</Text>
 <Text style={tw("text-slate-400 text-[12px]")}>04</Text>
 </View>

 <View style={tw("flex flex-row gap-6 mt-6 items-start")}>
 <View style={tw("flex-1")}>
 <Text style={tw("text-blue-950 text-3xl font-bold")}>
 What a customer sees when they visit your shop.
 </Text>
 </View>
 <View style={tw("flex-1 flex flex-col gap-3")}>
 <Text style={tw("text-slate-700 text-[11px]")}>
 From first visit to placing an order, the customer journey is designed to feel familiar. No account is required to browse, and every step is a single click away.
 </Text>
 <Text style={tw("text-slate-700 text-[11px]")}>
 The screenshots below show the real RazeStore storefront, using demonstration data for illustration.
 </Text>
 </View>
 </View>
 </View>

 <View style={tw("mt-8")}>
 <Text style={tw("text-blue-950 text-[12px] font-bold uppercase mb-3")}>
 The customer journey
 </Text>
 <View style={tw("flex flex-row justify-between border-t border-b border-slate-200 py-4")}>
 {steps.map((s) => (
 <View key={s.n} style={tw("flex flex-col items-center w-[68px]")}>
 <View style={tw("w-[22px] h-[22px] bg-blue-950 items-center justify-center mb-2")}>
 <Text style={tw("text-white text-[12px] font-bold")}>{s.n}</Text>
 </View>
 <Text style={tw("text-slate-700 text-[10px] text-center")}>
 {s.label}
 </Text>
 </View>
 ))}
 </View>
 </View>

 <View style={tw("mt-6")}>
 <View style={tw("flex flex-row gap-3")}>
 {screens.map((s) => {
 const imgSrc = loadImage(s.src, "image/png");
 return (
 <View key={s.src} style={tw("flex-1 flex flex-col")}>
 <View style={tw("bg-slate-50 border border-slate-200 h-[112px] w-full")}>
 <Image src={imgSrc} style={styles.screenshot} />
 </View>
 <Text style={tw("text-blue-950 text-[12px] font-bold mt-2")}>
 {s.caption}
 </Text>
 <Text style={tw("text-slate-600 text-[9px] mt-1")}>
 {s.note}
 </Text>
 </View>
 );
 })}
 </View>
 </View>

 <View style={tw("mt-6 border-t border-slate-200 pt-4 flex flex-row gap-6 items-start")}>
 <View style={tw("w-[160px]")}>
 <Text style={tw("text-slate-500 text-[11px] uppercase")}>
 What this means
 </Text>
 </View>
 <View style={tw("flex-1")}>
 <Text style={tw("text-slate-700 text-[11px]")}>
 A customer can find what they need, understand pricing and place an order without leaving the shop or contacting the owner to confirm availability. Payment options available at checkout are confirmed with you and enabled once configured and tested.
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