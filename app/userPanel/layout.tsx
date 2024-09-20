import React from "react";
import { Sidebar } from "@/components/layout/sidebar/sidebar";
import Menu from "@/components/layout/menubar/menubar";

export default function UserPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Menu/>
      <Sidebar />
      {children}
    </div>
  );
}
