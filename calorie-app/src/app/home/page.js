"use client";
import Image from "next/image";
import { useAuth } from "../context/authContext";
import SignInPage from "../sign-in/page";
import { RadialChart } from "../components/calorieChart";
import { DataTable } from "./data-table";

export default function Home() {
  const { user, logOut } = useAuth();
  let foods = [{foodName: "pizza",calories: "160"},{foodName: "sushi", calories: "200"}];

  if (user) {
    const uid = user.uid;

    return (
        <div className="items-center justify-items-center justify-center w-screen min-h-screen p-4 pb-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col row-start-2 justify-items-center items-center justify-center">
          <div className="w-64">
            <RadialChart></RadialChart>
            <DataTable columns={columns} data={foods} />
          </div>
        </main>
      </div>
    );
    // ...
  } else {
    return <SignInPage />;
  }
}