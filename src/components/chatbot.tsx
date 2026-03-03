'use client';

import { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, Loader2, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { askSiteAssistant } from '@/ai/flows/site-assistant-flow';
import type { SiteAssistantOutput } from '@/lib/definitions';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type Message = {
  id: number;
  sender: 'user' | 'bot';
  content: React.ReactNode;
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (messages.length > 0) {
      const timer = setTimeout(() => {
        const viewport = scrollAreaRef.current?.querySelector('[data-radix-scroll-area-viewport]');
        if (viewport) {
          viewport.scrollTop = viewport.scrollHeight;
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    const userMessage: Message = {
      id: Date.now(),
      sender: 'user',
      content: userText,
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response: SiteAssistantOutput = await askSiteAssistant(userText);
      
      let botContent: React.ReactNode = response.responseText;

      if (response.navigation) {
        botContent = (
          <div className="space-y-2">
            <p>{response.responseText}</p>
            <Button asChild variant="outline" size="sm" className="w-full justify-start text-xs font-semibold border-primary/20 bg-primary/5 hover:bg-primary/10">
              <Link href={response.navigation.path} onClick={() => setIsOpen(false)}>
                Go to {response.navigation.label}
              </Link>
            </Button>
          </div>
        );
      }
      
      const botMessage: Message = {
        id: Date.now() + 1,
        sender: 'bot',
        content: botContent,
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Chatbot error:', error);
      const errorMessage: Message = {
        id: Date.now() + 1,
        sender: 'bot',
        content: "I'm having trouble connecting to my brain right now. Please try again in a few moments.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  
  // Initial welcome message
  useEffect(() => {
    if(!isOpen || messages.length > 0) return;
    setMessages([
        {
            id: 1,
            sender: 'bot',
            content: "Hello! I'm the IJCC Assistant. How can I help you today? You can ask me about membership, the Japan Immersion Program, or our services."
        }
    ]);
  }, [isOpen, messages.length]);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="default"
          size="icon"
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-2xl z-50 hover:scale-110 transition-transform bg-primary hover:bg-primary/90"
          aria-label="Toggle Chatbot"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        side="top"
        align="end"
        className="w-80 md:w-96 rounded-2xl shadow-2xl p-0 border-0 overflow-hidden"
        sideOffset={16}
      >
        <Card className="w-full h-[500px] flex flex-col border-0 rounded-none">
          <CardHeader className="bg-primary text-primary-foreground py-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-full">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <CardTitle className="font-headline text-lg">IJCC Assistant</CardTitle>
                <p className="text-[10px] text-primary-foreground/70">Powered by AI</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex-1 overflow-hidden p-0 bg-slate-50/50">
            <ScrollArea className="h-full px-4 pt-4" ref={scrollAreaRef}>
              <div className="space-y-4 pb-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      'flex items-end gap-2',
                      message.sender === 'user' ? 'justify-end' : 'justify-start'
                    )}
                  >
                    {message.sender === 'bot' && (
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mb-1">
                            <Bot className="h-3 w-3 text-primary" />
                        </div>
                    )}
                    <div
                      className={cn(
                        'max-w-[85%] rounded-2xl p-3 text-sm shadow-sm',
                        message.sender === 'user'
                          ? 'bg-primary text-primary-foreground rounded-br-none'
                          : 'bg-white text-foreground rounded-bl-none border border-border/50'
                      )}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
                {isLoading && (
                   <div className="flex items-center gap-2 justify-start">
                     <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Bot className="h-3 w-3 text-primary" />
                     </div>
                     <div className="bg-white border border-border/50 rounded-2xl rounded-bl-none p-3 shadow-sm">
                       <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                     </div>
                   </div>
                )}
              </div>
            </ScrollArea>
          </CardContent>
          <CardFooter className="p-3 border-t bg-white">
            <form onSubmit={handleSendMessage} className="flex w-full items-center gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                disabled={isLoading}
                className="bg-slate-50 border-none focus-visible:ring-1 focus-visible:ring-primary h-10"
              />
              <Button type="submit" size="icon" disabled={isLoading || !input.trim()} className="h-10 w-10 shrink-0">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      </PopoverContent>
    </Popover>
  );
}