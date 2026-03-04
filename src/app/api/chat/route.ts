
import { ai } from "@/ai/genkit";
import { IJCC_STATIC_KNOWLEDGE } from "@/lib/ijccKnowledge";
import { getLiveContext } from "@/lib/contextRefresher";

export const runtime = "nodejs";

/**
 * Chat API Route using Genkit
 * Handles streaming responses from Gemini 1.5 Flash.
 */
export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Verify key existence on server-side
    if (!process.env.GEMINI_API_KEY && !process.env.GOOGLE_GENAI_API_KEY) {
      console.error("CHATBOT ERROR: GEMINI_API_KEY is missing from environment.");
      return new Response(
        JSON.stringify({ error: "API key not found on server. Please restart your dev server after adding it to .env" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // 1. Fetch live site context (scraping relevant pages for up-to-date info)
    const liveContextData = await getLiveContext();
    
    // 2. Construct the system instruction
    const systemPrompt = `
${IJCC_STATIC_KNOWLEDGE}

ADDITIONAL CONTEXT FROM WEBSITE (LIVE):
${liveContextData.content || "No live content available at this moment."}

TODAY'S DATE: ${new Date().toLocaleDateString("en-IN", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
`;

    // 3. Prepare message history
    const lastMessage = messages[messages.length - 1];
    const history = messages.slice(0, -1).map((m: any) => ({
      role: m.role === "user" ? "user" : "model",
      content: [{ text: m.content }],
    }));

    // 4. Generate stream using project-standard Genkit
    const { stream } = ai.generateStream({
      model: 'googleai/gemini-1.5-flash',
      system: systemPrompt,
      prompt: lastMessage.content,
      history: history,
      config: {
        temperature: 0.7,
        maxOutputTokens: 1024,
      }
    });

    const encoder = new TextEncoder();
    const readableStream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const text = chunk.text;
            if (text) {
              // Send JSON chunk in SSE format
              controller.enqueue(encoder.encode(`data: ${JSON.stringify({ text })}\n\n`));
            }
          }
          controller.enqueue(encoder.encode(`data: [DONE]\n\n`));
          controller.close();
        } catch (err) {
          console.error("Genkit Stream Error:", err);
          controller.error(err);
        }
      }
    });

    return new Response(readableStream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
      },
    });
  } catch (error: any) {
    console.error("CHAT ROUTE CRITICAL ERROR:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Internal Server Error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
