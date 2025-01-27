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
    description: "Electric fan for cooling",
    consumokWh: 0.05, // 50W fan used for 1 hour
  },
  {
    id: 2,
    name: "Ar condicionado",
    description: "Air conditioner",
    consumokWh: 2.0, // 2000W air conditioner for 1 hour
  },
  {
    id: 3,
    name: "Televisão",
    description: "LED television",
    consumokWh: 0.1, // 100W TV for 1 hour
  },
  {
    id: 4,
    name: "Chuveiro elétrico",
    description: "Electric shower",
    consumokWh: 6.0, // 6000W (6kW) for 1 hour
  },
  {
    id: 5,
    name: "Computador",
    description: "Desktop computer",
    consumokWh: 0.2, // 200W computer for 1 hour
  },
  {
    id: 6,
    name: "Geladeira",
    description: "Common household refrigerator",
    consumokWh: 0.15, // 150W for 1 hour (average, continuous use)
  },
  {
    id: 7,
    name: "Microondas",
    description: "Microwave oven for heating food",
    consumokWh: 1.2, // 1200W microwave for 1 hour
  },
  {
    id: 8,
    name: "Máquina de lavar roupa",
    description: "Washing machine for cleaning clothes",
    consumokWh: 0.5, // 500W for 1 full wash cycle (~1 hour)
  },
  {
    id: 9,
    name: "Lava-louças",
    description: "Dishwasher for cleaning dishes",
    consumokWh: 1.5, // 1500W for 1 full cycle (~1 hour)
  },
  {
    id: 10,
    name: "Secadora de roupas",
    description: "Clothes dryer",
    consumokWh: 2.5, // 2500W for 1 hour
  },
  {
    id: 11,
    name: "Aspirador de pó",
    description: "Vacuum cleaner for cleaning floors",
    consumokWh: 0.8, // 800W for 1 hour
  },
  {
    id: 12,
    name: "Console de videogame",
    description: "Gaming console for entertainment",
    consumokWh: 0.15, // 150W for 1 hour
  },
  {
    id: 13,
    name: "Roteador Wi-Fi",
    description: "Wi-Fi router for internet connection",
    consumokWh: 0.01, // 10W for 1 hour
  },
  {
    id: 14,
    name: "Forno elétrico",
    description: "Electric oven for baking",
    consumokWh: 2.0, // 2000W for 1 hour
  },
  {
    id: 15,
    name: "Ferro de passar",
    description: "Electric iron for ironing clothes",
    consumokWh: 1.2, // 1200W for 1 hour
  },
];
