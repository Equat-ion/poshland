import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <>
      <Navigation />

      <main className="pt-20">
        {/* Hero Section - Editorial Magazine Style */}
        <section className="min-h-[85vh] flex items-center justify-center px-6 lg:px-12 py-20">
          <div className="max-w-[1400px] w-full">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 text-balance">
                Timeless Elegance
                <br />
                <span className="italic text-accent">Crafted for Today</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
                Discover the artistry of Royal Mughal-inspired ethnic wear. Each piece tells a story of heritage,
                handwoven with precision for the modern woman.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/collections"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 hover:bg-primary/90 transition-colors text-sm tracking-wide"
                >
                  Explore Collections
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/heritage"
                  className="inline-flex items-center gap-2 border border-border px-8 py-4 hover:bg-muted transition-colors text-sm tracking-wide"
                >
                  Our Heritage
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image Section */}
        <section className="px-6 lg:px-12 py-12">
          <div className="max-w-[1400px] mx-auto">
            <div className="relative aspect-[16/9] bg-muted overflow-hidden">
              <img src="/elegant-indian-woman-wearing-burgundy-kurta-with-g.jpg" alt="Poshkraft Collection" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Editorial Grid Section */}
        <section className="px-6 lg:px-12 py-20">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Text */}
              <div className="flex flex-col justify-center">
                <span className="text-sm tracking-widest uppercase text-accent mb-4">Our Philosophy</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                  Where Heritage
                  <br />
                  Meets Modernity
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  At Poshkraft, we honor the centuries-old traditions of Indian textile craftsmanship. Each garment is a
                  testament to the skill of our artisans, blending royal Mughal aesthetics with contemporary comfort.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  From hand-embroidered kurtas to flowing anarkalis, our collections celebrate the richness of ethnic
                  wear while embracing the needs of today's woman—elegant, versatile, and timeless.
                </p>
                <Link
                  href="/craft"
                  className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors w-fit"
                >
                  Discover Our Craft
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Right Column - Image */}
              <div className="relative aspect-[3/4] bg-muted overflow-hidden">
                <img
                  src="/close-up-handloom-weaving-indian-textile-artisan-b.jpg"
                  alt="Artisan Craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Collections Showcase */}
        <section className="px-6 lg:px-12 py-20 bg-muted/30">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl mb-4">Our Collections</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Curated pieces that embody timeless elegance and everyday luxury
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Kurtas */}
              <Link href="/collections/kurtas" className="group">
                <div className="relative aspect-[3/4] bg-card overflow-hidden mb-4">
                  <img
                    src="/elegant-burgundy-kurta-with-gold-embroidery-on-mod.jpg"
                    alt="Kurtas"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl mb-2">Kurtas</h3>
                <p className="text-muted-foreground text-sm">Everyday elegance reimagined</p>
              </Link>

              {/* Anarkalis */}
              <Link href="/collections/anarkalis" className="group">
                <div className="relative aspect-[3/4] bg-card overflow-hidden mb-4">
                  <img
                    src="/flowing-emerald-anarkali-dress-with-intricate-embr.jpg"
                    alt="Anarkalis"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl mb-2">Anarkalis</h3>
                <p className="text-muted-foreground text-sm">Royal grace for every occasion</p>
              </Link>

              {/* Dupattas */}
              <Link href="/collections/dupattas" className="group">
                <div className="relative aspect-[3/4] bg-card overflow-hidden mb-4">
                  <img
                    src="/luxurious-gold-embroidered-dupatta-draped-elegantl.jpg"
                    alt="Dupattas"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl mb-2">Dupattas</h3>
                <p className="text-muted-foreground text-sm">The finishing touch of elegance</p>
              </Link>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/collections"
                className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 hover:bg-primary hover:text-primary-foreground transition-colors text-sm tracking-wide"
              >
                View All Collections
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Large Quote Section */}
        <section className="px-6 lg:px-12 py-32">
          <div className="max-w-[900px] mx-auto text-center">
            <blockquote className="text-3xl md:text-4xl lg:text-5xl leading-tight italic text-balance">
              "Every thread is a story, every stitch a legacy. We weave heritage into garments that transcend time."
            </blockquote>
            <p className="text-muted-foreground mt-8 text-lg">— Poshkraft Atelier</p>
          </div>
        </section>

        {/* Split Image Section */}
        <section className="px-6 lg:px-12 py-12">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative aspect-square bg-muted overflow-hidden">
                <img src="/traditional-indian-textile-pattern-burgundy-gold-g.jpg" alt="Textile Pattern" className="w-full h-full object-cover" />
              </div>
              <div className="relative aspect-square bg-secondary overflow-hidden flex items-center justify-center p-12">
                <div className="text-center text-secondary-foreground">
                  <h3 className="text-3xl md:text-4xl mb-6">Artisan-Made</h3>
                  <p className="text-lg leading-relaxed opacity-90">
                    Each piece is handcrafted by skilled artisans who have perfected their craft over generations. We
                    honor their expertise by creating garments that celebrate traditional techniques.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Journal Preview */}
        <section className="px-6 lg:px-12 py-20">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div>
                <h2 className="text-4xl md:text-5xl mb-2">From Our Journal</h2>
                <p className="text-muted-foreground text-lg">Stories of craft, culture, and creativity</p>
              </div>
              <Link
                href="/journal"
                className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mt-6 md:mt-0"
              >
                Read All Stories
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Journal Entry 1 */}
              <article>
                <div className="relative aspect-[4/5] bg-muted overflow-hidden mb-4">
                  <img src="/indian-artisan-hand-embroidering-fabric-close-up-t.jpg" alt="Journal Entry" className="w-full h-full object-cover" />
                </div>
                <span className="text-xs tracking-widest uppercase text-accent">Craftsmanship</span>
                <h3 className="text-xl mt-2 mb-3 hover:text-accent transition-colors cursor-pointer">
                  The Art of Hand Embroidery
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Exploring the ancient techniques that bring our garments to life, one stitch at a time.
                </p>
              </article>

              {/* Journal Entry 2 */}
              <article>
                <div className="relative aspect-[4/5] bg-muted overflow-hidden mb-4">
                  <img src="/mughal-architecture-intricate-patterns-vintage-bur.jpg" alt="Journal Entry" className="w-full h-full object-cover" />
                </div>
                <span className="text-xs tracking-widest uppercase text-accent">Heritage</span>
                <h3 className="text-xl mt-2 mb-3 hover:text-accent transition-colors cursor-pointer">
                  Mughal Aesthetic in Modern Design
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  How royal heritage inspires contemporary ethnic wear for the modern woman.
                </p>
              </article>

              {/* Journal Entry 3 */}
              <article>
                <div className="relative aspect-[4/5] bg-muted overflow-hidden mb-4">
                  <img src="/natural-dyes-traditional-indian-textile-burgundy-g.jpg" alt="Journal Entry" className="w-full h-full object-cover" />
                </div>
                <span className="text-xs tracking-widest uppercase text-accent">Sustainability</span>
                <h3 className="text-xl mt-2 mb-3 hover:text-accent transition-colors cursor-pointer">
                  Natural Dyes & Timeless Quality
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Our commitment to sustainable practices and creating garments that last generations.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="px-6 lg:px-12 py-20 bg-accent">
          <div className="max-w-[800px] mx-auto text-center text-accent-foreground">
            <h2 className="text-4xl md:text-5xl mb-6">Stay Connected</h2>
            <p className="text-lg mb-10 opacity-90">
              Join our community to receive updates on new collections, heritage stories, and exclusive previews.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-4 bg-background text-foreground border-0 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm tracking-wide whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
