"use client";

import { devicesArray, DeviceProps } from "@/api/devices";
import { useState } from "react";
import { Button } from "./Button";
import { useStateContext } from "./Context/StateContext";

export const Calculator = () => {
  const [selectedDevices, setSelectedDevices] = useState<DeviceProps[]>([]);
  const [totalKWH, setTotalKWH] = useState<number>(0);
  const [usageDays, setUsageDays] = useState<number>(30); // Dias de uso padrão
  const [usageHours, setUsageHours] = useState<number>(1); // Horas de uso padrão por dia
  const { selectedState } = useStateContext();

  const handleClick = (e: DeviceProps) => {
    setSelectedDevices((prevDevices) => [...prevDevices, e]);
    let teste = totalKWH + (e.watts * usageHours * usageDays) / 1000;
    setTotalKWH(teste);
  };

  // const totalConsumokWh = selectedDevices.reduce(
  //   (total, device) => total + (device.watts * usageHours * usageDays) / 1000,
  //   0
  // );

  let totalConsumokWh = totalKWH;

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
              <p>{e.name}</p>
            </div>
          ))}
          <div style={{ textAlign: "center", margin: 10 }}>
            <Button
              color="#e74c3c"
              text="Limpar dispositivos selecionados"
              onClick={() => {
                setSelectedDevices([]);
                setTotalKWH(0);
              }}
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
          <label>Dias de uso:</label>
          <select
            value={usageDays}
            onChange={(e) => setUsageDays(Number(e.target.value))}
          >
            {[...Array(31).keys()].map((day) => (
              <option key={day} value={day + 1}>
                {day + 1}
              </option>
            ))}
          </select>
        </div>

        <div style={{ textAlign: "center" }}>
          <label>Horas por dia:</label>
          <select
            value={usageHours}
            onChange={(e) => setUsageHours(Number(e.target.value))}
          >
            {[...Array(25).keys()].map((hour) => (
              <option key={hour} value={hour}>
                {hour}
              </option>
            ))}
          </select>
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
          {totalConsumokWh.toFixed(1)}
        </div>
        {/* <div style={{ textAlign: "center" }}>
            <h1>Total gasto por hora</h1>
            R$
            {(totalConsumokWh * 0.824 + selectedState.tariff).toFixed(1)}
          </div> */}
        <div style={{ textAlign: "center" }}>
          <h1>Total gasto por mês</h1>
          R$
          {(totalConsumokWh * 0.824 + selectedState.tariff).toFixed(1)}
        </div>
      </div>
    </>
  );
};
