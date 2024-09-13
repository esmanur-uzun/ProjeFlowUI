import React from "react";
import { Sidebar } from "@/components/layout/sidebar/sidebar";

export default function UserPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Sidebar />
      {children}
    </div>
  );
}
