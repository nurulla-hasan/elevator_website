import { Button } from "@/components/ui/button";
import { MessageSquareMore } from "lucide-react";
import Link from "next/link";

export default function ChatEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center max-w-sm">
      <div className="relative mb-8">
        <MessageSquareMore className="w-16 h-16 text-primary stroke-[1.5px]" />
      </div>

      <h2 className="text-2xl font-semibold mb-3">Select a Conversation</h2>

      <p className="text-muted-foreground text-sm leading-relaxed mb-8">
        Choose a conversation from the left sidebar to start messaging with
        vendors
      </p>

      <Button asChild size="lg" className="transition-all active:scale-95">
        <Link href="/vendors">Browse Vendors</Link>
      </Button>
    </div>
  );
}
