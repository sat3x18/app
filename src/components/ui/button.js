// src/components/ui/button.js
import React from "react";

export function Button({ children, className, ...props }) {
  return (
    <button className={`px-8 py-4 rounded-2xl shadow-lg ${className}`} {...props}>
      {children}
    </button>
  );
}
