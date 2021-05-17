import React, { useState } from "react";
import { AppState, AppContextType, AppContext } from "./app-context";
import { Main } from "./pages/main";

export const App = (): JSX.Element => {
  const [app, setAppState] = useState<AppState>({
    color: "#92140C",
    fontSize: 1,
    selectedTab: 0,
  });

  const context: AppContextType = { app, setAppState };

  return (
    <AppContext.Provider value={context}>
      <Main />
    </AppContext.Provider>
  );
};
