import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { Search } from "lucide-react"

type Conversation = {
  id: string
  name: string
  category: string
  lastMessage: string
  timeLabel: string
  unread: number
  online: boolean
  initial: string
  avatarColor?: string
  avatarUrl?: string
}

const conversations: Conversation[] = [
  {
    id: "1",
    name: "Elegant Moments Photography",
    category: "Photographers",
    lastMessage: "Yes, I have availability for that date. Would you like to...",
    timeLabel: "2m ago",
    unread: 2,
    online: true,
    initial: "E",
    avatarColor: "bg-primary",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    id: "2",
    name: "Grand Ballroom Events",
    category: "Venues",
    lastMessage: "We have a special package for 200 guests that might inte...",
    timeLabel: "1h ago",
    unread: 0,
    online: false,
    initial: "G",
    avatarColor: "bg-primary",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    id: "3",
    name: "Glamour Makeup Studio",
    category: "Makeup Artists",
    lastMessage: "Great! I'll send you some of my recent bridal looks.",
    timeLabel: "2h ago",
    unread: 1,
    online: true,
    initial: "G",
    avatarColor: "bg-primary",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
  },
  {
    id: "4",
    name: "Gourmet Wedding Catering",
    category: "Caterers",
    lastMessage: "You: Can you accommodate vegetarian options?",
    timeLabel: "3d ago",
    unread: 0,
    online: false,
    initial: "G",
    avatarColor: "bg-primary",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    id: "5",
    name: "Floral Dreams Design",
    category: "Decorators",
    lastMessage: "I can create a custom proposal for you.",
    timeLabel: "1w ago",
    unread: 0,
    online: false,
    initial: "F",
    avatarColor: "bg-primary",
    avatarUrl: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=100&h=100&fit=crop",
  },
]

export default function ConversationList() {
  return (
    <div className="flex flex-col h-full bg-background">
      {/* Header Area */}
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground">Messages</h1>
          <Badge className="rounded-full flex items-center justify-center p-0">
            <span className="flex items-center justify-center h-6 w-6">3</span>
          </Badge>
        </div>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search conversations..." 
            className="pl-10"
          />
        </div>
      </div>

      {/* Conversations List */}
      <div className="flex-1 overflow-y-auto">
        {conversations.map((c) => (
          <div
            key={c.id}
            className="group flex items-center gap-4 px-6 py-5 cursor-pointer hover:bg-muted transition-colors border-b border-border last:border-0"
          >
            <div className="relative shrink-0">
              <Avatar className={cn("h-12 w-12", c.avatarColor)}>
                <AvatarImage src={c.avatarUrl} alt={c.name} />
                <AvatarFallback className="text-primary-foreground font-bold">{c.initial}</AvatarFallback>
              </Avatar>
              {c.online && (
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-background" />
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 mb-0.5">
                <h3 className="font-bold text-foreground truncate text-sm leading-tight">
                  {c.name}
                </h3>
                <span className="text-[11px] text-muted-foreground whitespace-nowrap">
                  {c.timeLabel}
                </span>
              </div>
              
              <p className="text-[11px] text-muted-foreground mb-1">
                {c.category}
              </p>
              
              <div className="flex items-center justify-between gap-2">
                <p className={cn(
                  "text-xs truncate leading-normal",
                  c.unread > 0 ? "text-foreground font-medium" : "text-muted-foreground"
                )}>
                  {c.lastMessage}
                </p>
                {c.unread > 0 && (
                  <Badge className="rounded-full flex items-center justify-center p-0 shrink-0">
                    <span className="flex items-center justify-center h-5 w-5 text-[10px]">
                      {c.unread}
                    </span>
                  </Badge>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
