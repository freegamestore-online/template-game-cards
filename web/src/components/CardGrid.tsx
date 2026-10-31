import type { ReactNode } from "react";

interface Props {
  columns: number;
  children: ReactNode;
}

export function CardGrid({ columns, children }: Props) {
  return (
    <div
      className="card-grid"
      /* dynamic: column count from props */
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
      }}
    >
      {children}
    </div>
  );
}
