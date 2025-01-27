import { Calculator } from "@/components/Calculator";
import Link from "next/link";

export default function CalcularPage() {
  return (
    <div
      style={{
        backgroundColor: "white",
        margin: 50,
        borderRadius: 10,
      }}
    >
      <div style={{ alignItems: "initial", paddingTop: 20, paddingLeft: 20 }}>
        <Link key={"home"} href={"/"}>
          <p>Home</p>
        </Link>
      </div>
      <div
        style={{ display: "flex", justifyContent: "space-evenly", padding: 20 }}
      >
        <div>
          <h1>Comece a calcular</h1>
        </div>
      </div>
      <div style={{ width: "100%", padding: 20 }}>
        <Calculator />
      </div>
    </div>
  );
}
