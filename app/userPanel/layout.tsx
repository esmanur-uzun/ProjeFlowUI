"use client"
import React from "react";
import { Sidebar } from "@/components/layout/sidebar/sidebar";
import Menu from "@/components/layout/menubar/menubar";
import { useGlobalDataContext } from "@/context/globalDataContext";
import { cn } from "@/lib/utils";

export default function UserPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {isOpen,setIsOpen} = useGlobalDataContext()

  return (
    <div>
      <Menu />
      <Sidebar />
      <main
        className={cn(
          "min-h-[calc(100vh_-_56px)] bg-zinc-50 ps-5 dark:bg-zinc-900 transition-[margin-left] ease-in-out duration-300",
          isOpen === false ? "lg:ml-[90px]" : "lg:ml-72"
        )}
      >
        {children}
      </main>
      
      
    </div>
  );
}
