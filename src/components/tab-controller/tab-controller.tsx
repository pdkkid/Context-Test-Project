import { TabContainer, TabHeader, StyledTab } from "./tab-controller.styles";
import { DefaultTabs } from "./tabs";
import { useContext } from "react";
import { AppContext } from "../../app-context";

export const TabController = (): JSX.Element => {
  const { app, setAppState } = useContext(AppContext);
  const { selectedTab } = app;

  const tabs = DefaultTabs.map((x) => x);

  const handleTabChange = (newTab: string) => {
    setAppState({ ...app, selectedTab: newTab });
  };

  return (
    <TabContainer>
      {tabs.map((x) => (
        <TabHeader
          onClick={() => {
            handleTabChange(x.label);
          }}
          selected={selectedTab === x.label}
        >
          {x.label}
        </TabHeader>
      ))}
      {tabs.map((x) => {
        return x.label === selectedTab ? (
          <StyledTab>{x.content}</StyledTab>
        ) : null;
      })}
    </TabContainer>
  );
};
