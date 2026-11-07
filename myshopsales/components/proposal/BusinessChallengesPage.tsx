import { Page, View, Text } from "@react-pdf/renderer";
import { tw } from "@/lib/proposal/tw";

const challenges = [
    {
        number: "01",
        title: "Orders spread across many channels",
        body: "A customer messages on WhatsApp, another comments on a Facebook post, and a third sends a direct message on TikTok. Each request sits in a different app, and confirming which orders are still open becomes guesswork.",
    },
    {
        number: "02",
        title: "Manual payment verification",
        body: "A customer says they have sent money, then sends a screenshot. You open your M-Pesa statement, compare the amount, match the reference, and reply. This repeats many times a day.",
    },
    {
        number: "03",
        title: "Stock counted in the owner's head",
        body: "One product may have sold on WhatsApp, another on Instagram, and a third in person at the shop. When the numbers live in different places, the same item can be sold twice before anyone notices.",
    },
    {
        number: "04",
        title: "Orders and requests hard to follow up",
        body: "Without one place listing every order, it is easy to forget who is waiting for delivery, who asked for a refund, and who has already been served.",
    },
    {
        number: "05",
        title: "Limited view of what is selling",
        body: "At the end of the week, it is difficult to say which products moved fastest, which channel brought the most customers, and where money is going — because the information is scattered.",
    },
];

export default function BusinessChallengesPage() {
    return (
        <Page size="A4" style={tw("bg-white px-11 py-10 flex flex-col justify-between")}>
            <View>
                <View style={tw("flex flex-row items-center justify-between pb-3 border-b border-slate-200")}>
                    <Text style={tw("text-slate-500 text-[11px] uppercase")}>Business challenges</Text>
                    <Text style={tw("text-slate-400 text-[11px]")}>03</Text>
                </View>

                <View style={tw("flex flex-row gap-6 mt-6 items-start")}>
                    <View style={tw("flex-1")}>
                        <Text style={tw("text-blue-950 text-3xl font-bold")}>
                            Running a shop through many tools at once.
                        </Text>
                    </View>
                    <View style={tw("flex-1 flex flex-col gap-3")}>
                        <Text style={tw("text-slate-700 text-[11px]")}>
                            Selling online often begins with WhatsApp, social media and in-person visits. Each of these works, but together they create small daily frictions that add up over time.
                        </Text>
                        <Text style={tw("text-slate-700 text-[11px]")}>
                            The challenges below describe the everyday patterns shop owners commonly describe. Not every business experiences all of them, and the scale differs from shop to shop.
                        </Text>
                    </View>
                </View>
            </View>

            <View style={tw("flex flex-col gap-3 mt-6")}>
                {challenges.map((item) => (
                    <View
                        key={item.number}
                        style={tw("flex flex-row gap-5 items-start border border-slate-200 p-4")}
                    >
                        <View style={tw("w-[36px] flex flex-col")}>
                            <Text style={tw("text-blue-950 text-[18px] font-bold")}>
                                {item.number}
                            </Text>
                        </View>
                        <View style={tw("flex-1 flex flex-col gap-1")}>
                            <Text style={tw("text-blue-950 text-[12px] font-bold")}>
                                {item.title}
                            </Text>
                            <Text style={tw("text-slate-700 text-[11px]")}>
                                {item.body}
                            </Text>
                        </View>
                    </View>
                ))}
            </View>

            <View style={tw("mt-6 border-t border-slate-200 pt-5 flex flex-row gap-6 items-start")}>
                <View style={tw("w-[160px]")}>
                    <Text style={tw("text-slate-500 text-[11px] uppercase")}>
                        Why this matters
                    </Text>
                </View>
                <View style={tw("flex-1")}>
                    <Text style={tw("text-slate-700 text-[12px]")}>
                        A connected shop system brings products, orders, payments and reporting into one place. The next pages explain how the customer shopping experience, the shop management experience and the delivery process are structured in RazeStore.
                    </Text>
                </View>
            </View>
        </Page>
    );
}