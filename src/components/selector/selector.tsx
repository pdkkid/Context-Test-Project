import React, { useContext } from "react";
import { Color, SelectorContainer, FontSelector } from ".";
import { AppContext } from "../../app-context";

export const DefaultColors: string[] = [
  "#92140C",
  "#353238",
  "#BE5A38",
  "#F9C74F",
  "#90BE6D",
  "#43AA8B",
  "#577590",
];

export const Selector = (): JSX.Element => {
  const { app, setAppState } = useContext(AppContext);

  const handleFontChange = (size: number) => {
    setAppState({ ...app, fontSize: Number(size.toFixed(1)) });
  };

  const handleNameChange = (name: string) => {
    setAppState({ ...app, name: name });
  };

  return (
    <SelectorContainer>
      <h1>{app.name ? app.name + "'s" : "Your"} React Context Demo</h1>
      <input
        type="text"
        onChange={(event) => handleNameChange(event.target.value)}
      />
      <FontSelector>
        <button onClick={() => handleFontChange(app.fontSize + 0.1)}>+</button>
        {app.fontSize + "em"}
        <button onClick={() => handleFontChange(app.fontSize - 0.1)}>-</button>
      </FontSelector>

      {DefaultColors.map((x) => (
        <Color
          onClick={() => {
            setAppState({ ...app, color: x });
          }}
          selected={app.color === x}
          fill={x}
        />
      ))}
    </SelectorContainer>
  );
};
