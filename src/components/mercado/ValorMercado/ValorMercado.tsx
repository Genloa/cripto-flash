import TablaMonedas from "./components/TablaMonedas";

export default function ValorMercado() {
  return (
    <div className="container py-5" id="valorMercado">
      <h2
        className="fw-bold mb-4 display-4 text-center"
        style={{ color: "#35b8af" }}
      >
        Mercado Criptomonedas
      </h2>
      <h3 className="fw-bold mb-4 fs-2">
        Visualiza el valor de mercado en tiempo real.
      </h3>
      <p className="text-muted fs-5 mb-4">
        Consulta el precio de USDT y otras stablecoins con datos precisos y
        actualizados.
      </p>

      <TablaMonedas />
    </div>
  );
}
