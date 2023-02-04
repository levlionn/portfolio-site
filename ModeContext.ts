import { createContext } from "react";
import { Mode } from "@/types";

export const ModeContext = createContext<{
  mode: Mode;
  setMode: (mode: Mode) => void;
}>({
  mode: "copywriter",
  setMode: () => {},
});
