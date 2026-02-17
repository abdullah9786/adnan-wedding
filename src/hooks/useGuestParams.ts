"use client";

import { useSearchParams } from "next/navigation";

export function useGuestParams() {
  const searchParams = useSearchParams();
  const rawName = searchParams.get("name");
  const withFamily = searchParams.get("withFamily") === "true";

  const guestName = rawName
    ? rawName
        .split(" ")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
        .join(" ")
    : null;

  return { guestName, withFamily };
}
