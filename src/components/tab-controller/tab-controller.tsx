import { TabContainer, TabHeader, StyledTab } from "./tab-controller.styles";
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
    <TabContainer fontSize={fontSize + "em"}>
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
      <StyledTab>
          {tabs[selectedTab].content(app)}
      </StyledTab>
    </TabContainer>
  );
};
