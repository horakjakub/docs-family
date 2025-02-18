import { JSX } from "react";

export default function Loader(): JSX.Element {
  return (
    <div className="relative w-16 h-16">
      <div className="absolute inset-0 animate-spin rounded-full border-b-4 border-primary"></div>
      <div className="absolute inset-0 animate-spin rounded-full border-b-4 border-secondary animate-[spin_1.5s_linear_infinite]"></div>
      <div className="absolute inset-0 animate-spin rounded-full border-b-4 border-accent animate-[spin_2s_linear_infinite]"></div>
      <div className="absolute inset-0 animate-spin rounded-full border-b-4 border-info animate-[spin_2.5s_linear_infinite]"></div>
    </div>
  )
}
