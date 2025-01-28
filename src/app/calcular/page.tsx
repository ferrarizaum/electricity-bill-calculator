import { Button } from "@/components/Button";
import { Calculator } from "@/components/Calculator";
import Link from "next/link";

export default function CalcularPage() {
  return (
    <div
      style={{
        backgroundColor: "#f9fafb",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          margin: "0 auto",
          borderRadius: "20px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          maxWidth: "800px",
          width: "100%",
          padding: 40,
        }}
      >
        <div style={{ marginBottom: 20 }}>
          <Link href={"/"} passHref>
            <Button color="black" text="Home" />
          </Link>
        </div>

        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h1 style={{ fontSize: "2rem", fontWeight: 600 }}>
            Comece a calcular
          </h1>
        </div>

        <div style={{ width: "100%" }}>
          <Calculator />
        </div>
      </div>
    </div>
  );
}
