import React from "react";
import { SGridPadding } from "../../base-components/grid-padding/styles/SGridPadding";
import { SFlex } from "../../base-components/flex/styles/SFlex";
import { IGenCompFacts } from "../../utils/types_gen";
import { SCompFacts } from "./styles/SCompFacts";
import { SCompFactsItem } from "./styles/SCompFactsItem";
import { SCompFactsLabel } from "./styles/SCompFactsLabel";
import { SCompFactsValue } from "./styles/SCompFactsValue";

export const CompFacts: React.FC<IGenCompFacts> = ({ facts }) => {
  return (
    <SCompFacts>
      <SGridPadding>
        <SFlex
          bronze={{ direction: "column", alignItems: "stretch" }}
          silver={{ direction: "row", justify: "stretch", wrap: "wrap" }}
          gold={{ wrap: "nowrap" }}
        >
          {facts?.map(
            (el) =>
              el?.__typename === "CompFactsFact" && (
                <SCompFactsItem key={el.id}>
                  <SCompFactsLabel>{el.label}</SCompFactsLabel>
                  <SCompFactsValue>{el.value}</SCompFactsValue>
                </SCompFactsItem>
              )
          )}
        </SFlex>
      </SGridPadding>
    </SCompFacts>
  );
};
