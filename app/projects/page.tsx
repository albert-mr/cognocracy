import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "projects",
  description: "things albert martínez made, and things built with genlayer.",
  alternates: { canonical: "https://cognocracy.org/projects" },
}

export const revalidate = 86400 // star counts refresh daily

type Project = { group: string; hook: string; name: string; url: string; repo?: string } // repo: only where stars can reach 100

const projects: Project[] = [
  { group: "made", hook: "speaking every model's dialect", name: "promptify", url: "https://github.com/albert-mr/promptify" },
  { group: "made", hook: "building the last source of truth", name: "argue.fun", url: "https://argue.fun" },
  { group: "made", hook: "proving you aren't a human", name: "botcha.xyz", url: "https://botcha.xyz" },
  { group: "made", hook: "turning any x article into markdown", name: "marticle", url: "https://github.com/albert-mr/marticle" },
  { group: "made", hook: "giving the 🎤 key a real mute switch", name: "mickey", url: "https://github.com/albert-mr/mickey" },
  { group: "made", hook: "shadcn/ui, but for logos", name: "shadcn-logos", url: "https://github.com/albert-mr/shadcn-logos" },
  { group: "made", hook: "writing genlayer contracts from your editor", name: "genlayer-mcp-server", url: "https://github.com/albert-mr/genlayer-mcp-server" },
  { group: "with genlayer", hook: "swarms of agents on telegram", name: "genswarms", url: "https://github.com/genlayerlabs/genswarms", repo: "genlayerlabs/genswarms" },
  { group: "with genlayer", hook: "an agent in 380 lines of c", name: "subzeroclaw", url: "https://subzeroclaw.com", repo: "genlayerlabs/subzeroclaw" },
  { group: "with genlayer", hook: "the starting point for every genlayer app", name: "genlayer-project-boilerplate", url: "https://github.com/genlayerlabs/genlayer-project-boilerplate", repo: "genlayerlabs/genlayer-project-boilerplate" },
]

const groups = ["made", "with genlayer"]

// GitHub stars, shown only when they say something (>= 100). Any failure = no badge.
async function stars(repo: string): Promise<number | null> {
  try {
    const r = await fetch(`https://api.github.com/repos/${repo}`, {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "cognocracy.org",
        // optional: raises the API limit from 60/h per IP (shared on Vercel) to 5000/h
        ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
      },
      next: { revalidate: 86400 },
    })
    if (!r.ok) return null
    const n = (await r.json()).stargazers_count
    return typeof n === "number" && n >= 100 ? n : null
  } catch {
    return null
  }
}

const fmt = (n: number) => (n >= 1000 ? `${(n / 1000).toFixed(1).replace(/\.0$/, "")}k` : String(n))

export default async function ProjectsPage() {
  const starCounts = await Promise.all(projects.map((p) => (p.repo ? stars(p.repo) : null)))

  return (
    <main className="min-h-dvh bg-background flex items-center justify-center p-4">
      <div className="flex flex-col items-center gap-1.5 sm:gap-3 text-foreground">
        <h1 className="text-lg sm:text-2xl font-bold">projects</h1>
        {groups.map((group) => (
          <div key={group} className="mt-4 sm:mt-6 flex flex-col gap-1 sm:gap-2 self-stretch">
            <span className="text-xs sm:text-sm opacity-40">{group}</span>
            {projects.map((p, i) =>
              p.group !== group ? null : (
                <span key={p.name} className="text-sm sm:text-lg">
                  <span className="opacity-40 mr-1.5 sm:mr-2">&gt;</span>
                  {p.hook} at{" "}
                  <Link href={p.url} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                    {p.name}
                  </Link>
                  {starCounts[i] !== null && (
                    <span className="opacity-40 ml-1.5 sm:ml-2 text-xs sm:text-sm">{fmt(starCounts[i]!)}★</span>
                  )}
                </span>
              ),
            )}
          </div>
        ))}
        <Link href="/" className="mt-5 sm:mt-8 text-sm sm:text-lg opacity-40 hover:opacity-80 transition-opacity">
          &lt; cognocracy
        </Link>
      </div>
    </main>
  )
}
