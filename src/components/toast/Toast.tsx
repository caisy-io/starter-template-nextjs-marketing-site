import Link from "next/link";
import React from "react";
import { SToast } from "./styles/SToast";

export const Toast: React.FC = () => {
  return (
    <SToast role="alert">
      <p>
        Great Job! You have successfully run the caisy template. Click on&nbsp;
        <Link href="/api/onboarding">this link</Link>
        &nbsp;to complete the onboarding step. To get rid of this toast, just
        delete it in the code.
      </p>
    </SToast>
  );
};
