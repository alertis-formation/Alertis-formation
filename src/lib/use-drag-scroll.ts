"use client";

import { useEffect, type RefObject } from "react";

/**
 * Adds mouse drag-to-scroll behavior to a horizontally scrollable element.
 * - Captures pointer events so the drag continues even when the cursor strays
 *   outside the container.
 * - Disables native image dragging on descendants.
 * - Swallows the click event if the user actually dragged (> 4 px), so cards
 *   don't navigate at the end of a drag.
 */
export function useDragScroll<T extends HTMLElement>(
  ref: RefObject<T | null>,
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let isDown = false;
    let pointerId = -1;
    let startX = 0;
    let scrollLeft = 0;
    let moved = false;

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      isDown = true;
      moved = false;
      pointerId = e.pointerId;
      el.classList.add("is-dragging");
      startX = e.clientX;
      scrollLeft = el.scrollLeft;
      // Capture so subsequent pointer events go to this element
      try {
        el.setPointerCapture(pointerId);
      } catch {
        /* no-op */
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDown) return;
      const walk = e.clientX - startX;
      if (Math.abs(walk) > 4) moved = true;
      el.scrollLeft = scrollLeft - walk;
      // Avoid native text selection / image drag taking over
      e.preventDefault();
    };

    const stop = () => {
      if (pointerId !== -1) {
        try {
          el.releasePointerCapture(pointerId);
        } catch {
          /* no-op */
        }
      }
      isDown = false;
      pointerId = -1;
      el.classList.remove("is-dragging");
    };

    const onClickCapture = (e: MouseEvent) => {
      if (moved) {
        e.stopPropagation();
        e.preventDefault();
        moved = false;
      }
    };

    // Prevent the browser's native image/link drag
    const onDragStart = (e: DragEvent) => {
      e.preventDefault();
    };

    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", stop);
    el.addEventListener("pointercancel", stop);
    el.addEventListener("click", onClickCapture, true);
    el.addEventListener("dragstart", onDragStart);

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", stop);
      el.removeEventListener("pointercancel", stop);
      el.removeEventListener("click", onClickCapture, true);
      el.removeEventListener("dragstart", onDragStart);
    };
  }, [ref]);
}
