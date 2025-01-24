"use client";

import { StateProps, statesArray } from "@/api/states";
import { useStateContext } from "./Context/StateContext";

type SelectProps = {
  text: string;
};

export const Select = ({ text }: SelectProps) => {
  const { selectedState, setSelectedState } = useStateContext();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedStateName = e.target.value;
    const state = statesArray.find((state) => state.name === selectedStateName);
    setSelectedState(state as StateProps);
  };

  return (
    <>
      <div style={{ justifySelf: "center", margin: 10 }}>
        <label>{text}</label>
      </div>
      <div>
        <select
          style={{
            backgroundColor: "#f0f0f0",
            color: "#333",
            padding: "10px 12px",
            fontSize: "16px",
            fontWeight: "bold",
            borderRadius: "5px",
            border: "1px solid #ccc",
            outline: "none",
            cursor: "pointer",
          }}
          value={selectedState?.name}
          onChange={handleChange}
        >
          {statesArray.map((state) => (
            <option key={state.id} value={state.name}>
              {state.name} (Tarifa: {state.tariff})
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
