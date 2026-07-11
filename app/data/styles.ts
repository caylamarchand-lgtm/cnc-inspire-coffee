import React from "react";
import { PALETTE } from "@/app/data/palette";
export const styles: Record<string, React.CSSProperties> = {
  pageBg: {
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/coffee-bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    color: "#F4F4F4",
  },

card: {
  background: PALETTE.card,
  border: "1px solid " + PALETTE.border,
  boxShadow: "0 10px 28px rgba(0,0,0,0.10)",
},

cardStrong: {
  background: PALETTE.cardStrong,
  border: "1px solid " + PALETTE.border,
  boxShadow: "0 14px 36px rgba(0,0,0,0.14)",
},

chip: {
  background: "rgba(212, 239, 234, 0.65)",
  border: "1px solid rgba(155, 207, 199, 0.65)",
  boxShadow: "0 10px 24px rgba(0,0,0,0.12)",
  backdropFilter: "blur(10px)",
},

  squareCard: {
    background: "rgba(212, 239, 234, 0.60)",
    border: "1px solid rgba(155, 207, 199, 0.65)",
    boxShadow: "0 14px 40px rgba(0, 0, 0, 0.35)",
    backdropFilter: "blur(10px)",
    borderRadius: 22,
    minHeight: 220,
  },
};