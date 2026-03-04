
let cachedContext: string | null = null;
let lastFetchTime: number = 0;
const CACHE_DURATION_MS = 24 * 60 * 60 * 1000;

export async function getLiveContext(): Promise<{ content: string; fetchedAt: string }> {
  const now = Date.now();
  if (cachedContext && now - lastFetchTime < CACHE_DURATION_MS) {
    return { content: cachedContext, fetchedAt: new Date(lastFetchTime).toISOString() };
  }
  try {
    const pagesToFetch = [
      "https://www.ijcc.in",
      "https://www.ijcc.in/about",
      "https://www.ijcc.in/events",
      "https://www.ijcc.in/membership",
    ];
    const results = await Promise.allSettled(
      pagesToFetch.map(async (url) => {
        try {
          const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
          if (!res.ok) return "";
          const html = await res.text();
          return html
            .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
            .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
            .replace(/<[^>]+>/g, " ")
            .replace(/\s+/g, " ")
            .trim()
            .substring(0, 2000);
        } catch { return ""; }
      })
    );
    const liveContent = results
      .filter((r): r is PromiseFulfilledResult<string> => r.status === "fulfilled" && r.value.length > 0)
      .map((r, i) => `[From ${pagesToFetch[i]}]:\n${r.value}`)
      .join("\n\n---\n\n");
    if (liveContent.trim()) {
      cachedContext = liveContent;
      lastFetchTime = now;
      return { content: liveContent, fetchedAt: new Date(now).toISOString() };
    }
  } catch (error) {
    console.error("Live context fetch failed:", error);
  }
  return { content: "", fetchedAt: new Date().toISOString() };
}
