import { Page, View, Text } from "@react-pdf/renderer";
import { tw } from "@/lib/proposal/tw";

const ownershipItems = [
    {
        label: "Dedicated customized deployment",
        detail: "A shop customized for your business and deployed for you alone — not a shared slot on a platform with other shops.",
        highlight: false,
    },
    {
        label: "Your own business domain",
        detail: "Control of the agreed domain that points to your shop.",
        highlight: false,
    },
    {
        label: "Hosting account and business data",
        detail: "Control of the hosting account and of the business data your shop records.",
        highlight: false,
    },
    {
        label: "Administrative access",
        detail: "Agreed administrator access to manage your own shop.",
        highlight: false,
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
        <Page size="A4" style={tw("bg-white px-11 py-10 flex flex-col")}>
            <View style={tw("flex flex-row items-center justify-between pb-3 border-b border-slate-200")}>
                <Text style={tw("text-slate-500 text-[11px] uppercase")}>Ownership & management</Text>
                <Text style={tw("text-slate-400 text-[11px]")}>09</Text>
            </View>

            <View style={tw("flex flex-row gap-6 mt-6 items-start")}>
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

            <View style={tw("mt-6")}>
                <Text style={tw("text-blue-950 text-[11px] font-bold uppercase mb-3")}>
                    What you control
                </Text>

                <View style={tw("flex flex-row gap-3")}>
                    <View style={tw("flex-1 border border-slate-200 p-3")}>
                        <Text style={tw("text-blue-950 text-[10px] font-bold")}>
                            {ownershipItems[0].label}
                        </Text>
                        <Text style={tw("text-slate-600 text-[10px] mt-1")}>
                            {ownershipItems[0].detail}
                        </Text>
                    </View>
                    <View style={tw("flex-1 border border-slate-200 p-3")}>
                        <Text style={tw("text-blue-950 text-[10px] font-bold")}>
                            {ownershipItems[1].label}
                        </Text>
                        <Text style={tw("text-slate-600 text-[10px] mt-1")}>
                            {ownershipItems[1].detail}
                        </Text>
                    </View>
                </View>

                <View style={tw("flex flex-row gap-3 mt-2")}>
                    <View style={tw("flex-1 border border-slate-200 p-3")}>
                        <Text style={tw("text-blue-950 text-[10px] font-bold")}>
                            {ownershipItems[2].label}
                        </Text>
                        <Text style={tw("text-slate-600 text-[10px] mt-1")}>
                            {ownershipItems[2].detail}
                        </Text>
                    </View>
                    <View style={tw("flex-1 border border-slate-200 p-3")}>
                        <Text style={tw("text-blue-950 text-[10px] font-bold")}>
                            {ownershipItems[3].label}
                        </Text>
                        <Text style={tw("text-slate-600 text-[10px] mt-1")}>
                            {ownershipItems[3].detail}
                        </Text>
                    </View>
                </View>

                <View style={tw("mt-2 border border-green-600 p-3")}>
                    <Text style={tw("text-blue-950 text-[10px] font-bold")}>
                        {ownershipItems[4].label}
                    </Text>
                    <Text style={tw("text-green-700 text-[10px] mt-1")}>
                        {ownershipItems[4].detail}
                    </Text>
                </View>
            </View>

            <View style={tw("mt-5 flex flex-row border border-slate-200")}>
                <View style={tw("w-[130px] p-3 bg-blue-950 flex flex-col justify-center")}>
                    <Text style={tw("text-slate-400 text-[10px] uppercase mb-1")}>
                        Included
                    </Text>
                    <Text style={tw("text-white text-[22px] font-bold")}>
                        3 months
                    </Text>
                    <Text style={tw("text-slate-300 text-[10px] mt-1")}>
                        free support after handover
                    </Text>
                </View>
                <View style={tw("flex-1 p-3 flex flex-col justify-center")}>
                    <Text style={tw("text-slate-700 text-[10px]")}>
                        Covers agreed technical support, troubleshooting, bug fixes and routine assistance for three months after final handover. Continued management after the three-month period can be arranged separately.
                    </Text>
                    <Text style={tw("text-slate-500 text-[10px] mt-2")}>
                        Not included: new features, redesigns, product uploads beyond the agreed scope, or ongoing development. Any additional work is quoted separately.
                    </Text>
                </View>
            </View>

            <View style={tw("mt-5")}>
                <View style={tw("flex flex-row items-end justify-between mb-2")}>
                    <Text style={tw("text-blue-950 text-[11px] font-bold uppercase")}>
                        Separate from ownership
                    </Text>
                    <Text style={tw("text-slate-500 text-[10px]")}>
                        Paid directly to providers
                    </Text>
                </View>
                <View style={tw("flex flex-row gap-6")}>
                    <View style={tw("flex-1")}>
                        {ongoingCosts.slice(0, 2).map((cost) => (
                            <View key={cost.label} style={tw("border-t border-slate-300 pt-2 mb-3")}>
                                <Text style={tw("text-blue-950 text-[10px] font-bold")}>
                                    {cost.label}
                                </Text>
                                <Text style={tw("text-slate-600 text-[10px] mt-1")}>
                                    {cost.detail}
                                </Text>
                            </View>
                        ))}
                    </View>
                    <View style={tw("flex-1")}>
                        {ongoingCosts.slice(2).map((cost) => (
                            <View key={cost.label} style={tw("border-t border-slate-300 pt-2 mb-3")}>
                                <Text style={tw("text-blue-950 text-[10px] font-bold")}>
                                    {cost.label}
                                </Text>
                                <Text style={tw("text-slate-600 text-[10px] mt-1")}>
                                    {cost.detail}
                                </Text>
                            </View>
                        ))}
                    </View>
                </View>
            </View>

            <View style={tw("mt-2 bg-slate-50 border border-slate-200 p-3 flex flex-row gap-6 items-start")}>
                <View style={tw("w-[150px]")}>
                    <Text style={tw("text-slate-500 text-[11px] uppercase")}>
                        Ownership terms
                    </Text>
                </View>
                <View style={tw("flex-1")}>
                    <Text style={tw("text-slate-700 text-[10px]")}>
                        Ownership and transfer arrangements are documented in the purchase agreement. Source-code transfer is not implied. Any shared third-party service remains governed by the terms of the provider that operates it.
                    </Text>
                </View>
            </View>
        </Page>
    );
}