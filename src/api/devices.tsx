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
  {
    id: 4,
    name: "Chuveiro elétrico",
    description: "Fourth device description",
    consumokWh: 140,
  },
  {
    id: 5,
    name: "Computador",
    description: "Fifth device description",
    consumokWh: 50,
  },
  {
    id: 6,
    name: "Geladeira",
    description: "Common household refrigerator",
    consumokWh: 150,
  },
  {
    id: 7,
    name: "Microondas",
    description: "Microwave oven for heating food",
    consumokWh: 120,
  },
  {
    id: 8,
    name: "Máquina de lavar roupa",
    description: "Washing machine for cleaning clothes",
    consumokWh: 250,
  },
  {
    id: 9,
    name: "Lava-louças",
    description: "Dishwasher for cleaning dishes",
    consumokWh: 180,
  },
  {
    id: 10,
    name: "Secadora de roupas",
    description: "Clothes dryer",
    consumokWh: 300,
  },
  {
    id: 11,
    name: "Aspirador de pó",
    description: "Vacuum cleaner for cleaning floors",
    consumokWh: 90,
  },
  {
    id: 12,
    name: "Console de videogame",
    description: "Gaming console for entertainment",
    consumokWh: 40,
  },
  {
    id: 13,
    name: "Roteador Wi-Fi",
    description: "Wi-Fi router for internet connection",
    consumokWh: 10,
  },
  {
    id: 14,
    name: "Forno elétrico",
    description: "Electric oven for baking",
    consumokWh: 200,
  },
  {
    id: 15,
    name: "Ferro de passar",
    description: "Electric iron for ironing clothes",
    consumokWh: 100,
  },
];
