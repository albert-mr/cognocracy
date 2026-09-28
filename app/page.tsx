import Link from "next/link"
import { LocalTime } from "@/components/local-time"
import { Socials } from "@/components/socials"

export default function HomePage() {
  return (
    <main className="min-h-dvh bg-background flex items-center justify-center p-4">
      <div className="flex flex-col items-center gap-1.5 sm:gap-3 text-foreground">
        <h1 className="text-lg sm:text-2xl font-bold">albert martínez</h1>
        <p className="sr-only">building argue.fun, botcha.xyz, promptify. youngest artist at venice biennale 2025.</p>
        <LocalTime />
        <div className="mt-4 sm:mt-6 flex flex-col gap-1 sm:gap-2">
          <span className="flex gap-1.5 sm:gap-2 text-sm sm:text-lg"><span className="opacity-40 shrink-0">&gt;</span><span>founding engineer at&nbsp;<Link href="https://genlayer.com" target="_blank" rel="noopener noreferrer" className="font-medium hover:opacity-80 transition-opacity">genlayer</Link>&nbsp;<Link href="https://genlayer.foundation" target="_blank" rel="noopener noreferrer" className="font-medium hover:opacity-80 transition-opacity">foundation</Link></span></span>
          <span className="flex gap-1.5 sm:gap-2 text-sm sm:text-lg"><span className="opacity-40 shrink-0">&gt;</span><span>youngest artist at&nbsp;<Link href="https://www.labiennale.org/en/architecture/2025/living-lab/tide" target="_blank" rel="noopener noreferrer" className="font-medium hover:opacity-80 transition-opacity">venice biennale 2025</Link></span></span>
          <span className="flex gap-1.5 sm:gap-2 text-sm sm:text-lg"><span className="opacity-40 shrink-0">&gt;</span><span>more <Link href="/projects" className="font-medium hover:opacity-80 transition-opacity">/projects</Link></span></span>
        </div>
        <Socials />
      </div>
    </main>
  )
}
