"use client";

import { devicesArray, DeviceProps } from "@/api/devices";
import { useState } from "react";
import { Button } from "./Button";
import { useStateContext } from "./Context/StateContext";

export const Calculator = () => {
  const [selectedDevices, setSelectedDevices] = useState<DeviceProps[]>([]);
  const { selectedState } = useStateContext();
  console.log(selectedState);
  const handleClick = (e: DeviceProps) => {
    console.log(e);
    setSelectedDevices((prevDevices) => [...prevDevices, e]);
  };

  const totalConsumokWh = selectedDevices.reduce(
    (total, device) => total + device.consumokWh,
    0
  );

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: 50,
          marginBottom: 50,
        }}
      >
        <div>
          <h1>Lista de dispositivos</h1>
          {devicesArray.map((e) => (
            <p key={e.id} onClick={() => handleClick(e)}>
              {e.name}
            </p>
          ))}
        </div>
        <div>
          <h1>Lista de dispositivos selecionados</h1>
          {selectedDevices.map((e, index) => (
            <p key={index}>{e.name}</p>
          ))}
          <Button
            color="#e74c3c"
            text="Limpar dispositivos selecionados"
            onClick={() => setSelectedDevices([])}
          />
        </div>
      </div>
      <div style={{ justifyItems: "center" }}>
        <h1>Total kWh</h1>
        {totalConsumokWh}
        <h1>Total gasto por hora</h1>
        R$
        {(totalConsumokWh * 0.824 + selectedState.tariff).toFixed(1)}
      </div>
    </>
  );
};
