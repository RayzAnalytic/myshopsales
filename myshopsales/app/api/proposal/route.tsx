import { renderToBuffer } from "@react-pdf/renderer";
import { connection } from "next/server";
import BusinessProposalPDF from "@/components/proposal/BusinessProposalPDF";

export async function GET() {
    await connection();
    const buffer = await renderToBuffer(<BusinessProposalPDF />);

    return new Response(new Uint8Array(buffer), {
        headers: {
            "Content-Type": "application/pdf",
            "Cache-Control": "no-store",
        },
    });
}
