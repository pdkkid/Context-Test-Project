import React, { useContext } from "react";
import { Color, SelectorContainer, NameSelector, ColorSelector, FontSelector } from ".";
import { AppContext } from "../../app-context";

export const DefaultColors: string[] = [
  "#335C67",
  "#60935D",
  "#E09F3E",
  "#907F9F",
  "#EF476F",
  "#9E2A2B",
  "#ba2477",
];

export const Selector = (): JSX.Element => {
  const { app, setAppState } = useContext(AppContext);

  const handleFontChange = (size: number) => {
    switch (Math.sign(size)) {
      case -1: {
        size > 0 && setAppState({ ...app, fontSize: Number(size.toFixed(1)) });
        break;
      }
      case 1: {
        size <= 3 && setAppState({ ...app, fontSize: Number(size.toFixed(1)) });
        break;
      }
    }
  };

  const handleNameChange = (name: string) => {
    setAppState({ ...app, name: name });
  };

  return (
    <SelectorContainer>
        <NameSelector>
          <textarea
            rows={1}
            cols={10}
            wrap="off"
            placeholder="Name"
            autoCapitalize="words"
            onBlur={(event) => handleNameChange(event.target.value)}
          />
        </NameSelector>
        <FontSelector>
          <button onClick={() => handleFontChange(app.fontSize - 0.1)}>
            {"<"}
          </button>
          <span>{app.fontSize + " em"}</span>
          <button onClick={() => handleFontChange(app.fontSize + 0.1)}>
            {">"}
          </button>
        </FontSelector>
        <ColorSelector>
          {DefaultColors.map((x) => (
            <Color
              onClick={() => {
                setAppState({ ...app, color: x });
              }}
              selected={app.color === x}
              fill={x}
            />
          ))}
        </ColorSelector>
    </SelectorContainer>
  );
};
