"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { StateProps, statesArray } from "@/api/states";

interface StateContextType {
  selectedState: StateProps;
  setSelectedState: (state: StateProps) => void;
}

// Default values for the context
const defaultContextValue: StateContextType = {
  selectedState: statesArray[0], // or you can use statesArray[0] as a default
  setSelectedState: () => {},
};

const StateContext = createContext<StateContextType>(defaultContextValue);

export const useStateContext = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useStateContext must be used within a StateProvider");
  }
  return context;
};

interface StateProviderProps {
  children: ReactNode;
}

export const StateProvider: React.FC<StateProviderProps> = ({ children }) => {
  const [selectedState, setSelectedState] = useState<StateProps>(
    statesArray[0]
  );

  return (
    <StateContext.Provider value={{ selectedState, setSelectedState }}>
      {children}
    </StateContext.Provider>
  );
};
