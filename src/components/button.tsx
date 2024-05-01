"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

let buttonCopy = {
  idle: "Send me a login link",
  loading: <Spinner size={16} color="rgba(255, 255, 255, 0.65)" />,
  success: "Login link sent!",
};

function Spinner({
  size = 20,
  color = "#fff",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <div
      className="wrapper"
      style={
        {
          ["--spinner-size"]: `${size}px`,
          ["--spinner-color"]: color,
        } as React.CSSProperties
      }
    >
      <div className="spinner">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="bar" />
        ))}
      </div>
    </div>
  );
}

export default function Button() {
  let [buttonState, setButtonState] = useState<keyof typeof buttonCopy>("idle");

  function handleClick() {
    if (buttonState !== "idle") return;
    setButtonState("loading");

    setTimeout(() => {
      setButtonState("success");
    }, 1800);

    setTimeout(() => {
      setButtonState("idle");
    }, 3200);
  }

  return (
    <button
      onClick={handleClick}
      className="bg-gradient-to-b overflow-hidden relative from-[#5E6BC8] to-[#4A55A2] text-white w-44 shadow-[inset_0_0_1px_1px_rgb(0,0,0,0.08),0_1px_1.5px_0_rgb(0,0,0,0.32),0_0_0_0.5px_rgb(94,107,200,100)] hover:bg-primary/90 inline-flex select-none items-center justify-center rounded-lg text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 h-8 px-4 py-2"
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={buttonState}
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 25 }}
          transition={{ type: "spring", duration: 0.3, bounce: 0 }}
          className="w-full"
        >
          {buttonCopy[buttonState]}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
