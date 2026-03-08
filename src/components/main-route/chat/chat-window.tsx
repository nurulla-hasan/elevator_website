import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { MoreVertical, Send, ArrowLeft } from "lucide-react"

type Message = {
  id: string
  text: string
  sender: 'me' | 'vendor'
  time: string
}

type ChatWindowProps = {
  conversation: {
    name: string
    category: string
    avatarUrl?: string
    initial: string
    online: boolean
  }
  onBack?: () => void
}

const mockMessages: Message[] = [
  { id: "1", text: "Hi there! I'm interested in your photography services for my wedding next June.", sender: "me", time: "10:00 AM" },
  { id: "2", text: "Hello! Congratulations on your engagement! I'd love to help capture your special day.", sender: "vendor", time: "10:05 AM" },
  { id: "3", text: "Yes, I have availability for June. Would you like to see my full wedding packages?", sender: "vendor", time: "10:06 AM" },
  { id: "4", text: "That would be great, thank you!", sender: "me", time: "10:10 AM" },
  { id: "5", text: "What kind of photography style do you specialize in? I really like candid shots.", sender: "me", time: "10:12 AM" },
  { id: "6", text: "I specialize in both candid and cinematic photography. I'll send some samples.", sender: "vendor", time: "10:15 AM" },
  { id: "7", text: "That sounds perfect. How many photographers do you usually bring to a wedding?", sender: "me", time: "10:18 AM" },
  { id: "8", text: "Usually two main photographers and one assistant for lighting and equipment.", sender: "vendor", time: "10:20 AM" },
  { id: "9", text: "Got it. Do you also provide pre-wedding shoot packages?", sender: "me", time: "10:22 AM" },
  { id: "10", text: "Yes, we have a separate pre-wedding package or you can bundle it with the main event.", sender: "vendor", time: "10:25 AM" },
  { id: "11", text: "How long does it take to deliver the edited photos after the wedding?", sender: "me", time: "10:30 AM" },
  { id: "12", text: "Typically it takes 4 to 6 weeks for the full edited gallery. We send teasers within a week!", sender: "vendor", time: "10:35 AM" },
  { id: "13", text: "That's very fast! I love the idea of getting teasers early.", sender: "me", time: "10:38 AM" },
  { id: "14", text: "We find that our clients love sharing a few highlights right away on social media.", sender: "vendor", time: "10:40 AM" },
  { id: "15", text: "Definitely. Can we schedule a meeting to discuss the details further?", sender: "me", time: "10:45 AM" },
  { id: "16", text: "Absolutely! Are you free this weekend for a quick coffee or a Zoom call?", sender: "vendor", time: "10:50 AM" },
  { id: "17", text: "Sunday afternoon works best for me. Let's do a Zoom call.", sender: "me", time: "10:55 AM" },
  { id: "18", text: "Perfect, I'll send you the link for Sunday at 3 PM. See you then!", sender: "vendor", time: "11:00 AM" },
  { id: "19", text: "Thanks! Looking forward to it.", sender: "me", time: "11:05 AM" },
  { id: "20", text: "You're welcome! Have a great day.", sender: "vendor", time: "11:10 AM" },
]

export default function ChatWindow({ conversation, onBack }: ChatWindowProps) {
  return (
    <div className="flex flex-col h-full bg-muted w-full">
      {/* Chat Header */}
      <div className="flex items-center justify-between sm:px-4 py-4 border-b bg-background border-l">
        <div className="flex items-center gap-3 min-w-0">
          {onBack && (
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full lg:hidden shrink-0"
              onClick={onBack}
            >
              <ArrowLeft/>
            </Button>
          )}
          <div className="relative shrink-0">
            <Avatar className="md:h-10 md:w-10">
              <AvatarImage src={conversation.avatarUrl} alt={conversation.name} />
              <AvatarFallback className="text-primary-foreground font-semibold">{conversation.initial}</AvatarFallback>
            </Avatar>
            {conversation.online && (
              <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2" />
            )}
          </div>
          <div className="max-w-40">
            <h3 className="text-sm font-semibold leading-none mb-1 truncate">{conversation.name}</h3>
            <p className="text-xs text-muted-foreground truncate">{conversation.category}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Messages Area */}
      <ScrollArea className="p-4 h-[calc(100vh-225px)]">
        <div className="flex flex-col gap-4">
          {mockMessages.map((msg) => (
            <div
              key={msg.id}
              className={cn(
                "flex flex-col max-w-[80%]",
                msg.sender === "me" ? "self-end items-end" : "self-start items-start"
              )}
            >
              <div
                className={cn(
                  "px-4 py-2.5 rounded-2xl text-sm shadow-sm",
                  msg.sender === "me"
                    ? "bg-primary text-primary-foreground rounded-tr-none"
                    : "bg-muted text-foreground rounded-tl-none"
                )}
              >
                {msg.text}
              </div>
              <span className="text-[10px] text-muted-foreground mt-1 px-1">
                {msg.time}
              </span>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Input Area */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-2">
          <Input 
            placeholder="Type your message..." 
            className="flex-1 rounded-full"
          />
          <Button size="icon" className="rounded-full">
            <Send />
          </Button>
        </div>
      </div>
    </div>
  )
}
