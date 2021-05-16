import { useContext } from "react";
import { AppContext } from "../app-context";
import { MainContainer } from "./main.styles";
import { Selector } from "../components/selector";
import { TabController } from "../components/tab-controller";

export const Main = (): JSX.Element => {
  const context = useContext(AppContext);
  const { color } = context.app;

  return (
    <MainContainer color={color!}>
      <Selector />
      <TabController />
    </MainContainer>
  );
};
