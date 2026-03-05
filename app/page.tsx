import Link from "next/link"
import { LocalTime } from "@/components/local-time"

export default function HomePage() {
  return (
    <main className="min-h-dvh bg-background flex items-center justify-center p-4">
      <div className="flex flex-col items-center gap-1.5 sm:gap-3 text-foreground">
        <h1 className="text-sm sm:text-lg font-medium">albert martínez</h1>
        <LocalTime />
        <div className="mt-4 sm:mt-6 flex flex-col gap-1 sm:gap-2">
          <span className="text-sm sm:text-lg"><span className="opacity-40 mr-1.5 sm:mr-2">&gt;</span>building the last source of truth at <Link href="https://argue.fun" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">argue.fun</Link></span>
          <span className="text-sm sm:text-lg"><span className="opacity-40 mr-1.5 sm:mr-2">&gt;</span>proving you aren't a human at <Link href="https://botcha.xyz" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">botcha.xyz</Link></span>
          <span className="text-sm sm:text-lg"><span className="opacity-40 mr-1.5 sm:mr-2">&gt;</span>youngest artist at <Link href="https://www.labiennale.org/en/architecture/2025/living-lab/tide" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">venice biennale 2025</Link></span>
        </div>
        <div className="mt-5 sm:mt-8 flex flex-col items-center gap-1.5 sm:gap-3">
        <Link
          href="https://t.me/cognocracy"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity touch-manipulation"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-foreground sm:w-5 sm:h-5">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
          </svg>
          <span className="text-base sm:text-lg font-medium">@cognocracy</span>
        </Link>
        <Link
          href="https://x.com/cognocracy"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity touch-manipulation"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-foreground sm:w-5 sm:h-5">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          <span className="text-base sm:text-lg font-medium">@cognocracy</span>
        </Link>
        </div>
      </div>
    </main>
  )
}
