
import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-8">
            <Link href="/" className="inline-block">
              <Image 
                src="/logo.png" 
                alt="WE Plan Logo" 
                width={120} 
                height={35} 
                className="brightness-0 invert object-contain"
              />
            </Link>
            <p className="text-primary-foreground/90 text-sm leading-relaxed max-w-70">
              Your one-stop destination for finding the perfect wedding vendors and creating unforgettable moments.
            </p>
            <div className="flex items-center gap-3">
              <Link href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-all">
                <Facebook size={18} className="text-primary-foreground" />
              </Link>
              <Link href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-all">
                <Instagram size={18} className="text-primary-foreground" />
              </Link>
              <Link href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-all">
                <Twitter size={18} className="text-primary-foreground" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-7 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/vendors" className="text-sm text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 transition-all inline-block">Find Vendors</Link>
              </li>
              <li>
                <Link href="/venues" className="text-sm text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 transition-all inline-block">Browse Venues</Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 transition-all inline-block">Wedding Blog</Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 transition-all inline-block">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 transition-all inline-block">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* For Vendors */}
          <div>
            <h4 className="text-base font-semibold mb-7 uppercase tracking-wider">For Vendors</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/auth/become-vendor" className="text-sm text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 transition-all inline-block">Join as Vendor</Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 transition-all inline-block">Pricing Plans</Link>
              </li>
              <li>
                <Link href="/success-stories" className="text-sm text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 transition-all inline-block">Success Stories</Link>
              </li>
              <li>
                <Link href="/resources" className="text-sm text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 transition-all inline-block">Resources</Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-base font-semibold mb-7 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/80 group">
                <MapPin size={18} className="shrink-0 text-primary-foreground/60 group-hover:text-primary-foreground transition-colors" />
                <span>123 Wedding Street, NY 10001</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80 group">
                <Phone size={18} className="shrink-0 text-primary-foreground/60 group-hover:text-primary-foreground transition-colors" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80 group">
                <Mail size={18} className="shrink-0 text-primary-foreground/60 group-hover:text-primary-foreground transition-colors" />
                <span>hello@weddinghub.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs tracking-wide">
            © 2026 WeddingHub. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-xs tracking-wide">
            <Link href="/privacy-policy" className="text-primary-foreground hover:underline">Privacy Policy</Link>
            <Link href="/terms" className="text-primary-foreground hover:underline">Terms of Service</Link>
            <Link href="/cookie-policy" className="text-primary-foreground hover:underline">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
