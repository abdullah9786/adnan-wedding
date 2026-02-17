"use client";

import { createContext, useContext } from "react";

export const RevealContext = createContext(false);

export function useRevealed() {
  return useContext(RevealContext);
}
