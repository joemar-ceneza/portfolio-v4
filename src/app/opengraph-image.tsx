import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background: "#1A1A1D",
          color: "#FFFFFF",
          fontFamily: "monospace",
        }}>
        <div style={{ fontSize: 28, color: "#FF6B6B", marginBottom: 24 }}>Full-Stack Developer</div>
        <div style={{ fontSize: 80, fontWeight: 700, display: "flex" }}>
          Joemar<span style={{ color: "#FF6B6B" }}>.</span>Ceneza
        </div>
        <div style={{ fontSize: 32, color: "rgba(255,255,255,0.6)", marginTop: 24 }}>
          Next.js · React · Node.js · TypeScript
        </div>
      </div>
    ),
    { ...size }
  );
}
