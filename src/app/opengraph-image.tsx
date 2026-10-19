import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";
export const alt = "Temple — кофейня на Фридриха Энгельса, 17, Воронеж";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const [font, interior, logo] = await Promise.all([
    readFile(path.join(process.cwd(), "public/fonts/manrope-regular.ttf")),
    readFile(path.join(process.cwd(), "public/images/og-interior.jpg")),
    readFile(path.join(process.cwd(), "public/images/temple-logo.png")),
  ]);
  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%", background: "#ecebe6", color: "#30332e", fontFamily: "Manrope", padding: 48, gap: 40 }}>
      <div style={{ display: "flex", flexDirection: "column", width: 620, justifyContent: "space-between" }}>
        {/* Native img is required by the ImageResponse renderer. */}
        <img src={`data:image/png;base64,${logo.toString("base64")}`} width={220} height={74} alt="Temple" style={{ objectFit: "contain" }} />
        <div style={{ display: "flex", flexDirection: "column", fontSize: 72, letterSpacing: 0.6, lineHeight: 1.12 }}><span>Твой день.</span><span>В своём темпе.</span></div>
        <div style={{ display: "flex", fontSize: 19, color: "#666b61" }}>Воронеж, Фридриха Энгельса, 17</div>
      </div>
      <img src={`data:image/jpeg;base64,${interior.toString("base64")}`} width={400} height={534} alt="Интерьер Temple" style={{ objectFit: "cover", borderTopLeftRadius: 110 }} />
    </div>,
    { ...size, fonts: [{ name: "Manrope", data: font, weight: 400, style: "normal" }] },
  );
}
