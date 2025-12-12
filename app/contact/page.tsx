import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <>
      <Navigation />

      <main className="pt-20">
        {/* Hero */}
        <section className="px-6 lg:px-12 py-20">
          <div className="max-w-[900px] mx-auto text-center">
            <h1 className="text-5xl md:text-7xl mb-6">Get in Touch</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have a question about our collections, custom orders, or want to learn more about our craft? We'd love to
              hear from you.
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="px-6 lg:px-12 pb-20">
          <div className="max-w-[800px] mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm mb-2 tracking-wide">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-6 py-4 bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm mb-2 tracking-wide">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-6 py-4 bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2 tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-6 py-4 bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm mb-2 tracking-wide">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-6 py-4 bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2 tracking-wide">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-6 py-4 bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-12 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm tracking-wide"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* Contact Info */}
        <section className="px-6 lg:px-12 py-20 bg-muted/30">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div>
                <h3 className="text-xl mb-3 text-accent">Email</h3>
                <p className="text-muted-foreground">hello@poshkraft.com</p>
              </div>
              <div>
                <h3 className="text-xl mb-3 text-accent">Phone</h3>
                <p className="text-muted-foreground">+91 (0) 123 456 7890</p>
              </div>
              <div>
                <h3 className="text-xl mb-3 text-accent">Studio Hours</h3>
                <p className="text-muted-foreground">Mon - Sat: 10am - 6pm</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
