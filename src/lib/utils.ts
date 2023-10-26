import { twMerge, type ClassNameValue } from "tailwind-merge";

export function cn(...inputs: ClassNameValue[]) {
  return twMerge(...inputs);
}

export function isClickOutside(elememt: HTMLElement, e: MouseEvent) {
  const rect = elememt.getBoundingClientRect();
  return e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom;
}
