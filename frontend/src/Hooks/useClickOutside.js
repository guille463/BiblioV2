import { useEffect } from "react";

/**
 * Ejecuta un handler cuando se hace clic fuera del elemento referenciado.
 *
 * @param {import('react').RefObject<HTMLElement>} ref - Elemento que delimita el "dentro".
 * @param {boolean} [isActive=true] - Si es false no se registra el listener.
 * @returns {void}
 */
export function useClickOutside(ref, handler, isActive = true) {
  useEffect(() => {
    if (!isActive) return;

    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [ref, handler, isActive]);
}
