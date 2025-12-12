import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function JournalPage() {
  const articles = [
    {
      category: "Craftsmanship",
      title: "The Art of Hand Embroidery",
      excerpt: "Exploring the ancient techniques that bring our garments to life, one stitch at a time.",
      image: "/indian-artisan-hand-embroidering-fabric-close-up-t.jpg",
    },
    {
      category: "Heritage",
      title: "Mughal Aesthetic in Modern Design",
      excerpt: "How royal heritage inspires contemporary ethnic wear for the modern woman.",
      image: "/mughal-architecture-intricate-patterns-vintage-bur.jpg",
    },
    {
      category: "Sustainability",
      title: "Natural Dyes & Timeless Quality",
      excerpt: "Our commitment to sustainable practices and creating garments that last generations.",
      image: "/natural-dyes-traditional-indian-textile-burgundy-g.jpg",
    },
    {
      category: "Artisans",
      title: "Voices from the Workshop",
      excerpt: "Stories from the master craftspeople who bring Poshkraft designs to life.",
      image: "/placeholder.svg?height=1000&width=800",
    },
    {
      category: "Style",
      title: "Styling Your Anarkali",
      excerpt: "Modern ways to wear this timeless silhouette for any occasion.",
      image: "/placeholder.svg?height=1000&width=800",
    },
    {
      category: "Process",
      title: "From Loom to Wardrobe",
      excerpt: "Follow the journey of a kurta from initial sketch to finished garment.",
      image: "/placeholder.svg?height=1000&width=800",
    },
  ]

  return (
    <>
      <Navigation />

      <main className="pt-20">
        {/* Hero */}
        <section className="px-6 lg:px-12 py-20">
          <div className="max-w-[1400px] mx-auto text-center">
            <h1 className="text-5xl md:text-7xl mb-6">Journal</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Stories of craft, culture, and creativity from the world of Poshkraft
            </p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="px-6 lg:px-12 pb-20">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {articles.map((article, index) => (
                <article key={index} className="group cursor-pointer">
                  <div className="relative aspect-[4/5] bg-muted overflow-hidden mb-4">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-xs tracking-widest uppercase text-accent">{article.category}</span>
                  <h2 className="text-xl mt-2 mb-3 group-hover:text-accent transition-colors">{article.title}</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">{article.excerpt}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
