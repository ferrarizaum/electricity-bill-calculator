"use client";

import { StateProps, statesArray } from "@/api/states";
import { useStateContext } from "./Context/StateContext";

export const Select = () => {
  const { selectedState, setSelectedState } = useStateContext();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedStateName = e.target.value;
    const state = statesArray.find((state) => state.name === selectedStateName);
    setSelectedState(state as StateProps);
  };

  return (
    <div>
      <label>Choose a state:</label>
      <select value={selectedState?.name} onChange={handleChange}>
        {statesArray.map((state) => (
          <option key={state.id} value={state.name}>
            {state.name} (Tariff: {state.tariff})
          </option>
        ))}
      </select>
      {selectedState && <p>You selected: {selectedState.name}</p>}
    </div>
  );
};
