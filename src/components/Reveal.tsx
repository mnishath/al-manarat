import type { CSSProperties, ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

export function Reveal({
  children,
  className = "",
  style,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  as?: keyof HTMLElementTagNameMap;
}) {
  const ref = useReveal<HTMLDivElement>();
  const Component = Tag as "div";

  return (
    <Component ref={ref} className={`reveal ${className}`.trim()} style={style}>
      {children}
    </Component>
  );
}
