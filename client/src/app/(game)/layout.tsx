"use client";

import { Provider } from "react-redux";
import { AppStore } from "@/stores/AppStore";
import MainNavigation from "@/components/MainNavigation";

export default function RootGameLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider AppStore={AppStore}>
      <div className="max-w-screen-2xl mx-auto bg-slate-800 h-screen">
        <div className="bg-white">
          <MainNavigation>{children}</MainNavigation>
        </div>
      </div>
    </Provider>
  );
}
