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
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
          <div>
            <h1>Lista de dispositivos</h1>
          </div>
          {devicesArray.map((e) => (
            <div
              key={e.id}
              style={{ textAlign: "center", margin: 10, cursor: "pointer" }}
            >
              <p onClick={() => handleClick(e)}>{e.name}</p>
            </div>
          ))}
        </div>
        <div>
          <div>
            <h1>Lista de dispositivos selecionados</h1>
          </div>
          {selectedDevices.map((e, index) => (
            <div key={index} style={{ textAlign: "center", margin: 10 }}>
              <p onClick={() => handleClick(e)}>{e.name}</p>
            </div>
          ))}
          <div style={{ textAlign: "center", margin: 10 }}>
            <Button
              color="#e74c3c"
              text="Limpar dispositivos selecionados"
              onClick={() => setSelectedDevices([])}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          margin: 10,
          padding: 10,
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1>Total kWh</h1>
          {totalConsumokWh}
        </div>
        <div style={{ textAlign: "center" }}>
          <h1>Total gasto por hora</h1>
          R$
          {(totalConsumokWh * 0.824 + selectedState.tariff).toFixed(1)}
        </div>
      </div>
    </>
  );
};
