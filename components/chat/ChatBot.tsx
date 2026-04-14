"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { Send, X, ChevronLeft } from "lucide-react"; // Adicionei ChevronLeft para o mobile
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import LogoImage from "@/public/images/logo01.png";

interface Message {
  role: "user" | "gemini";
  content: string;
}

const SUGGESTIONS = [
  "Quais são os serviços da Braincore?",
  "Como posso impulsionar minha marca?",
  "Falar com um consultor",
  "Tabela de preços",
];

const ChatBot: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([
      {
        role: "gemini",
        content:
          "Olá! Eu sou o assistente virtual da **Braincore**. Como posso ajudar a impulsionar sua marca hoje?",
      },
    ]);
  }, []);

  const scrollToBottom = useCallback(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: scrollContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, scrollToBottom]);

  const sendMessage = async (e?: React.FormEvent, overrideMessage?: string) => {
    e?.preventDefault();
    const messageToSend = overrideMessage || inputMessage;

    if (!messageToSend.trim() || isLoading) return;

    const userMsg = messageToSend.trim();
    setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId, message: userMsg }),
      });

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let accumulatedResponse = "";

      setMessages((prev) => [...prev, { role: "gemini", content: "" }]);

      while (true) {
        const { value, done } = await reader!.read();
        if (done) break;
        accumulatedResponse += decoder.decode(value, { stream: true });

        setMessages((prev) => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].content = accumulatedResponse;
          return newMessages;
        });
      }
    } catch (error) {
      console.error("Erro no chat:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const isInputEmpty = !inputMessage.trim();
  const isDisabled = isLoading || isInputEmpty;

  const TypingDots = () => (
    <div className="flex items-center gap-1.5 px-1 h-3">
      {[0, 0.15, 0.3].map((delay) => (
        <motion.span
          key={delay}
          initial={{ y: 0 }}
          animate={{ y: [-3, 2, -3] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          }}
          className="w-1.5 h-1.5 bg-primary/60 rounded-full shadow-sm"
        />
      ))}
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }} // Mobile sobe do fundo
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      className={cn(
        // Responsividade Principal
        "fixed inset-0 z-[100] flex flex-col transition-all duration-300",
        // Desktop: vira um modal posicionado
        "md:inset-auto md:bottom-24 md:right-6 md:w-[420px] md:h-[600px] md:rounded-2xl shadow-2xl overflow-hidden"
      )}
    >
      <Card className="flex flex-col h-full w-full border-0 md:border-2 border-border bg-background/95 backdrop-blur-xl shadow-none md:shadow-2xl rounded-none md:rounded-2xl overflow-hidden">
        {/* Header Responsivo */}
        <CardHeader className="p-4 bg-muted/50 border-b border-border flex flex-row items-center justify-between shrink-0">
          <div className="flex items-center gap-1">
            <div className="relative flex items-center justify-center overflow-hidden">
              <Image
                src={LogoImage}
                alt="Braincore Logo"
                width={42}
                height={42}
                className="object-contain"
                priority
              />
            </div>

            <div className="flex flex-col justify-center">
              <CardTitle className="text-lg font-bold tracking-tight leading-tight text-white">
                Brain
                <span className="font-medium bg-gradient-to-r from-blue-300 to-blue-900 text-transparent bg-clip-text">
                  core
                </span>
                <span className="ml-1 text-xs font-light text-muted-foreground/70">
                  AI
                </span>
              </CardTitle>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                </span>
                <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.15em]">
                  Online
                </span>
              </div>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="rounded-full h-9 w-9 hover:bg-foreground/10 hover:text-white transition-colors cursor-pointer"
          >
            <X size={20} />
          </Button>
        </CardHeader>

        {/* Corpo das Mensagens */}
        <div
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-thin scrollbar-thumb-primary/10"
        >
          {messages.map((msg, index) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              key={index}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={cn(
                  "max-w-[88%] md:max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed",
                  msg.role === "user"
                    ? "bg-primary text-primary-foreground rounded-tr-none shadow-md"
                    : "bg-muted text-foreground rounded-tl-none border border-border shadow-sm"
                )}
              >
                <div className="prose prose-sm dark:prose-invert prose-p:m-0 break-words leading-relaxed">
                  <ReactMarkdown>{msg.content}</ReactMarkdown>
                </div>
              </div>
            </motion.div>
          ))}

          <AnimatePresence>
            {isLoading && messages[messages.length - 1]?.content === "" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex justify-start"
              >
                <div className="bg-muted px-4 py-4 rounded-2xl rounded-tl-none border border-border shadow-sm flex items-center gap-3">
                  <span className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-tighter">
                    Braincore AI
                  </span>
                  <TypingDots />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Sugestões e Input (Sticky no fundo) */}
        <div className="bg-background/80 backdrop-blur-md border-t border-border p-4 space-y-4">
          <AnimatePresence>
            {!isLoading && messages.length <= 1 && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-wrap gap-2"
              >
                {SUGGESTIONS.map((suggestion, i) => (
                  <button
                    key={i}
                    onClick={() => sendMessage(undefined, suggestion)}
                    className="rounded-full px-4 py-2 text-[11px] font-semibold bg-secondary/30 border border-primary/20 text-white hover:bg-primary transition-all active:scale-95 whitespace-nowrap"
                  >
                    {suggestion}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center gap-2">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Digite sua mensagem..."
              className={cn(
                "bg-card border-primary/20 h-11 grow basis-0 rounded-full px-5 py-3 text-sm shadow-inner transition-all",
                "focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-0 focus-visible:border-primary"
              )}
              disabled={isLoading}
            />
            <Button
              size="icon"
              className={cn(
                "h-12 w-12 md:h-11 md:w-11 shrink-0 rounded-full shadow-lg transition-all",
                isDisabled
                  ? "bg-muted-foreground/20"
                  : "bg-primary hover:scale-105 active:scale-95"
              )}
              onClick={() => sendMessage()}
              disabled={isDisabled}
            >
              <Send className="h-5 w-5 text-white" />
            </Button>
          </div>
          <p className="text-[9px] text-center text-muted-foreground font-semibold tracking-[0.2em] uppercase opacity-40">
            Braincore Intelligence System
          </p>
        </div>
      </Card>
    </motion.div>
  );
};

export default ChatBot;
