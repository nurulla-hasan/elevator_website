import Link from "next/link"
import Image from "next/image"

export function NavLogo() {
  return (
    <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
      <Image
        src="/logo.png"
        alt="WEPLAN Logo"
        width={120}
        height={40}
        className="h-14 w-auto md:h-18"
        priority
      />
    </Link>
  )
}
