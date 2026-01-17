
'use client';

import { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, Loader2 } from 'lucide-react';
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

  useEffect(() => {
    if (messages.length > 0) {
      setTimeout(() => {
        const viewport = scrollAreaRef.current?.querySelector('[data-radix-scroll-area-viewport]');
        if (viewport) {
          viewport.scrollTop = viewport.scrollHeight;
        }
      }, 100);
    }
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now(),
      sender: 'user',
      content: input,
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response: SiteAssistantOutput = await askSiteAssistant(input);
      
      let botContent: React.ReactNode = response.responseText;

      if (response.navigation) {
        botContent = (
          <>
            {response.responseText}
            <Button asChild variant="link" className="p-0 h-auto block mt-2 whitespace-normal text-left">
              <Link href={response.navigation.path}>Click here to go to the {response.navigation.label} page.</Link>
            </Button>
          </>
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
        content: "Sorry, I'm having trouble connecting right now. Please try again later.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    if(!isOpen) return;
    setMessages([
        {
            id: 1,
            sender: 'bot',
            content: "Hello! How can I help you today? You can ask me about membership, services, events, and more."
        }
    ]);
  }, [isOpen]);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="default"
          size="icon"
          className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-lg z-50"
          aria-label="Toggle Chatbot"
        >
          {isOpen ? <X className="h-8 w-8" /> : <Bot className="h-8 w-8" />}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        side="top"
        align="end"
        className="w-80 md:w-96 rounded-xl shadow-2xl p-0 border-0"
        sideOffset={16}
      >
        <Card className="w-full h-[60vh] flex flex-col border-0">
          <CardHeader className="flex-row items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-full">
                <Bot className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="font-headline text-xl">IJCC Assistant</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="flex-1 overflow-hidden p-4">
            <ScrollArea className="h-full" ref={scrollAreaRef}>
              <div className="space-y-4 pr-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      'flex items-end gap-2',
                      message.sender === 'user' ? 'justify-end' : 'justify-start'
                    )}
                  >
                    <div
                      className={cn(
                        'max-w-[80%] rounded-lg p-3 text-sm',
                        message.sender === 'user'
                          ? 'bg-primary text-primary-foreground rounded-br-none'
                          : 'bg-muted rounded-bl-none'
                      )}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
                {isLoading && (
                   <div className="flex items-end gap-2 justify-start">
                     <div className="max-w-[80%] rounded-lg p-3 text-sm bg-muted rounded-bl-none">
                       <Loader2 className="h-5 w-5 animate-spin" />
                     </div>
                   </div>
                )}
              </div>
            </ScrollArea>
          </CardContent>
          <CardFooter>
            <form onSubmit={handleSendMessage} className="flex w-full items-center gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                disabled={isLoading}
              />
              <Button type="submit" size="icon" disabled={isLoading || !input.trim()} aria-label="Send Message">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      </PopoverContent>
    </Popover>
  );
}
