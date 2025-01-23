import { devicesArray } from "@/api/devices";

export default function Calcular() {
  function handleClick() {}
  return (
    <div>
      <h1>Comece a calcular</h1>
      <div>
        <p>{devicesArray.map((e) => e.name)}</p>
      </div>
    </div>
  );
}
