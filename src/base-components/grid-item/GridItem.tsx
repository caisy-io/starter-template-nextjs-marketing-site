import React from "react";
import { SGridItem } from "./styles/SGridItem";

export interface IGridItemSpecDistance {
  start: number;
  end?: number;
}
export interface IGridItemSpec {
  col: number | IGridItemSpecDistance;
  row?: number | IGridItemSpecDistance;
  order?: number;
}

export interface IGridItem {
  bronze: IGridItemSpec | IGridItemSpecDistance | null;
  silver?: IGridItemSpec | IGridItemSpecDistance | null;
  gold?: IGridItemSpec | IGridItemSpecDistance | null;
  platinum?: IGridItemSpec | IGridItemSpecDistance | null;
  diamond?: IGridItemSpec | IGridItemSpecDistance | null;
}

export const GridItem: React.FC<IGridItem> = (props) => (
  <SGridItem {...props}>{props.children}</SGridItem>
);
