import { ImageResponse } from "next/og";
import { formationEntries } from "@/lib/formations-data";

export const runtime = "edge";
export const alt = "Alertis Formation — Centre de formation santé & sécurité au travail";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background:
            "linear-gradient(135deg, #f5fafa 0%, #ffffff 50%, #d9e9e7 100%)",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Red accent bar top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 8,
            background: "#bf000d",
          }}
        />

        {/* Top: brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              background: "#bf000d",
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            }}
          />
          <div
            style={{
              fontSize: 36,
              fontWeight: 900,
              color: "#1a1f24",
              letterSpacing: "-0.02em",
            }}
          >
            Alertis Formation
          </div>
        </div>

        {/* Middle: tagline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            maxWidth: 900,
          }}
        >
          <div
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: "#bf000d",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
            }}
          >
            Santé & sécurité au travail
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 900,
              color: "#1a1f24",
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
            }}
          >
            Nous formons vos équipes à la{" "}
            <span style={{ color: "#bf000d" }}>prévention des risques</span>.
          </div>
        </div>

        {/* Bottom: meta strip */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "2px solid #1a1f24",
            paddingTop: 24,
            fontSize: 20,
            color: "#495369",
          }}
        >
          <div style={{ display: "flex", gap: 32 }}>
            <span style={{ fontWeight: 700, color: "#1a1f24" }}>
              {formationEntries.length} formations
            </span>
            <span style={{ fontWeight: 700, color: "#1a1f24" }}>
              Partout en France
            </span>
            <span style={{ fontWeight: 700, color: "#1a1f24" }}>
              Formateurs INRS
            </span>
          </div>
          <div style={{ fontWeight: 700, color: "#bf000d", fontSize: 22 }}>
            alertisformation.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
