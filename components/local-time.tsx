"use client"

import { useEffect, useState } from "react"

const ZONE = "Europe/Madrid"

function zoneLabel(now: Date) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: ZONE,
    timeZoneName: "short",
  }).formatToParts(now)
  const name = parts.find((p) => p.type === "timeZoneName")?.value ?? ""
  if (/^(GMT|UTC)\+0?2$/.test(name)) return "CEST"
  if (/^(GMT|UTC)\+0?1$/.test(name)) return "CET"
  return name
}

export function LocalTime() {
  const [time, setTime] = useState("")
  const [zone, setZone] = useState("")

  useEffect(() => {
    const update = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone: ZONE,
        })
      )
      setZone(zoneLabel(now))
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  if (!time) return null

  return (
    <span className="flex items-baseline gap-[0.3em] text-base sm:text-lg font-medium tabular-nums">
      <span>{time}</span>
      <span>{zone}</span>
    </span>
  )
}
