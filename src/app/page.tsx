import { Button } from "@/components/Button";
import { Select } from "@/components/Select";
import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        justifyItems: "center",
        margin: 50,
        padding: 80,
        backgroundColor: "white",
        borderRadius: 10,
      }}
    >
      <div>
        <Select text="Escolha um estado" />
      </div>
      <div style={{ marginTop: 50 }}>
        <div>
          <h1>Bem vindo ao Cálculo elétrico</h1>
        </div>
        <div style={{ justifySelf: "center", marginTop: 20 }}>
          <Link key={"calcular"} href={"calcular"}>
            <Button color="#4caf50" text="Comece a calcular" />
          </Link>
        </div>
      </div>
    </div>
  );
}
