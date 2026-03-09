"use client";

import { Suspense, useState } from "react";
import ConversationList, {
  conversations,
} from "@/components/main-route/chat/conversation-list";
import ChatEmptyState from "@/components/main-route/chat/empty-state";
import ChatWindow from "@/components/main-route/chat/chat-window";
import { cn } from "@/lib/utils";

function ChatContent() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedConversation = conversations.find((c) => c.id === selectedId);

  return (
    <div>
      <div className="flex screen-height overflow-hidden">
        {/* Left Sidebar: Conversations */}
        <div
          className={cn(
            "w-full lg:w-100 shrink-0 border-r flex flex-col",
            selectedId ? "hidden lg:flex" : "flex",
          )}
        >
          <ConversationList
            selectedId={selectedId || undefined}
            onSelect={setSelectedId}
          />
        </div>

        {/* Right Main Content: Empty State or Chat Window */}
        <div
          className={cn(
            "flex-1 items-center justify-center relative",
            selectedId ? "flex" : "hidden lg:flex",
          )}
        >
          {selectedConversation ? (
            <ChatWindow
              conversation={{
                name: selectedConversation.name,
                category: selectedConversation.category,
                avatarUrl: selectedConversation.avatarUrl,
                initial: selectedConversation.initial,
                online: selectedConversation.online,
              }}
              onBack={() => setSelectedId(null)}
            />
          ) : (
            <ChatEmptyState />
          )}
        </div>
      </div>
    </div>
  );
}

export default function ChatPage() {
  return (
    <Suspense fallback={<div>Loading chat...</div>}>
      <ChatContent />
    </Suspense>
  );
}
