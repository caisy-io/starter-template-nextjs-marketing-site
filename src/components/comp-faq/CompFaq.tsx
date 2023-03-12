import React, { useState } from "react";
import { SGridPadding } from "../../base-components/grid-padding/styles/SGridPadding";
import { SCompFaq } from "./styles/SCompFaq";
import { IGenCompFaq } from "../../utils/types_gen";
import { CompFaqItem } from "./comp-faq-item/CompFaqItem";

export const CompFaq: React.FC<IGenCompFaq> = ({ faqItems }) => {
  const [activeId, setActiveId] = useState<string>();
  const handleActiveFaq = (id: string) => () => {
    setActiveId(id === activeId ? "" : id);
  };

  return (
    <SCompFaq>
      <SGridPadding>
        {faqItems
          ? faqItems.map(
              (faqItem) =>
                faqItem?.__typename === "CompFaqItem" && (
                  <CompFaqItem
                    item={faqItem}
                    key={faqItem?.id}
                    handleActiveFaq={handleActiveFaq}
                    activeId={activeId}
                  />
                )
            )
          : null}
      </SGridPadding>
    </SCompFaq>
  );
};
