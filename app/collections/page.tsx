import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function CollectionsPage() {
  const collections = [
    {
      name: "Kurtas",
      description: "Versatile, elegant everyday wear",
      href: "/collections/kurtas",
      image: "/collection-of-elegant-kurtas-burgundy-emerald-gold.jpg",
    },
    {
      name: "Anarkalis",
      description: "Flowing silhouettes for every occasion",
      href: "/collections/anarkalis",
      image: "/beautiful-anarkali-dresses-royal-mughal-style-gold.jpg",
    },
    {
      name: "Kurtis",
      description: "Contemporary comfort meets tradition",
      href: "/collections/kurtis",
      image: "/modern-kurtis-ethnic-wear-burgundy-champagne-tones.jpg",
    },
    {
      name: "Palazzos",
      description: "Effortless elegance from dawn to dusk",
      href: "/collections/palazzos",
      image: "/flowing-palazzo-pants-ethnic-indian-wear-gold-emer.jpg",
    },
    {
      name: "Dupattas",
      description: "The perfect finishing touch",
      href: "/collections/dupattas",
      image: "/placeholder.svg?height=900&width=700",
    },
  ]

  return (
    <>
      <Navigation />

      <main className="pt-20">
        {/* Hero */}
        <section className="px-6 lg:px-12 py-20">
          <div className="max-w-[1400px] mx-auto text-center">
            <h1 className="text-5xl md:text-7xl mb-6">Collections</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover our curated selection of ethnic wear, each piece crafted with heritage artisanship and timeless
              elegance.
            </p>
          </div>
        </section>

        {/* Collections Grid */}
        <section className="px-6 lg:px-12 pb-20">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {collections.map((collection, index) => (
                <Link key={index} href={collection.href} className="group">
                  <div className="relative aspect-[4/5] bg-muted overflow-hidden mb-6">
                    <img
                      src={collection.image || "/placeholder.svg"}
                      alt={collection.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <h2 className="text-3xl mb-2 group-hover:text-accent transition-colors">{collection.name}</h2>
                  <p className="text-muted-foreground">{collection.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
