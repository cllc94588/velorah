import { Button } from './components/ui/button'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4'

const navLinks = ['Home', 'Studio', 'About', 'Journal', 'Reach Us']

export default function App() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-background text-foreground">
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src={VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        tabIndex={-1}
      />

      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
        <a
          href="#top"
          className="font-display text-3xl tracking-tight text-foreground"
          style={{ fontFamily: "'Instrument Serif', serif" }}
          aria-label="Velorah home"
        >
          xllx<sup className="text-xs">®</sup>
        </a>

        <div className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {navLinks.map((link, index) => (
            <a
              key={link}
              href={link === 'Home' ? '#top' : '#'}
              aria-current={index === 0 ? 'page' : undefined}
              className={`text-sm transition-colors hover:text-foreground ${
                index === 0 ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              {link}
            </a>
          ))}
        </div>

        <Button
          type="button"
          variant="ghost"
          className="liquid-glass h-auto rounded-full border-0 px-6 py-2.5 text-sm text-foreground transition-transform hover:scale-[1.03] hover:bg-transparent"
        >
          Begin Journey
        </Button>
      </nav>

      <section
        id="top"
        className="relative z-10 flex min-h-[calc(100vh-104px)] flex-col items-center justify-center px-6 py-[90px] text-center sm:pt-32 sm:pb-40"
      >
        <h1
          className="animate-fade-rise max-w-7xl text-5xl font-normal leading-[0.95] tracking-[-2.46px] sm:text-7xl md:text-8xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Where <em className="not-italic text-muted-foreground">dreams</em> rise{' '}
          <em className="not-italic text-muted-foreground">through the silence.</em>
        </h1>

        <p className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          We're designing tools for deep thinkers, bold creators, and quiet rebels. Amid the chaos, we
          build digital spaces for sharp focus and inspired work.
        </p>

        <Button
          type="button"
          variant="ghost"
          className="liquid-glass mt-12 h-auto cursor-pointer rounded-full border-0 px-14 py-5 text-base text-foreground transition-transform hover:scale-[1.03] hover:bg-transparent"
        >
          Begin Journey
        </Button>
      </section>
    </main>
  )
}
