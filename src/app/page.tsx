import { Button } from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Bem Vindo ao Calculo eletrico</h1>
      <Link key={"calcular"} href={"calcular"}>
        <Button text="Comece a calcular" />
      </Link>
    </div>
  );
}
