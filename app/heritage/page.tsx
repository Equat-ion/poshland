import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function HeritagePage() {
  return (
    <>
      <Navigation />

      <main className="pt-20">
        {/* Hero */}
        <section className="px-6 lg:px-12 py-20">
          <div className="max-w-[900px] mx-auto">
            <span className="text-sm tracking-widest uppercase text-accent mb-4 block">Our Story</span>
            <h1 className="text-5xl md:text-7xl mb-8 leading-tight">
              Rooted in
              <br />
              <span className="italic text-accent">Heritage</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Poshkraft was born from a deep reverence for India's rich textile heritage. Our journey began with a
              simple belief: that traditional craftsmanship deserves to be celebrated, preserved, and worn with pride.
            </p>
          </div>
        </section>

        {/* Full Width Image */}
        <section className="px-6 lg:px-12 pb-20">
          <div className="max-w-[1400px] mx-auto">
            <div className="relative aspect-[16/9] bg-muted overflow-hidden mb-12">
              <img src="/placeholder.svg?height=900&width=1600" alt="Heritage" className="w-full h-full object-cover" />
            </div>

            <div className="max-w-[800px] mx-auto space-y-8 text-lg leading-relaxed">
              <p className="text-muted-foreground">
                The Mughal era left an indelible mark on Indian aesthetics—from the grandeur of its architecture to the
                sophistication of its textiles. Our designs draw inspiration from this golden age, translating royal
                motifs and intricate patterns into contemporary silhouettes.
              </p>

              <p className="text-muted-foreground">
                But heritage is more than history. It's the artisan who learned embroidery from her grandmother. It's
                the weaver who perfects his craft over decades. It's the natural dyes extracted from flowers and roots,
                techniques that have sustained communities for centuries.
              </p>

              <p className="text-muted-foreground">
                At Poshkraft, we work directly with these master craftspeople, ensuring fair wages and preserving
                traditional skills. Every purchase supports a network of artisans and keeps ancient techniques alive for
                future generations.
              </p>
            </div>
          </div>
        </section>

        {/* Values Grid */}
        <section className="px-6 lg:px-12 py-20 bg-muted/30">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-4xl md:text-5xl text-center mb-16">Our Values</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-2xl mb-4 text-accent">Authenticity</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every design is rooted in genuine traditional techniques, honoring the craftsmanship that has defined
                  Indian textiles for centuries.
                </p>
              </div>

              <div>
                <h3 className="text-2xl mb-4 text-accent">Sustainability</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We believe in slow fashion—garments made to last, using natural fibers and eco-conscious processes
                  that respect our planet.
                </p>
              </div>

              <div>
                <h3 className="text-2xl mb-4 text-accent">Community</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our artisans are the heart of Poshkraft. We invest in their craft, ensure fair compensation, and
                  celebrate their invaluable expertise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Image */}
        <section className="px-6 lg:px-12 py-20">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative aspect-[3/4] bg-muted overflow-hidden">
                <img
                  src="/placeholder.svg?height=1200&width=900"
                  alt="Artisan Community"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12 bg-primary text-primary-foreground">
                <h3 className="text-3xl md:text-4xl mb-6">
                  The Artisans Behind
                  <br />
                  Your Wardrobe
                </h3>
                <p className="text-lg leading-relaxed opacity-90 mb-8">
                  Meet the skilled craftspeople who pour their expertise into every garment. Their dedication to quality
                  and tradition is what makes Poshkraft truly special.
                </p>
                <a
                  href="/artisans"
                  className="text-primary-foreground underline hover:opacity-80 transition-opacity w-fit"
                >
                  Meet Our Artisans →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
