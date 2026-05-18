"use client";

import { useRef, type HTMLAttributes, type ReactNode } from "react";
import { useDragScroll } from "@/lib/use-drag-scroll";

type DragScrollerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

/**
 * A horizontal scroll container that supports mouse drag-to-scroll
 * (cursor: grab → grabbing). Children are rendered as-is.
 */
export function DragScroller({
  children,
  className = "",
  ...rest
}: DragScrollerProps) {
  const ref = useRef<HTMLDivElement>(null);
  useDragScroll(ref);
  return (
    <div
      ref={ref}
      className={`drag-scroller cursor-grab active:cursor-grabbing ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
