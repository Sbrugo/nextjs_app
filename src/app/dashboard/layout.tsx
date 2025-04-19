"use client";
import SideNav from "src/components/ui/sidenav";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full flex">
      <div className="md:w-64">
        <SideNav />
      </div>
      <div className="flex flex-col gap-2 p-4">
        <div className="space-y-4">{children}</div>
      </div>
    </main>
  );
}
