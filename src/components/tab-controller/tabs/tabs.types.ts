import { ReactNode } from "react";
import { AppState } from "../../../app-context";
import { Content, Form, Table, Icons, Video, Grid } from "./tabs";

export type TabType = {
  label: string;
  content: (props: AppState) => ReactNode;
};

export const DefaultTabs: TabType[] = [
  { label: "Content", content: Content },
  { label: "Form", content: Form },
  { label: "Table", content: Table },
  { label: "Icons", content: Icons },
  { label: "Video", content: Video },
  { label: "Grid", content: Grid },
];
