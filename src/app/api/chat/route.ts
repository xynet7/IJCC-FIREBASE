
import { NextRequest } from "next/server";
import { IJCC_STATIC_KNOWLEDGE } from "@/lib/ijccKnowledge";
import { getLiveContext } from "@/lib/contextRefresher";
import { ai } from "@/ai/genkit";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    
    const apiKey = process.env.GOOGLE_GENAI_API_KEY || process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Gemini API key not configured" }), { status: 500 });
    }

    const liveContextData = await getLiveContext();
    const liveSection = liveContextData.content
      ? `\n\nLIVE WEBSITE CONTENT (fetched ${liveContextData.fetchedAt}):\n${liveContextData.content}`
      : "\n\nNOTE: Live website content unavailable. Use static knowledge only.";
    
    const systemPrompt = `${IJCC_STATIC_KNOWLEDGE}${liveSection}\n\nToday: ${new Date().toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}`;

    const history = messages.slice(0, -1).map((msg: { role: string; content: string }) => ({
      role: msg.role === "user" ? ("user" as const) : ("model" as const),
      content: [{ text: msg.content }],
    }));
    
    const lastMessage = messages[messages.length - 1];

    const { stream } = ai.generateStream({
      model: 'googleai/gemini-1.5-flash',
      system: systemPrompt,
      prompt: lastMessage.content,
      history: history,
      config: {
        temperature: 0.7,
        topP: 0.9,
        maxOutputTokens: 1024,
      }
    });

    const encoder = new TextEncoder();
    const responseStream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const text = chunk.text;
            if (text) {
              controller.enqueue(encoder.encode(`data: ${JSON.stringify({ text })}\n\n`));
            }
          }
          controller.enqueue(encoder.encode(`data: [DONE]\n\n`));
          controller.close();
        } catch (error) {
          console.error("Streaming error:", error);
          controller.error(error);
        }
      },
    });

    return new Response(responseStream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
      },
    });
  } catch (error: unknown) {
    console.error("Chat API error:", error);
    const message = error instanceof Error ? error.message : "Internal server error";
    return new Response(JSON.stringify({ error: message }), { status: 500 });
  }
}
