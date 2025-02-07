"use client";
import { HeroUIProvider } from "@heroui/react";
import {  SignUp} from "@/components";

export default function Home() {
  return (
    <HeroUIProvider>
      <div className="min-h-screen max-h-screen bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-[#1d4ed8] via-[#1e40af] to-[#111827] text-white">
        {/* <Messages />
        <Inputs /> */}
        <SignUp />
        {/* <Chat /> */}
      </div>
    </HeroUIProvider>
  );
}