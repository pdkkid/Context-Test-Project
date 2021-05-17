import React, { ReactNode } from "react";
import { AppState } from "../../../app-context";
import { StyledContent } from "./tabs.style";
import Faker from 'faker';
export const Content = (props: AppState): ReactNode => {
  return (
    <StyledContent>
        <h2>
      {props.name && "Hi " + props.name + "!"}
        </h2>
        <h3>
        Here are some random lorem ipsum to liven up your day
        </h3>
        <hr/>
        <div>
          <p>
            {Faker.lorem.paragraphs(10)}
          </p>
        </div>
    </StyledContent>
  );
};

export const Form = (props: AppState): ReactNode => {
  return <h3>Form Test</h3>;
};

export const Table = (props: AppState): ReactNode => {
  return <h3>Table Test</h3>;
};

export const Icons = (props: AppState): ReactNode => {
  return <h3>Icons Test</h3>;
};

export const Video = (props: AppState): ReactNode => {
  return <h3>Video Test</h3>;
};

export const Grid = (props: AppState): ReactNode => {
  return <h3>Grid Test</h3>;
};
