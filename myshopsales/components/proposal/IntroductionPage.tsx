import { Page, View, Text } from "@react-pdf/renderer";
import { tw } from "@/lib/proposal/tw";

const capabilities = [
 "Online storefront",
 "Product presentation",
 "Shopping cart and checkout",
 "Order management",
 "Payment processing (where configured)",
 "Inventory management",
 "Business reporting",
 "Agreed integrations",
];

export default function IntroductionPage() {
 return (
 <Page size="A4" style={tw("bg-white px-11 py-10 flex flex-col justify-between")}>
 <View>
 <View style={tw("flex flex-row items-center justify-between pb-3 border-b border-slate-200")}>
 <Text style={tw("text-slate-500 text-[11px] uppercase")}>Introduction</Text>
 <Text style={tw("text-slate-400 text-[11px]")}>02</Text>
 </View>

 <View style={tw("flex flex-row gap-6 mt-6 items-start")}>
 <View style={tw("flex-1")}>
 <Text style={tw("text-blue-950 text-3xl font-bold")}>
 A dedicated online shop for your business.
 </Text>
 </View>
 <View style={tw("flex-1 flex flex-col gap-3")}>
 <Text style={tw("text-slate-700 text-[11px]")}>
 RazeStore provides a customized e-commerce system intended to help your shop establish an online shopping experience and manage its business operations from one place.
 </Text>
 <Text style={tw("text-slate-700 text-[11px]")}>
 This proposal explains what the system delivers, how it is delivered, and what your business receives on completion. It is written for business owners, not developers.
 </Text>
 </View>
 </View>
 </View>

 <View>
 <Text style={tw("text-blue-950 text-lg font-bold mb-3")}>
 What this system provides
 </Text>
 <View style={tw("flex flex-row gap-8 items-start")}>
 <View style={tw("flex-1 flex flex-col gap-3")}>
 {capabilities.slice(0, 4).map((item) => (
 <View key={item} style={tw("flex flex-row items-start gap-2")}>
 <View style={tw("w-[5px] h-[5px] mt-[5px] bg-blue-950")} />
 <View style={tw("flex-1")}>
 <Text style={tw("text-slate-700 text-[11px]")}>{item}</Text>
 </View>
 </View>
 ))}
 </View>
 <View style={tw("flex-1 flex flex-col gap-3")}>
 {capabilities.slice(4).map((item) => (
 <View key={item} style={tw("flex flex-row items-start gap-2")}>
 <View style={tw("w-[5px] h-[5px] mt-[5px] bg-blue-950")} />
 <View style={tw("flex-1")}>
 <Text style={tw("text-slate-700 text-[11px]")}>{item}</Text>
 </View>
 </View>
 ))}
 </View>
 </View>
 </View>

 <View style={tw("bg-blue-950 p-6 flex flex-row gap-6 items-start")}>
 <View style={tw("w-[180px]")}>
 <Text style={tw("text-slate-400 text-[9px] uppercase mb-2")}>
 What makes this different
 </Text>
 <Text style={tw("text-white text-[13px] font-bold")}>
 A dedicated deployment, not a shared rental.
 </Text>
 </View>
 <View style={tw("flex-1")}>
 <Text style={tw("text-slate-200 text-[11px]")}>
 RazeStore is not a monthly subscription to a shared shop platform. Each RazeStore system is customized for one business and deployed for that business alone. Your domain, your hosting account, your business data and your administrator access belong to you. Ownership and transfer arrangements are documented in the purchase agreement.
 </Text>
 </View>
 </View>
 </Page>
 );
}