import { Calculator } from "@/components/Calculator";

export default function CalcularPage() {
  return (
    <div>
      <div style={{ justifyItems: "center" }}>
        <h1>Comece a calcular</h1>
      </div>
      <div>
        <Calculator />
      </div>
    </div>
  );
}
