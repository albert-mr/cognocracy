"use client"

import { useEffect, useState } from "react"

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
          timeZone: "Europe/Madrid",
        })
      )
      const parts = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/Madrid",
        timeZoneName: "short",
      }).formatToParts(now)
      const tz = parts.find((p) => p.type === "timeZoneName")?.value ?? ""
      setZone(tz.replace("GMT+2", "CEST").replace("GMT+1", "CET"))
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  if (!time) return null

  return <span className="text-base sm:text-lg font-medium">{time} {zone}</span>
}
