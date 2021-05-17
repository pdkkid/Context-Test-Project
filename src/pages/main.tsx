import { useContext } from "react";
import { AppContext } from "../app-context";
import { MainContainer } from "./main.styles";
import { Selector } from "../components/selector";
import { TabController } from "../components/tab-controller";

export const Main = (): JSX.Element => {
  const context = useContext(AppContext);
  const { color, name } = context.app;

  return (
    <MainContainer color={color!}>
      <h1>{name && name + "'s "} React Context Demo</h1>
      <Selector />
      <TabController />
    </MainContainer>
  );
};
