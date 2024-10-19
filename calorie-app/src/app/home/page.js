"use client";
import Image from "next/image";
import { useAuth } from "../context/authContext";
import SignInPage from "../sign-in/page";

export default function Home() {
  const { user, logOut } = useAuth();

  if (user) {
    const uid = user.uid;

    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"></main>
      </div>
    );
    // ...
  } else {
    return <SignInPage />;
  }
}
