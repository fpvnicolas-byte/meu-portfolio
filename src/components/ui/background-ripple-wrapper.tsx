"use client";

import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

interface BackgroundRippleWrapperProps {
  rows?: number;
  cols?: number;
  cellSize?: number;
}

export function BackgroundRippleWrapper({
  rows = 20,
  cols = 50,
  cellSize = 30,
}: BackgroundRippleWrapperProps) {
  return (
    <BackgroundRippleEffect rows={rows} cols={cols} cellSize={cellSize} />
  );
}
