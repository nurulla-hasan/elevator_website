import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import { SearchInput } from "@/components/ui/custom/search-input"

export type Conversation = {
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

export const conversations: Conversation[] = [
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
  {
    id: "6",
    name: "Royal Invitation Cards",
    category: "Stationery",
    lastMessage: "The draft for your wedding cards is ready for review.",
    timeLabel: "1d ago",
    unread: 3,
    online: true,
    initial: "R",
    avatarColor: "bg-primary",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
  },
  {
    id: "7",
    name: "Sparkle Jewelry Shop",
    category: "Jewelers",
    lastMessage: "We have the necklace you were looking for in stock.",
    timeLabel: "2d ago",
    unread: 0,
    online: false,
    initial: "S",
    avatarColor: "bg-primary",
    avatarUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop",
  },
  {
    id: "8",
    name: "Elite Transport Services",
    category: "Transport",
    lastMessage: "Your luxury car is booked for the wedding day.",
    timeLabel: "4d ago",
    unread: 0,
    online: true,
    initial: "E",
    avatarColor: "bg-primary",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  },
  {
    id: "9",
    name: "Sweet Delights Bakery",
    category: "Cakes",
    lastMessage: "Would you like a tasting session for the cake?",
    timeLabel: "5d ago",
    unread: 1,
    online: false,
    initial: "S",
    avatarColor: "bg-primary",
    avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop",
  },
  {
    id: "10",
    name: "Harmony Music Band",
    category: "Entertainment",
    lastMessage: "We've finalized the playlist for your reception.",
    timeLabel: "1w ago",
    unread: 0,
    online: true,
    initial: "H",
    avatarColor: "bg-primary",
    avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
  },
]

type ConversationListProps = {
  selectedId?: string
  onSelect: (id: string) => void
}

export default function ConversationList({ selectedId, onSelect }: ConversationListProps) {
  return (
    <div className="h-[calc(100vh-80px)] border-r w-full">
      {/* Header Area */}
      <div className="p-4 border-b space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-foreground">Messages</h1>
          <Badge className="rounded-full flex items-center justify-center p-0">
            <span className="flex items-center justify-center h-4 w-4">3</span>
          </Badge>
        </div>
        
        <SearchInput
          placeholder="Search conversations..."
          className="md:max-w-full"
        />
      </div>

      {/* Conversations List */}
      <ScrollArea className="h-[calc(100vh-116px)]">
        {conversations.map((c) => (
          <div
            key={c.id}
            onClick={() => onSelect(c.id)}
            className={cn(
              "group flex items-center gap-4 p-4 cursor-pointer transition-colors border-b last:border-0 flex-wrap",
              selectedId === c.id ? "bg-primary/10" : "hover:bg-primary/10"
            )}
          >
            <div className="relative shrink-0">
              <Avatar className={cn("h-12 w-12", c.avatarColor)}>
                <AvatarImage src={c.avatarUrl} alt={c.name} />
                <AvatarFallback className="text-primary-foreground font-semibold">{c.initial}</AvatarFallback>
              </Avatar>
              {c.online && (
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-background" />
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 mb-0.5">
                <h3 className="font-semibold text-foreground truncate text-sm leading-tight">
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
                    <span className="flex items-center justify-center h-4 w-4 text-[10px]">
                      {c.unread}
                    </span>
                  </Badge>
                )}
              </div>
            </div>
          </div>
        ))}
      </ScrollArea>
    </div>
  )
}
