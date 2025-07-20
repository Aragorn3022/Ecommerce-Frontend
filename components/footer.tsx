import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">S</span>
              </div>
              <span className="font-bold text-xl">ShopHub</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your ultimate shopping destination for quality products at unbeatable prices.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/products" className="block text-sm text-muted-foreground hover:text-primary">
                All Products
              </Link>
              <Link href="/categories" className="block text-sm text-muted-foreground hover:text-primary">
                Categories
              </Link>
              <Link href="/deals" className="block text-sm text-muted-foreground hover:text-primary">
                Special Deals
              </Link>
              <Link href="/new-arrivals" className="block text-sm text-muted-foreground hover:text-primary">
                New Arrivals
              </Link>
            </div>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="font-semibold">Customer Service</h3>
            <div className="space-y-2">
              <Link href="/contact" className="block text-sm text-muted-foreground hover:text-primary">
                Contact Us
              </Link>
              <Link href="/shipping" className="block text-sm text-muted-foreground hover:text-primary">
                Shipping Info
              </Link>
              <Link href="/returns" className="block text-sm text-muted-foreground hover:text-primary">
                Returns & Exchanges
              </Link>
              <Link href="/faq" className="block text-sm text-muted-foreground hover:text-primary">
                FAQ
              </Link>
            </div>
          </div>

          {/* Account */}
          <div className="space-y-4">
            <h3 className="font-semibold">My Account</h3>
            <div className="space-y-2">
              <Link href="/auth/login" className="block text-sm text-muted-foreground hover:text-primary">
                Login
              </Link>
              <Link href="/auth/signup" className="block text-sm text-muted-foreground hover:text-primary">
                Create Account
              </Link>
              <Link href="/dashboard" className="block text-sm text-muted-foreground hover:text-primary">
                My Dashboard
              </Link>
              <Link href="/wishlist" className="block text-sm text-muted-foreground hover:text-primary">
                Wishlist
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">© 2024 ShopHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
