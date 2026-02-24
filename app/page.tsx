import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="flex items-center gap-2 sm:gap-3 text-foreground">
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
  )
}
