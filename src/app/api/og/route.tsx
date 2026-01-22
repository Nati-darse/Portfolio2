import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);

        // Dynamic parameters
        const title = searchParams.get("title") || "Natnael Darsema";
        const description = searchParams.get("description") || "Full-Stack Developer | Next.js 15 Specialist";
        const type = searchParams.get("type") || "Portfolio";

        return new ImageResponse(
            (
                <div
                    style={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "center",
                        backgroundColor: "#020617",
                        padding: "80px",
                        border: "20px solid #10b981",
                    }}
                >
                    {/* Logo element */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "60px",
                            height: "60px",
                            backgroundColor: "rgba(16, 185, 129, 0.1)",
                            borderRadius: "8px",
                            border: "1px solid rgba(16, 185, 129, 0.2)",
                            marginBottom: "40px",
                        }}
                    >
                        <span style={{ fontSize: "32px", fontWeight: "bold", color: "#10b981", fontFamily: "monospace" }}>
                            N
                        </span>
                    </div>

                    <div
                        style={{
                            fontSize: "12px",
                            fontFamily: "monospace",
                            color: "#10b981",
                            textTransform: "uppercase",
                            letterSpacing: "4px",
                            marginBottom: "20px",
                        }}
                    >
                        {type} // System_Ready
                    </div>

                    <div
                        style={{
                            fontSize: "80px",
                            fontWeight: "900",
                            color: "#f8fafc",
                            lineHeight: "0.9",
                            letterSpacing: "-4px",
                            marginBottom: "40px",
                        }}
                    >
                        {title}
                    </div>

                    <div
                        style={{
                            fontSize: "24px",
                            color: "#a1a1aa",
                            maxWidth: "800px",
                            lineHeight: "1.4",
                        }}
                    >
                        {description}
                    </div>

                    <div
                        style={{
                            position: "absolute",
                            bottom: "80px",
                            right: "80px",
                            display: "flex",
                            gap: "10px"
                        }}
                    >
                        <div style={{ backgroundColor: "#10b981", color: "#020617", padding: "8px 16px", borderRadius: "4px", fontSize: "14px", fontWeight: "bold" }}>
                            VIEW PROJECT
                        </div>
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
            }
        );
    } catch (e: any) {
        console.log(`${e.message}`);
        return new Response(`Failed to generate the image`, {
            status: 500,
        });
    }
}
