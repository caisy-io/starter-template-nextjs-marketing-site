import React, { Fragment, useState } from "react";
import { GridItem } from "../../base-components/grid-item/GridItem";
import { GridPadding } from "../../base-components/grid-padding/GridPadding";
import { Grid } from "../../base-components/grid/Grid";
import { COL_AMOUNT } from "../../constants/styles/grid";
import { useUniversalText } from "../../provider/universalText";
import { IGenCompBrandCategory, IGenCompGrid } from "../../utils/types_gen";
import { CompGridBrandCard } from "../comp-grid-brand-card/CompGridBrandCard";
import { CompGridTeamMemberCard } from "../comp-grid-team-member-card/CompGridTeamMemberCard";
import { SCompGrid } from "./styles/SCompGrid";
import { SCompGridFilter } from "./styles/SCompGridFilter";
import { SCompGridFilterLabel } from "./styles/SCompGridFilterLabel";
import { SCompGridHeadline } from "./styles/SCompGridHeadline";

const GridItemComponent: React.FC<{ component: any }> = ({ component }) => {
  switch (true) {
    case component?.__typename === "CompGridBrandCard":
      return <CompGridBrandCard {...component} />;
    case component?.__typename === "CompGridTeamMemberCard":
      return <CompGridTeamMemberCard {...component} />;
    default:
      return null;
  }
};

export const CompGrid: React.FC<IGenCompGrid> = ({
  headline,
  items,
  ...props
}) => {
  const universalText = useUniversalText();
  const numberOfColumns = parseInt(
    `${props.numberOfColumns || 3}`.match(/\d/gm)[0] ?? "3"
  );

  const allCategories = [];
  // if every item has the same category do not show all
  const itemLen = items?.length ?? 0;
  for (let i = 0; i < itemLen; i++) {
    if (
      ((items?.[i] as any)?.category as IGenCompBrandCategory)?.[0]?.title &&
      !allCategories.includes(
        ((items?.[i] as any)?.category as IGenCompBrandCategory)?.[0]?.title
      )
    ) {
      allCategories.push(
        ((items?.[i] as any)?.category as IGenCompBrandCategory)?.[0]?.title
      );
    }
  }

  if (allCategories.length > 1) {
    allCategories.unshift(universalText?.filter_all || "All");
  }

  const categoryKeys = {};
  allCategories.forEach((category, index) => {
    categoryKeys[category] = index === 0;
  });

  const [filter, setFilter] = useState<string>(allCategories[0] ?? "");

  const handleBrandFilter = (itemCategories) =>
    itemCategories.find((item) => item.title === filter);

  const colAmount = numberOfColumns === 2 ? 6 : COL_AMOUNT.SILVER;

  return (
    <SCompGrid>
      {props.children}
      {items && (
        <GridPadding>
          <Grid>
            <GridItem
              bronze={{ start: 1, end: 4 }}
              silver={
                numberOfColumns === 2
                  ? { start: 3, end: 8 }
                  : { start: 1, end: 12 }
              }
            >
              {headline ? (
                <SCompGridHeadline> {headline}</SCompGridHeadline>
              ) : null}
              {items[0]?.__typename === "CompGridBrandCard" &&
                items[0].style === "withDescription" &&
                Object.keys(categoryKeys).length >= 1 && (
                  <SCompGridFilter>
                    {Object.keys(categoryKeys).map((category) => (
                      <SCompGridFilterLabel
                        key={category}
                        onClick={() => {
                          setFilter(category);
                        }}
                        isActive={filter === category}
                      >
                        {category}
                      </SCompGridFilterLabel>
                    ))}
                  </SCompGridFilter>
                )}
            </GridItem>
          </Grid>
          <Grid>
            {items
              .filter(
                (item) =>
                  // don't filter CompGridTeamMemberCard
                  item.__typename === "CompGridTeamMemberCard" ||
                  // don't filter
                  (item.__typename === "CompGridBrandCard" &&
                    item.style !== "withDescription") ||
                  (item.__typename === "CompGridBrandCard" &&
                    item.style === "withDescription" &&
                    (filter === (universalText?.filter_all || "All") ||
                      handleBrandFilter(item.category)))
              )
              .map((item, index) => {
                return (
                  <Fragment key={`grid_${item.id}_${index}`}>
                    <GridItem
                      bronze={{ col: { start: 1, end: 4 }, row: index }}
                      silver={
                        numberOfColumns === 2
                          ? {
                              col: {
                                start: 3,
                                end: 8,
                              },
                              row: index / numberOfColumns,
                            }
                          : {
                              col: {
                                start:
                                  (index % numberOfColumns) *
                                    (COL_AMOUNT.SILVER / numberOfColumns) +
                                  1,
                                end:
                                  (index % numberOfColumns) *
                                    (COL_AMOUNT.SILVER / numberOfColumns) +
                                  COL_AMOUNT.SILVER / numberOfColumns,
                              },
                              row: index / numberOfColumns,
                            }
                      }
                      gold={
                        numberOfColumns === 2
                          ? {
                              col: {
                                start:
                                  2 +
                                  (index % numberOfColumns) *
                                    (colAmount / numberOfColumns) +
                                  1,
                                end:
                                  2 +
                                  (index % numberOfColumns) *
                                    (colAmount / numberOfColumns) +
                                  colAmount / numberOfColumns,
                              },
                              row: index / numberOfColumns,
                            }
                          : undefined
                      }
                    >
                      <GridItemComponent component={item} />
                    </GridItem>
                  </Fragment>
                );
              })}
          </Grid>
        </GridPadding>
      )}
    </SCompGrid>
  );
};
