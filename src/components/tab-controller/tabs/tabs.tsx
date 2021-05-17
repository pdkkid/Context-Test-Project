import React, { ReactNode } from "react";
import { AppState } from "../../../app-context";

export const Content = (props: AppState): ReactNode => {
  return <h3>Test</h3>;
};

export const Form = (props: AppState): ReactNode => {
  return <h3>Form Test</h3>;
};

export const Table = (props: AppState): ReactNode => {
  return <h3>Table Test</h3>;
};
