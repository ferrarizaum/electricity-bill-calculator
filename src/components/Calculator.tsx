"use client";

import { devicesArray, DeviceProps } from "@/api/devices";
import { useState } from "react";
import { Button } from "./Button";
import { useStateContext } from "./Context/StateContext";

export const Calculator = () => {
  const [selectedDevices, setSelectedDevices] = useState<DeviceProps[]>([]);
  const [totalKWH, setTotalKWH] = useState<number>(0);
  const [usageDays, setUsageDays] = useState<number>(30);
  const [usageHours, setUsageHours] = useState<number>(1);
  const { selectedState } = useStateContext();

  const calculateTotalKWH = (device: DeviceProps) => {
    return (device.watts * usageHours * usageDays) / 1000;
  };

  const handleDeviceClick = (device: DeviceProps) => {
    setSelectedDevices((prevDevices) => [...prevDevices, device]);
    setTotalKWH((prevTotal) => prevTotal + calculateTotalKWH(device));
  };

  const clearSelectedDevices = () => {
    setSelectedDevices([]);
    setTotalKWH(0);
  };

  return (
    <div
      style={{
        backgroundColor: "#f5f7fa",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ flex: 1, marginRight: 20 }}>
          <h1 style={{ fontSize: "1.5rem", marginBottom: 20 }}>
            Lista de dispositivos
          </h1>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <div style={{ textAlign: "center" }}>
              <label style={{ display: "block", marginBottom: 5 }}>
                Dias de uso:
              </label>
              <select
                value={usageDays}
                onChange={(e) => setUsageDays(Number(e.target.value))}
                style={{
                  padding: 8,
                  borderRadius: 5,
                  border: "1px solid #ccc",
                  backgroundColor: "#fff",
                }}
              >
                {[...Array(31).keys()].map((day) => (
                  <option key={day} value={day + 1}>
                    {day + 1}
                  </option>
                ))}
              </select>
            </div>
            <div style={{ textAlign: "center" }}>
              <label style={{ display: "block", marginBottom: 5 }}>
                Horas por dia:
              </label>
              <select
                value={usageHours}
                onChange={(e) => setUsageHours(Number(e.target.value))}
                style={{
                  padding: 8,
                  borderRadius: 5,
                  border: "1px solid #ccc",
                  backgroundColor: "#fff",
                }}
              >
                {[...Array(25).keys()].map((hour) => (
                  <option key={hour} value={hour}>
                    {hour}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {devicesArray.map((device) => (
            <div
              key={device.id}
              style={{
                padding: "10px",
                marginBottom: 10,
                backgroundColor: "#fff",
                borderRadius: 8,
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
                textAlign: "center",
              }}
              onClick={() => handleDeviceClick(device)}
            >
              <p style={{ fontWeight: 500 }}>{device.name}</p>
            </div>
          ))}
        </div>

        <div style={{ flex: 1, marginLeft: 20 }}>
          <h1 style={{ fontSize: "1.5rem", marginBottom: 20 }}>
            Dispositivos Selecionados
          </h1>
          <div style={{ marginTop: 98 }}>
            {selectedDevices.map((device, index) => (
              <div
                key={index}
                style={{
                  padding: "10px",
                  marginBottom: 10,
                  backgroundColor: "#fff",
                  borderRadius: 8,
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  textAlign: "center",
                }}
              >
                <p style={{ fontWeight: 500 }}>{device.name}</p>
              </div>
            ))}
          </div>

          {selectedDevices.length > 0 && (
            <div style={{ textAlign: "center", marginTop: 20 }}>
              <Button
                color="#e74c3c"
                text="Limpar dispositivos selecionados"
                onClick={clearSelectedDevices}
              />
            </div>
          )}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: 40,
          padding: "20px 0",
          borderTop: "1px solid #e0e0e0",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "1.25rem", marginBottom: 10 }}>Total kWh</h2>
          <p style={{ fontSize: "1.5rem", fontWeight: 600 }}>
            {totalKWH.toFixed(1)}
          </p>
        </div>
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "1.25rem", marginBottom: 10 }}>
            Total gasto por mês
          </h2>
          <p style={{ fontSize: "1.5rem", fontWeight: 600 }}>
            R${(totalKWH * 0.824 + selectedState.tariff).toFixed(1)}
          </p>
        </div>
      </div>
    </div>
  );
};
