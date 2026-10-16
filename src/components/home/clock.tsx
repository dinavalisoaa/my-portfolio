"use client";

import { useEffect, useState } from "react";

const fmt = new Intl.DateTimeFormat("en-US", {
  timeZone: "Indian/Antananarivo",
  hour: "numeric",
  minute: "2-digit",
});

export function Clock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);

  return <span suppressHydrationWarning>{now ? fmt.format(now) : "--:--"}</span>;
}
