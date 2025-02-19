"use client";
import { redirect, useSearchParams } from "next/navigation";
import { useEffect } from "react";

function loadLoggedUser(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("loggedUser");
}

export default function Home() {
  const searchParams = useSearchParams();
  const user = loadLoggedUser();
  const paramsUser = searchParams.get("email");
  const loggedUser = user || paramsUser;
  useEffect(() => {
    if (user || (user && !paramsUser)) return;
    if (typeof window === "undefined") return;
    localStorage.setItem("loggedUser", paramsUser as string);
  }, [user, paramsUser]);
  if (!loggedUser) redirect("create-user");

  return (
    <>
      <div>HOME SWEET HOME</div>
      <button
        onClick={() => {
          localStorage.removeItem("loggedUser");
        }}
      >
        CLEAR
      </button>
    </>
  );
}
