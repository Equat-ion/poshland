import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function CraftPage() {
  return (
    <>
      <Navigation />

      <main className="pt-20">
        {/* Hero */}
        <section className="px-6 lg:px-12 py-20">
          <div className="max-w-[900px] mx-auto text-center">
            <span className="text-sm tracking-widest uppercase text-accent mb-4 block">Our Process</span>
            <h1 className="text-5xl md:text-7xl mb-8 leading-tight">
              The Art of
              <br />
              <span className="italic">Timeless Craft</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Every Poshkraft garment is a labor of love, combining centuries-old techniques with contemporary vision.
              From the first sketch to the final stitch, we honor the artistry of our craft.
            </p>
          </div>
        </section>

        {/* Image */}
        <section className="px-6 lg:px-12 pb-12">
          <div className="max-w-[1400px] mx-auto">
            <div className="relative aspect-[16/9] bg-muted overflow-hidden">
              <img
                src="/placeholder.svg?height=900&width=1600"
                alt="Craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="px-6 lg:px-12 py-20">
          <div className="max-w-[1200px] mx-auto">
            <div className="space-y-20">
              {/* Step 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <span className="text-6xl font-light text-accent/30">01</span>
                  <h2 className="text-4xl mt-4 mb-6">Design & Inspiration</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Our designers draw inspiration from Mughal architecture, traditional motifs, and the natural beauty
                    of India. Each collection begins with careful research into heritage patterns and contemporary
                    needs.
                  </p>
                </div>
                <div className="relative aspect-square bg-muted overflow-hidden order-1 md:order-2">
                  <img
                    src="/placeholder.svg?height=800&width=800"
                    alt="Design Process"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Step 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative aspect-square bg-muted overflow-hidden">
                  <img
                    src="/placeholder.svg?height=800&width=800"
                    alt="Fabric Selection"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-6xl font-light text-accent/30">02</span>
                  <h2 className="text-4xl mt-4 mb-6">Fabric Selection</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    We source the finest natural fabrics—soft cottons, luxurious silks, and breathable linens. Each
                    material is chosen for its quality, texture, and ability to drape beautifully.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <span className="text-6xl font-light text-accent/30">03</span>
                  <h2 className="text-4xl mt-4 mb-6">Hand Embroidery</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Our master artisans bring each design to life with intricate hand embroidery. These time-honored
                    techniques—passed down through generations—create the exquisite details that define Poshkraft.
                  </p>
                </div>
                <div className="relative aspect-square bg-muted overflow-hidden order-1 md:order-2">
                  <img
                    src="/placeholder.svg?height=800&width=800"
                    alt="Hand Embroidery"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Step 4 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative aspect-square bg-muted overflow-hidden">
                  <img
                    src="/placeholder.svg?height=800&width=800"
                    alt="Quality Check"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-6xl font-light text-accent/30">04</span>
                  <h2 className="text-4xl mt-4 mb-6">Finishing & Quality</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Every garment undergoes rigorous quality checks. From stitching to drape, we ensure that each piece
                    meets our exacting standards before it reaches you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="px-6 lg:px-12 py-20 bg-secondary">
          <div className="max-w-[800px] mx-auto text-center text-secondary-foreground">
            <blockquote className="text-3xl md:text-4xl italic leading-tight">
              "We don't just create garments. We preserve an art form, honor our artisans, and celebrate the beauty of
              slow, intentional craft."
            </blockquote>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
