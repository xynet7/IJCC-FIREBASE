
"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { type Message, SUGGESTED_QUESTIONS } from "@/lib/ijccKnowledge";
import MessageBubble from "./MessageBubble";

const WELCOME: Message = {
  id: "welcome",
  role: "assistant",
  content: "Namaste! 🇮🇳🤝🇯🇵 Welcome to **Indo-Japan Chamber of Commerce**!\n\nI can help you with:\n- Membership information\n- Upcoming events & seminars\n- India-Japan trade opportunities\n- Business networking & partnerships\n\nHow can I assist you today?",
  timestamp: new Date(),
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [hasNew, setHasNew] = useState(false);
  
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) { 
      bottomRef.current?.scrollIntoView({ behavior:"smooth" }); 
      setHasNew(false); 
      setTimeout(() => inputRef.current?.focus(), 300); 
    }
  }, [isOpen, messages]);

  const send = useCallback(async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMsg: Message = { 
      id: Date.now().toString(), 
      role: "user", 
      content: text.trim(), 
      timestamp: new Date() 
    };

    setMessages(p => [...p, userMsg]);
    setInput("");
    setIsLoading(true);
    setShowSuggestions(false);

    const assistantId = (Date.now() + 1).toString();
    setMessages(p => [...p, { 
      id: assistantId, 
      role: "assistant", 
      content: "", 
      timestamp: new Date() 
    }]);

    try {
      const allMsgs = [...messages, userMsg].map(m => ({ 
        role: m.role, 
        content: m.content 
      }));

      const res = await fetch("/api/chat", { 
        method: "POST", 
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify({ messages: allMsgs }) 
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.error || `Server Error (${res.status})`);
      }

      if (!res.body) throw new Error("No response stream available");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let fullResponse = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split("\n");

        for (const line of lines) {
          if (line.startsWith("data: ") && line.slice(6).trim() !== "[DONE]") {
            try {
              const data = JSON.parse(line.slice(6));
              if (data.text) {
                fullResponse += data.text;
                setMessages(p => p.map(m => m.id === assistantId ? { ...m, content: fullResponse } : m));
              }
            } catch (e) {
              // Ignore partial JSON parsing errors
            }
          }
        }
      }

      if (!isOpen) setHasNew(true);
    } catch (error: any) {
      console.error("Chat Widget Error:", error);
      setMessages(p => p.map(m => m.id === assistantId ? { 
        ...m, 
        content: `I'm having a little trouble connecting to my brain right now. Error: ${error.message}. Please try again in a few seconds!` 
      } : m));
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, messages, isOpen]);

  const reset = () => { 
    setMessages([WELCOME]); 
    setShowSuggestions(true); 
    setInput(""); 
  };

  const S = {
    btn: { position:"fixed" as const, bottom:"24px", right:"24px", zIndex:9999, width:"60px", height:"60px", borderRadius:"50%", background:"linear-gradient(135deg,#C8102E,#8B0A1F)", border:"none", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 8px 32px rgba(200,16,46,0.4)" },
    window: { position:"fixed" as const, bottom:"24px", right:"24px", zIndex:9999, width:"370px", height:isMinimized?"60px":"590px", borderRadius:"16px", boxShadow:"0 20px 60px rgba(0,0,0,0.15)", overflow:"hidden", display:"flex", flexDirection:"column" as const, transition:"height 0.3s ease", background:"#fff", border:"1px solid #e5e7eb" },
    header: { background:"linear-gradient(135deg,#C8102E,#8B0A1F)", padding:"12px 14px", display:"flex", alignItems:"center", justifyContent:"space-between", cursor:"pointer", flexShrink:0 },
    messages: { flex:1, overflowY:"auto" as const, padding:"12px", background:"#f9fafb" },
    input: { flexShrink:0, padding:"10px 12px", borderTop:"1px solid #e5e7eb", background:"#fff" },
    inputRow: { display:"flex", gap:"8px", alignItems:"center", background:"#f3f4f6", borderRadius:"12px", padding:"8px 12px" },
    sendBtn: { width:"32px", height:"32px", borderRadius:"8px", background:"#C8102E", border:"none", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 },
    hdrBtn: { background:"none", border:"none", cursor:"pointer", color:"rgba(255,255,255,0.7)", padding:"4px", borderRadius:"6px" },
  };

  return (
    <>
      <style>{`
        @keyframes bounce { 0%,60%,100%{transform:translateY(0);opacity:0.6} 30%{transform:translateY(-6px);opacity:1} }
        @keyframes fadeIn { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulse { 0%,100%{box-shadow:0 0 0 0 rgba(200,16,46,0.4)} 50%{box-shadow:0 0 0 10px rgba(200,16,46,0)} }
        .ijcc-msg{animation:fadeIn 0.25s ease-out}
        .ijcc-suggest:hover{background:#fff0f3!important;border-color:#C8102E!important}
        .ijcc-hbtn:hover{background:rgba(255,255,255,0.2)!important}
        .ijcc-scroll::-webkit-scrollbar{width:3px} .ijcc-scroll::-webkit-scrollbar-thumb{background:#C8102E44;border-radius:4px}
      `}</style>

      {!isOpen && (
        <button style={{...S.btn, animation:"pulse 2s ease-in-out infinite"}} onClick={() => setIsOpen(true)} aria-label="Open chat">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          {hasNew && <span style={{ position:"absolute", top:"4px", right:"4px", width:"12px", height:"12px", background:"#facc15", borderRadius:"50%", border:"2px solid #fff" }} />}
        </button>
      )}

      {isOpen && (
        <div style={S.window}>
          <div style={S.header} onClick={() => setIsMinimized(!isMinimized)}>
            <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
              <div style={{ width:"36px", height:"36px", borderRadius:"50%", background:"#fff", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                <span style={{ color:"#C8102E", fontWeight:900, fontSize:"16px" }}>I</span>
              </div>
              <div>
                <div style={{ color:"#fff", fontWeight:700, fontSize:"14px" }}>IJCC Assistant</div>
                <div style={{ color:"rgba(255,255,255,0.7)", fontSize:"11px", display:"flex", alignItems:"center", gap:"4px" }}>
                  <span style={{ width:"6px", height:"6px", borderRadius:"50%", background:"#4ade80", display:"inline-block" }}/>
                  Indo-Japan Chamber of Commerce
                </div>
              </div>
            </div>
            <div style={{ display:"flex", gap:"2px" }} onClick={e => e.stopPropagation()}>
              <button className="ijcc-hbtn" style={S.hdrBtn} onClick={reset} title="Reset">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.75"/></svg>
              </button>
              <button className="ijcc-hbtn" style={S.hdrBtn} onClick={() => setIsMinimized(!isMinimized)}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points={isMinimized?"18 15 12 9 6 15":"18 9 12 15 6 9"}/></svg>
              </button>
              <button className="ijcc-hbtn" style={S.hdrBtn} onClick={() => { setIsOpen(false); setIsMinimized(false); }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>
          </div>

          {!isMinimized && <div style={{ height:"3px", background:"linear-gradient(90deg,#FF9933 33%,#fff 33%,#fff 66%,#138808 66%)", flexShrink:0 }} />}

          {!isMinimized && (
            <div className="ijcc-scroll" style={S.messages}>
              {messages.map((m, i) => (
                <div key={m.id} className="ijcc-msg">
                  <MessageBubble message={m} isLatest={i === messages.length - 1} />
                </div>
              ))}
              {showSuggestions && messages.length === 1 && (
                <div style={{ marginTop:"8px" }}>
                  <p style={{ fontSize:"11px", color:"#9ca3af", marginBottom:"6px", paddingLeft:"4px" }}>Suggested questions:</p>
                  {SUGGESTED_QUESTIONS.slice(0,4).map(q => (
                    <button key={q} className="ijcc-suggest" onClick={() => send(q)}
                      style={{ width:"100%", textAlign:"left", fontSize:"12px", padding:"8px 12px", marginBottom:"6px", borderRadius:"10px", background:"#fff", border:"1px solid #e5e7eb", cursor:"pointer", color:"#374151", display:"block" }}>
                      {q}
                    </button>
                  ))}
                </div>
              )}
              <div ref={bottomRef} />
            </div>
          )}

          {!isMinimized && (
            <div style={S.input}>
              <div style={S.inputRow}>
                <input ref={inputRef} type="text" value={input} onChange={e => setInput(e.target.value)}
                  onKeyDown={e => { if (e.key==="Enter" && !e.shiftKey) { e.preventDefault(); send(input); }}}
                  placeholder="Ask about India-Japan trade..." disabled={isLoading}
                  style={{ flex:1, background:"transparent", border:"none", outline:"none", fontSize:"13px", color:"#374151" }} />
                <button style={{...S.sendBtn, opacity:(!input.trim()||isLoading)?0.4:1}} disabled={!input.trim()||isLoading} onClick={() => send(input)}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                </button>
              </div>
              <p style={{ textAlign:"center", fontSize:"10px", color:"#d1d5db", marginTop:"6px" }}>Powered by Gemini AI • IJCC © {new Date().getFullYear()}</p>
            </div>
          )}
        </div>
      )}
    </>
  );
}
