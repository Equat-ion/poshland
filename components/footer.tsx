import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src="/images/logo.avif" alt="Poshkraft" className="h-12 w-auto mb-6 brightness-0 invert" />
            <p className="text-sm leading-relaxed opacity-90">
              Timeless ethnic wear crafted with heritage artisanship for the modern woman.
            </p>
          </div>

          {/* Collections */}
          <div>
            <h3 className="text-sm font-semibold mb-4 tracking-wider uppercase">Collections</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/collections/kurtas" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Kurtas
                </Link>
              </li>
              <li>
                <Link href="/collections/anarkalis" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Anarkalis
                </Link>
              </li>
              <li>
                <Link href="/collections/kurtis" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Kurtis
                </Link>
              </li>
              <li>
                <Link href="/collections/palazzos" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Palazzos
                </Link>
              </li>
              <li>
                <Link href="/collections/dupattas" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Dupattas
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-sm font-semibold mb-4 tracking-wider uppercase">About</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/craft" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Our Craft
                </Link>
              </li>
              <li>
                <Link href="/heritage" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Heritage
                </Link>
              </li>
              <li>
                <Link href="/artisans" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Artisans
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/journal" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Journal
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-sm font-semibold mb-4 tracking-wider uppercase">Help</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/sizing" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Sizing Guide
                </Link>
              </li>
              <li>
                <Link href="/care" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Care Instructions
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Returns
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-90">© 2026 Poshkraft. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
