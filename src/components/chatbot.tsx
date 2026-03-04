
'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { MessageCircle, Send, X, Loader2, Bot, User, ArrowRight } from 'lucide-react';
import { askSiteAssistant } from '@/ai/flows/site-assistant-flow';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  action?: {
    label: string;
    href: string;
  };
};

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: 'Hello! I am your IJCC Assistant. How can I help you today?',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await askSiteAssistant(input);
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response.responseText,
        action: response.suggestedAction,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: 'I encountered an error. Please try again later.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-[100]">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            size="icon"
            className="h-10 w-10 rounded-full shadow-xl bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-110"
          >
            {open ? <X className="h-4 w-4" /> : <MessageCircle className="h-4 w-4" />}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[280px] p-0 mr-4 mb-2 sm:w-[300px]" align="end" side="top">
          <Card className="border-none shadow-none">
            <CardHeader className="bg-primary text-primary-foreground rounded-t-lg py-2 px-3">
              <CardTitle className="flex items-center gap-2 text-sm font-headline">
                <Bot className="h-3.5 w-3.5" />
                IJCC Assistant
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ScrollArea ref={scrollRef} className="h-[280px] p-3">
                <div className="space-y-3">
                  {messages.map((m) => (
                    <div
                      key={m.id}
                      className={cn(
                        "flex gap-2",
                        m.role === 'user' ? "flex-row-reverse" : "flex-row"
                      )}
                    >
                      <div className={cn(
                        "h-5 w-5 rounded-full flex items-center justify-center shrink-0",
                        m.role === 'user' ? "bg-accent text-accent-foreground" : "bg-primary/10 text-primary"
                      )}>
                        {m.role === 'user' ? <User className="h-2.5 w-2.5" /> : <Bot className="h-2.5 w-2.5" />}
                      </div>
                      <div className="flex flex-col gap-1.5 max-w-[85%]">
                        <div
                          className={cn(
                            "rounded-xl px-2.5 py-1.5 text-[11px] shadow-sm leading-tight",
                            m.role === 'user'
                              ? "bg-accent text-accent-foreground rounded-tr-none"
                              : "bg-muted text-foreground rounded-tl-none"
                          )}
                        >
                          {m.content}
                        </div>
                        {m.action && (
                          <Button asChild size="sm" variant="outline" className="w-fit rounded-full text-[9px] h-6 px-2">
                            <Link href={m.action.href}>
                              {m.action.label} <ArrowRight className="ml-1 h-2 w-2" />
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex gap-2">
                      <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <Bot className="h-2.5 w-2.5" />
                      </div>
                      <div className="bg-muted rounded-xl rounded-tl-none px-2.5 py-1.5">
                        <Loader2 className="h-2.5 w-2.5 animate-spin text-primary" />
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>
            </CardContent>
            <CardFooter className="p-2 border-t">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex w-full items-center gap-2"
              >
                <Input
                  placeholder="Type a message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 h-7 text-[11px]"
                  disabled={isLoading}
                />
                <Button size="icon" type="submit" disabled={isLoading || !input.trim()} className="h-7 w-7">
                  <Send className="h-3 w-3" />
                </Button>
              </form>
            </CardFooter>
          </Card>
        </PopoverContent>
      </Popover>
    </div>
  );
}
