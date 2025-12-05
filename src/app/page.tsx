import Link from "next/link";
import FractalGlassCanvas from "@/components/FractalGlass";

export default function Home() {
  return (
    <main className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-[#e8e4dc] px-6 py-8 text-[#2a2826] md:px-12 md:py-10">

      {/* --- CANVAS LAYER (Background) --- 
          The Hero Container is now the canvas.
      */}
      <div className="fixed inset-0 z-0 w-screen h-dvh">
        <FractalGlassCanvas src="/4.jpg" />
      </div>

      {/* --- HEADER --- */}
      <header className="relative z-10 flex w-full items-start justify-between uppercase tracking-widest text-xs md:text-xs">
        <div className="flex items-center gap-4 select-none">
          <span className="font-serif text-2xl font-semibold tracking-wide normal-case text-[#1a1918]">
            L&apos;AURA
          </span>
        </div>

        <nav className="hidden sm:block">
          <ul className="flex gap-8 font-medium opacity-80">
            {["Essence", "Origins", "Journal"].map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="transition-all hover:opacity-100 hover:text-black hover:underline underline-offset-4 decoration-[0.5px]"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button className="hidden sm:block font-medium opacity-80 hover:opacity-100">
          Cart (0)
        </button>
        <button className="block sm:hidden font-medium">Menu</button>
      </header>

      {/* --- FLOATING PRODUCT SPECS --- */}
      <div className="relative z-10 hidden md:flex w-full justify-end pr-12 mt-20 pointer-events-none">
        <div className="flex flex-col gap-4 text-xs tracking-widest text-right opacity-80 mix-blend-multiply">
          <div>
            <span className="block font-semibold opacity-60">SCENT NOTES</span>
            <span className="block mt-1">Raw Sandalwood</span>
            <span className="block">White Amber</span>
            <span className="block">Driftwood</span>
          </div>
          <div className="mt-4">
            <span className="block font-semibold opacity-60">ORIGIN</span>
            <span className="block mt-1">Kyoto, Japan</span>
          </div>
        </div>
      </div>

      {/* --- FOOTER --- */}
      <footer className="relative z-10 flex w-full flex-col items-end justify-between gap-8 pt-10 md:flex-row md:items-end pointer-events-none">
        <div className="max-w-xl order-2 md:order-1 pointer-events-auto">
          <p className="mb-4 text-xs tracking-[0.2em] uppercase opacity-60 font-medium">
            The Natural Collection
          </p>
          <h1 className="font-serif text-5xl font-medium italic leading-[0.95] md:text-7xl lg:text-[5.5rem] text-[#1a1918]">
            Elegance in <br />
            <span className="not-italic ml-4 md:ml-8">Raw Form.</span>
          </h1>

          <button className="mt-8 border-b-2 border-[#2a2826]/20 pb-2 text-sm uppercase tracking-widest font-semibold hover:border-[#2a2826] transition-all">
            Explore the Scent
          </button>
        </div>

        <div className="w-full md:w-auto text-left md:text-right order-1 md:order-2">
          <div className="flex flex-col gap-1 text-[10px] uppercase tracking-widest font-medium opacity-60">
            <span>Handcrafted Series</span>
            <span>Edition 01 — 2025</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
