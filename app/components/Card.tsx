import React from "react";
import { styles } from "@/app/data/styles";

export default function Card({
  children,
  strong,
  className = "",
}: {
  children: React.ReactNode;
  strong?: boolean;
  className?: string;
}) {
  return (
    <div
      className={"rounded-2xl " + (className || "")}
      style={strong ? styles.cardStrong : styles.card}
    >
      {children}
    </div>
  );
}
