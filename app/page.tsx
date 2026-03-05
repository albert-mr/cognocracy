import Link from "next/link"
import { LocalTime } from "@/components/local-time"

export default function HomePage() {
  return (
    <main className="min-h-dvh bg-background flex items-center justify-center p-4">
      <div className="flex flex-col items-center gap-1.5 sm:gap-3 text-foreground">
        <h1 className="text-lg sm:text-2xl font-bold">albert martínez</h1>
        <p className="sr-only">building argue.fun, botcha.xyz. youngest artist at venice biennale 2025.</p>
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
        <Link
          href="https://github.com/albert-mr"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity touch-manipulation"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-foreground sm:w-5 sm:h-5">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
          <span className="text-base sm:text-lg font-medium">@albert-mr</span>
        </Link>
        </div>
      </div>
    </main>
  )
}
