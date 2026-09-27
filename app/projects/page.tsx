import type { Metadata } from "next"
import { Fragment } from "react"
import Link from "next/link"
import { LocalTime } from "@/components/local-time"
import { Socials } from "@/components/socials"

export const metadata: Metadata = {
  title: { absolute: "albert martínez — cognocracy" },
  description: "things albert martínez made, and things built with genlayer.",
  alternates: { canonical: "https://cognocracy.org/projects" },
}

export const revalidate = 86400 // star counts refresh daily

type Project = { group: string; hook: string; name: string; url: string; join?: string; repo?: string } // join defaults to "at"; repo only where stars can reach 100

const projects: Project[] = [
  { group: "made", hook: "proving you aren't a human", name: "botcha.xyz", url: "https://botcha.xyz" },
  { group: "made", hook: "building the last source of truth", name: "argue.fun", url: "https://argue.fun" },
  { group: "made", hook: "speaking every model's dialect", name: "promptify", url: "https://github.com/albert-mr/promptify" },
  { group: "made", hook: "turning the mac's mic key into a real mute switch", name: "mickey", url: "https://github.com/albert-mr/mickey" },
  { group: "made", hook: "turning any x article into markdown", name: "marticle", url: "https://github.com/albert-mr/marticle" },
  { group: "made", hook: "shadcn/ui, but for logos", name: "shadcn-logos", url: "https://github.com/albert-mr/shadcn-logos" },
  { group: "made", hook: "writing intelligent contracts", join: "with", name: "genlayer mcp", url: "https://github.com/albert-mr/genlayer-mcp-server" },
  { group: "with genlayer", hook: "wiring agents into swarms, the erlang way", name: "genswarms", url: "https://github.com/genlayerlabs/genswarms", repo: "genlayerlabs/genswarms" },
  { group: "with genlayer", hook: "every genlayer app starts", name: "genlayer-project-boilerplate", url: "https://github.com/genlayerlabs/genlayer-project-boilerplate", repo: "genlayerlabs/genlayer-project-boilerplate" },
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
        <Link href="/" className="text-lg sm:text-2xl font-bold hover:opacity-80 transition-opacity">albert martínez</Link>
        <LocalTime />
        <div className="mt-4 sm:mt-6 flex flex-col gap-2 self-stretch sm:self-auto">
          {groups.map((group, gi) => (
            <Fragment key={group}>
              <span className={`text-xs sm:text-sm opacity-40 ${gi ? "mt-3 sm:mt-4" : ""}`}>{group}</span>
              {projects.map((p, i) =>
                p.group !== group ? null : (
                  <span key={p.name} className="flex gap-1.5 sm:gap-2 text-sm sm:text-lg">
                    <span className="opacity-40 shrink-0">&gt;</span>
                    <span>
                      {p.hook} {p.join ?? "at"}&nbsp;
                      <Link href={p.url} target="_blank" rel="noopener noreferrer" className="font-medium whitespace-nowrap hover:opacity-80 transition-opacity">
                        {p.name}
                      </Link>
                      {starCounts[i] !== null && (
                        <span className="opacity-40 ml-1.5 sm:ml-2 text-xs sm:text-sm whitespace-nowrap">{fmt(starCounts[i]!)}★</span>
                      )}
                    </span>
                  </span>
                ),
              )}
            </Fragment>
          ))}
          <span className="mt-3 sm:mt-4 flex gap-1.5 sm:gap-2 text-sm sm:text-lg">
            <span className="opacity-40 shrink-0">&gt;</span>
            <span>back <Link href="/" className="font-medium hover:opacity-80 transition-opacity">/</Link></span>
          </span>
        </div>
        <Socials />
      </div>
    </main>
  )
}
