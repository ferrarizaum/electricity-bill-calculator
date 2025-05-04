import { Button } from "@/components/Button";
import { Select } from "@/components/Select";
import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f7f7f7",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          marginBottom: 200,
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          width: "400px",
          textAlign: "center",
        }}
      >
        <div style={{ marginBottom: "30px" }}>
          <h1
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              marginBottom: "10px",
              color: "#333",
            }}
          >
            Teste Bem-vindo ao Cálculo Elétrico
          </h1>
          <p style={{ fontSize: "16px", color: "#777" }}>
            Selecione seu estado e comece a calcular o consumo elétrico.
          </p>
        </div>

        <div style={{ marginBottom: "30px" }}>
          <Select text="Escolha um estado" />
        </div>

        <div style={{ marginTop: "30px" }}>
          <Link href="/calcular">
            <Button color="#4caf50" text="Comece a calcular" />
          </Link>
        </div>
      </div>
    </div>
  );
}
