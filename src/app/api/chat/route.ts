
import { NextResponse } from "next/server";

// This route is now legacy as the chatbot uses the Firebase Gemini Extension directly via Firestore.
// We return a 410 Gone to indicate the migration is complete.
export async function POST() {
  return new NextResponse(
    JSON.stringify({ 
      error: "This endpoint is deprecated. The chatbot now uses the Firebase Gemini Extension directly." 
    }), 
    { status: 410, headers: { "Content-Type": "application/json" } }
  );
}
