export type DeviceProps = {
  id: number;
  name: string;
  description: string;
  consumokWh: number;
};

export const devicesArray: DeviceProps[] = [
  {
    id: 1,
    name: "Ventilador",
    description: "First device description",
    consumokWh: 10,
  },
  {
    id: 2,
    name: "Ar condicionado",
    description: "Second device description",
    consumokWh: 20,
  },
  {
    id: 3,
    name: "Televisão",
    description: "Third device description",
    consumokWh: 30,
  },
];
