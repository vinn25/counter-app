"use client";

import { store } from "@/redux/store";
import { Provider } from "react-redux";

export function StoreProvider({ children }: any) {
  return <Provider store={store}>{children}</Provider>;
}
