import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const maxDuration = 30;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const messages = body.messages || [];

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("Chat API Error: GEMINI_API_KEY is not configured in .env");
      return NextResponse.json({ error: "GEMINI_API_KEY not configured" }, { status: 500 });
    }

    const lastMessage = messages[messages.length - 1];
    if (!lastMessage) {
      return NextResponse.json({ error: "No message provided" }, { status: 400 });
    }

    // Build conversation contents for Gemini
    const contents = messages.map((m: { role: string; content: string }) => ({
      role: m.role === "user" ? "user" : "model",
      parts: [{ text: m.content }],
    }));

    const systemPrompt = `You are the official AI assistant for IJCC (Indo-Japan Chamber of Commerce) at ijcc.in.
Help users with:
- Membership information and benefits
- Upcoming events and seminars
- India-Japan trade and investment opportunities
- Business networking and partnerships
- Japanese companies in India and Indian companies in Japan
Be professional, warm, helpful and concise. Today: ${new Date().toDateString()}`;

    const requestBody = {
      system_instruction: {
        parts: [{ text: systemPrompt }]
      },
      contents: contents,
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 800,
        topP: 0.9,
      },
    };

    // Use non-streaming generateContent for maximum compatibility and stability
    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      }
    );

    if (!geminiRes.ok) {
      const errText = await geminiRes.text();
      console.error("Gemini API Error:", geminiRes.status, errText);
      return NextResponse.json(
        { error: `Gemini API returned ${geminiRes.status}` },
        { status: 502 }
      );
    }

    const data = await geminiRes.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || "I could not generate a response. Please try again.";

    return NextResponse.json({ text });

  } catch (error) {
    console.error("Chat API Critical Crash:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal server error" },
      { status: 500 }
    );
  }
}
