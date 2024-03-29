import Dashboard from "@/components/Dashboard";
import React from "react";
interface HomeProps{
  children:React.ReactNode
}

export default function Home({children }: HomeProps): JSX.Element{
  return (
    <main>
      <Dashboard/>
    </main>
  );
}
