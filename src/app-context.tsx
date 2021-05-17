import { createContext } from "react";

export interface AppState {
  color?: string;
  name?: string;
  selectedTab: number;
  fontSize: number;
}

export interface AppContextType {
  app: AppState;
  setAppState: (state: AppState) => void;
}

export const AppContext = createContext<AppContextType>({
  app: { fontSize: 1, selectedTab: 0 },
  setAppState: () => {},
});
