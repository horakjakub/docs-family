"use client";
import { redirect, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const LOGGED_USER = "loggedUser";

function loadLoggedUser(): string | null {
  if (typeof window === "undefined") return null;

  return localStorage.getItem(LOGGED_USER);
}

export default function Home() {
  const searchParams = useSearchParams();
  const user = loadLoggedUser();
  const paramsUser = searchParams.get("email");
  const loggedUser = user || paramsUser;

  useEffect(() => {
    if (user || (user && !paramsUser)) return;
    if (typeof window === "undefined") return;
    localStorage.setItem(LOGGED_USER, paramsUser as string);
  }, [user, paramsUser]);

  if (!loggedUser && typeof window !== "undefined") redirect("create-user");

  return (
    <>
      <div>MY SWEET FAMILY</div>
      <button
        onClick={() => {
          localStorage.removeItem(LOGGED_USER);
        }}
      >
        CLEAR
      </button>
    </>
  );
}
