"use client";

import { ButtonHTMLAttributes } from "react";

export default function SubmitButton({
  text,
  className,
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
}) {
  return (
    <button type="submit" className={`btn ${className}`}>
      {text}
    </button>
  );
}
