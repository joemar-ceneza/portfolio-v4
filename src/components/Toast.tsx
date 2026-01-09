"use client";

import { useEffect } from "react";

type ToastProps = {
  message: string;
  type: "success" | "error";
  onClose: () => void;
};

export default function Toast({ message, type, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className={`
        fixed bottom-5 right-5 z-50 px-6 py-4 rounded-lg shadow-lg text-black cursor-pointer
        transition-transform transform duration-300 ease-in-out
        ${type === "success" ? "bg-accent" : "bg-red-500"}
      `}
    >
      {message}
    </div>
  );
}
