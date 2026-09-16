import { useEffect } from "react";
import "@n8n/chat/style.css";

export default function ChatBot() {
  useEffect(() => {
    let cancelled = false;

    const initChat = async () => {
      const { createChat } = await import("@n8n/chat");
      if (cancelled) return;

      createChat({
        webhookUrl: "https://nolan-cahil.app.n8n.cloud/webhook/46d6673a-2e6f-483b-876b-ac7eb44726bc/chat",
        initialMessages: [
          "Hi there! 👋",
          "My name is Shawaiz. How can I assist you today?",
        ],
      });
    };

    initChat();

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
