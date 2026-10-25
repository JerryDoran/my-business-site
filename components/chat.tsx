"use client";

import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  X,
  MessageCircle,
  Send,
  Loader2,
  ArrowDownCircleIcon,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import { useChat } from "@ai-sdk/react";

// const Pre = React.forwardRef<
//   HTMLPreElement,
//   React.HTMLAttributes<HTMLPreElement> & { children: React.ReactNode }
// >((props, ref) => <pre ref={ref} {...props} />);
// Pre.displayName = "Pre";

export default function Chat() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showChatIcon, setShowChatIcon] = useState(false);
  const chatIconRef = useRef<HTMLButtonElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    stop,
    reload,
    error,
  } = useChat({ api: "/api/gemini" });

  // Make chatbot visible
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 200) {
        setShowChatIcon(true);
      } else {
        setShowChatIcon(false);
        setIsChatOpen(false);
      }
    }
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function toggleChat() {
    setIsChatOpen(!isChatOpen);
  }

  // This will scroll the chat window automatically
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="flex flex-col">
      <AnimatePresence>
        {showChatIcon && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-4 right-4 z-50"
          >
            <Button
              ref={chatIconRef}
              onClick={toggleChat}
              size="icon"
              className="size-8 rounded-full p-2 shadow-lg"
            >
              {!isChatOpen ? (
                <MessageCircle className="size-12" />
              ) : (
                <ArrowDownCircleIcon />
              )}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-4 z-50 w-[80%] md:w-[500px]"
          >
            <Card className="border-2 bg-slate-900 text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="text-lg font-bold">
                  Chat with TheWebArchitech AI
                </CardTitle>
                <Button
                  onClick={toggleChat}
                  size="sm"
                  variant="ghost"
                  className="px-2 py-0"
                >
                  <X className="size-4" />
                  <span className="sr-only">Close Chat</span>
                </Button>
              </CardHeader>
              <CardContent className="">
                <ScrollArea className="h-[300px] pr-4">
                  {messages?.length === 0 && (
                    <div className="mt-32 flex w-full items-center justify-center gap-3 text-gray-500">
                      No Messages yet
                    </div>
                  )}
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`mb-4 ${
                        message.role === "user" ? "text-right" : "text-left"
                      }`}
                    >
                      <div
                        className={`inline-block rounded-lg px-4 py-2 text-sm ${
                          message.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-gray-600 py-4"
                        }`}
                      >
                        <ReactMarkdown
                          // children={message.content}
                          remarkPlugins={[remarkGfm]}
                          components={{
                            ul: ({ children }) => (
                              <ul className="ml-4 list-disc">{children}</ul>
                            ),
                            li: ({ children }) => (
                              <li className="ml-4 list-decimal">{children}</li>
                            ),
                          }}
                        >
                          {message.content}
                        </ReactMarkdown>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex w-full items-center justify-center gap-3">
                      <Loader2 className="size-5 animate-spin text-primary" />
                      <button
                        className="underline"
                        type="button"
                        onClick={() => stop()}
                      >
                        abort
                      </button>
                    </div>
                  )}
                  {error && (
                    <div className="flex w-full items-center justify-center gap-3">
                      <p>An error occurred.</p>
                      <button
                        className="underline"
                        type="button"
                        onClick={() => reload()}
                      >
                        Retry
                      </button>
                    </div>
                  )}
                  <div ref={scrollRef}></div>
                </ScrollArea>
              </CardContent>
              <CardFooter>
                <form
                  onSubmit={handleSubmit}
                  className="flex w-full items-center space-x-2"
                >
                  <Input
                    value={input}
                    onChange={handleInputChange}
                    className="flex-1"
                    placeholder="Type your message..."
                  />
                  <Button
                    type="submit"
                    // className='size-9'
                    disabled={isLoading}
                    size="icon"
                  >
                    <Send className="size-4" />
                  </Button>
                </form>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
