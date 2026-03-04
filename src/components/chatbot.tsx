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
            className="h-12 w-12 rounded-full shadow-xl bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-110"
          >
            {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[300px] p-0 mr-4 mb-2 sm:w-[320px]" align="end" side="top">
          <Card className="border-none shadow-none">
            <CardHeader className="bg-primary text-primary-foreground rounded-t-lg py-3 px-4">
              <CardTitle className="flex items-center gap-2 text-base font-headline">
                <Bot className="h-4 w-4" />
                IJCC Assistant
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ScrollArea ref={scrollRef} className="h-[320px] p-3">
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
                        "h-6 w-6 rounded-full flex items-center justify-center shrink-0",
                        m.role === 'user' ? "bg-accent text-accent-foreground" : "bg-primary/10 text-primary"
                      )}>
                        {m.role === 'user' ? <User className="h-3 w-3" /> : <Bot className="h-3 w-3" />}
                      </div>
                      <div className="flex flex-col gap-1.5 max-w-[85%]">
                        <div
                          className={cn(
                            "rounded-xl px-3 py-1.5 text-xs shadow-sm leading-relaxed",
                            m.role === 'user'
                              ? "bg-accent text-accent-foreground rounded-tr-none"
                              : "bg-muted text-foreground rounded-tl-none"
                          )}
                        >
                          {m.content}
                        </div>
                        {m.action && (
                          <Button asChild size="sm" variant="outline" className="w-fit rounded-full text-[10px] h-7 px-3">
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
                      <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <Bot className="h-3 w-3" />
                      </div>
                      <div className="bg-muted rounded-xl rounded-tl-none px-3 py-1.5">
                        <Loader2 className="h-3 w-3 animate-spin text-primary" />
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>
            </CardContent>
            <CardFooter className="p-3 border-t">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex w-full items-center gap-2"
              >
                <Input
                  placeholder="Ask a question..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 h-8 text-xs"
                  disabled={isLoading}
                />
                <Button size="icon" type="submit" disabled={isLoading || !input.trim()} className="h-8 w-8">
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
