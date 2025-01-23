type DevicesProps = {
  name: string;
  description: string;
  consumokWh: number;
};

export const devicesArray: DevicesProps[] = [
  {
    name: "Ventilador",
    description: "First device description",
    consumokWh: 10,
  },
  {
    name: "Ar condicionado",
    description: "Second device description",
    consumokWh: 20,
  },
  {
    name: "Televisão",
    description: "Third device description",
    consumokWh: 30,
  },
];
