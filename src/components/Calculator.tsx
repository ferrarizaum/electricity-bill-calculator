"use client";

import { devicesArray, DeviceProps } from "@/api/devices";
import { useState } from "react";
import { Button } from "./Button";

export const Calculator = () => {
  const [selectedDevices, setSelectedDevices] = useState<DeviceProps[]>([]);

  const handleClick = (e: DeviceProps) => {
    console.log(e);
    setSelectedDevices((prevDevices) => [...prevDevices, e]);
  };

  const totalConsumokWh = selectedDevices.reduce(
    (total, device) => total + device.consumokWh,
    0
  );

  return (
    <div>
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
        <Button
          text="Limpar dispositivos selecionados"
          onClick={() => setSelectedDevices([])}
        />
        {selectedDevices.map((e, index) => (
          <p key={index}>{e.name}</p>
        ))}
      </div>
      <div>
        <h1>Total kWh</h1>
        {totalConsumokWh}
      </div>
    </div>
  );
};
