
import ConversationList from "@/components/main-route/chat/conversation-list"
import ChatEmptyState from "@/components/main-route/chat/empty-state"

export default function ChatPage() {
  return (
    <div className="bg-muted">
      <div>
        <div className="flex screen-height">
          {/* Left Sidebar: Conversations */}
          <div className="w-full lg:w-100 shrink-0 border-r flex flex-col">
            <ConversationList />
          </div>

          {/* Right Main Content: Empty State or Chat Window */}
          <div className="hidden lg:flex flex-1 items-center justify-center relative">
            <ChatEmptyState />
          </div>
        </div>
      </div>
    </div>
  )
}
