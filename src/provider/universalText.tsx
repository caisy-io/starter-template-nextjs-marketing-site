import React, { useContext } from "react";
import { IGenUniversalText } from "../utils/types_gen";

const UniversalTextProviderContext = React.createContext<
  Omit<IGenUniversalText, "__typename">
>({});

export const useUniversalText = (): Omit<IGenUniversalText, "__typename"> => {
  return useContext(UniversalTextProviderContext);
};

export const UniversalTextProvider: React.FC<{
  universalText: IGenUniversalText;
}> = ({ universalText, children }) => {
  return (
    <UniversalTextProviderContext.Provider value={universalText}>
      {children}
    </UniversalTextProviderContext.Provider>
  );
};
