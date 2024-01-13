// create a context for permissions and abilities

import { createContext } from "react";
import { createContextualCan } from "@casl/react";

export const AbilityContext = createContext();
export const Can = createContextualCan(AbilityContext.Consumer);
