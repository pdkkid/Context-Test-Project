import {
  TabContainer,
  TabHeader,
  HeaderContainer,
} from "./tab-controller.styles";
import { DefaultTabs } from "./tabs";
import { Fragment, useContext } from "react";
import { AppContext } from "../../app-context";

export const TabController = (): JSX.Element => {
  const { app, setAppState } = useContext(AppContext);
  const { selectedTab, fontSize } = app;

  const tabs = DefaultTabs.map((x) => x);

  const handleTabChange = (newTabIndex: number) => {
    setAppState({ ...app, selectedTab: newTabIndex });
  };

  return (
    <Fragment>
      <HeaderContainer>
        {tabs.map((x, i) => (
          <TabHeader
            onClick={() => {
              handleTabChange(i);
            }}
            selected={selectedTab === i}
          >
            {x.label}
          </TabHeader>
        ))}
      </HeaderContainer>
      <TabContainer fontSize={fontSize + "em"}>{tabs[selectedTab].content(app)}</TabContainer>
    </Fragment>
  );
};
