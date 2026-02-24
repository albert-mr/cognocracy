"use client"

import { useEffect, useState } from "react"

export function LocalTime() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone: "Europe/Madrid",
        })
      )
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  if (!time) return null

  return <span className="text-base sm:text-lg font-medium">{time} CET</span>
}
