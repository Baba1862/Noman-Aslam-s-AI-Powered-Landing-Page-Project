import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronRight, Linkedin, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Header */}
      <header className="border-b border-slate-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-bold text-xl text-amber-500">NA</div>
          <nav className="hidden md:flex space-x-6">
            <Link href="#about" className="text-slate-300 hover:text-amber-500 transition">
              About
            </Link>
            <Link href="#trades" className="text-slate-300 hover:text-amber-500 transition">
              Trades
            </Link>
            <Link href="#resources" className="text-slate-300 hover:text-amber-500 transition">
              Resources
            </Link>
          </nav>
          <Link href="#telegram">
            <Button className="bg-amber-500 hover:bg-amber-600 text-slate-950">
              Join Telegram
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="py-20 md:py-32 border-b border-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Noman Aslam | <span className="text-amber-500">XAU/USD</span> Liquidity Specialist
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-10">
              VSA-Based Gold Trading Signals & Institutional-Grade Analysis
            </p>
            <Link href="#telegram" id="telegram">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-950">
                Join Free Telegram Group
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section id="about" className="py-20 border-b border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/3">
              <div className="relative w-64 h-64 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-amber-500">
                <Image
                  src="/placeholder.svg?height=256&width=256"
                  alt="Noman Aslam"
                  width={256}
                  height={256}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6">
                About <span className="text-amber-500">Noman</span>
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Former entrepreneur turned full-time trader. 5,500+ hours mastering VSA, liquidity hunting, and XAU/USD
                price action. I trade like institutions do—no fluff, just order flow.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-slate-900 px-4 py-2 rounded-lg">
                  <span className="text-amber-500 font-bold">5,500+</span>
                  <span className="text-slate-400 ml-2">Hours of Trading</span>
                </div>
                <div className="bg-slate-900 px-4 py-2 rounded-lg">
                  <span className="text-amber-500 font-bold">VSA</span>
                  <span className="text-slate-400 ml-2">Specialist</span>
                </div>
                <div className="bg-slate-900 px-4 py-2 rounded-lg">
                  <span className="text-amber-500 font-bold">XAU/USD</span>
                  <span className="text-slate-400 ml-2">Focus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trading Setup Showcase */}
      <section id="trades" className="py-20 border-b border-slate-800 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Recent <span className="text-amber-500">Trading Setups</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "London Open Liquidity Grab + VSA Confirmation",
              "NY Session Breakout with Smart Money Concepts",
              "Asian Range Liquidity Sweep with Order Block Entry",
            ].map((caption, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src={`/placeholder.svg?height=300&width=500`}
                    alt={`Trading Chart ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2">{caption}</h3>
                  <p className="text-slate-400 text-sm">
                    Precision entry with 1:4 risk-reward ratio. Institutional liquidity targeted.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-slate-400 mt-8 text-sm italic">
            Past performance does not guarantee future results. Trading involves risk.
          </p>
        </div>
      </section>

      {/* Free Resources */}
      <section id="resources" className="py-20 border-b border-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto bg-slate-900 p-8 rounded-xl border border-slate-800">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Download My <span className="text-amber-500">XAU/USD Liquidity Cheat Sheet</span>
            </h2>
            <p className="text-slate-300 mb-6 text-center">
              Get instant access to my proprietary liquidity hunting framework that I've developed over thousands of
              hours of chart time.
            </p>

            <form className="space-y-4">
              <Input
                type="email"
                placeholder="Your Email Address"
                className="bg-slate-800 border-slate-700 text-slate-100"
              />
              <Button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950">
                Send Me The Cheat Sheet
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>

            <p className="text-xs text-slate-400 mt-4 text-center">I respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-10">
              Take Your <span className="text-amber-500">Trading</span> to the Next Level
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#linkedin">
                <Button size="lg" variant="outline" className="border-amber-500 text-amber-500 hover:bg-amber-500/10">
                  <Linkedin className="mr-2 h-5 w-5" />
                  Follow My Live Trades on LinkedIn
                </Button>
              </Link>

              <Link href="#mentorship">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-950">
                  Apply for 1:1 Mentorship
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="font-bold text-xl text-amber-500">Noman Aslam</div>
              <p className="text-slate-400 text-sm">XAU/USD Liquidity Specialist</p>
            </div>

            <div className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} Noman Aslam. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
