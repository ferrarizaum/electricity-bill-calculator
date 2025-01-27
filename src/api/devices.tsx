export type DeviceProps = {
  id: number;
  name: string;
  description: string;
  watts: number;
};

export const devicesArray: DeviceProps[] = [
  {
    id: 1,
    name: "Ventilador",
    description: "Electric fan for cooling",
    watts: 50,
  },
  {
    id: 2,
    name: "Ar condicionado",
    description: "Air conditioner",
    watts: 2000,
  },
  {
    id: 3,
    name: "Televisão",
    description: "LED television",
    watts: 100,
  },
  {
    id: 4,
    name: "Chuveiro elétrico",
    description: "Electric shower",
    watts: 6000,
  },
  {
    id: 5,
    name: "Computador",
    description: "Desktop computer",
    watts: 200,
  },
  {
    id: 6,
    name: "Geladeira",
    description: "Common household refrigerator",
    watts: 150,
  },
  {
    id: 7,
    name: "Microondas",
    description: "Microwave oven for heating food",
    watts: 1200,
  },
  {
    id: 8,
    name: "Máquina de lavar roupa",
    description: "Washing machine for cleaning clothes",
    watts: 500,
  },
  {
    id: 9,
    name: "Lava-louças",
    description: "Dishwasher for cleaning dishes",
    watts: 1500,
  },
  {
    id: 10,
    name: "Secadora de roupas",
    description: "Clothes dryer",
    watts: 2500,
  },
  {
    id: 11,
    name: "Aspirador de pó",
    description: "Vacuum cleaner for cleaning floors",
    watts: 800,
  },
  {
    id: 12,
    name: "Console de videogame",
    description: "Gaming console for entertainment",
    watts: 150,
  },
  {
    id: 13,
    name: "Roteador Wi-Fi",
    description: "Wi-Fi router for internet connection",
    watts: 10,
  },
  {
    id: 14,
    name: "Forno elétrico",
    description: "Electric oven for baking",
    watts: 2000,
  },
  {
    id: 15,
    name: "Ferro de passar",
    description: "Electric iron for ironing clothes",
    watts: 1200,
  },
];
