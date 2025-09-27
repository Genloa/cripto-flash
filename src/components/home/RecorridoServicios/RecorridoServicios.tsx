"use client";
import CarruselPagos from "./components/carruselPagos";
export default function RecorridoServicios() {
  const servicios = [
    {
      icono: "fa-solid fa-bolt",
      titulo: "Pagos en USDT sin comisiones",
      texto:
        "Haz pagos en Tron o Arbitrum sin preocuparte por tener el token para pagar las comisiones. Nosotros nos encargamos.",
      boton: "Más información",
    },
    {
      icono: "fa-solid fa-right-left",
      titulo: "Transferencias entre apps",
      texto:
        "Mueve tu dinero entre Zelle, PayPal, Zinli y más en cuestión de minutos. Sin complicaciones, sin fronteras.",
      boton: "Ver compatibilidad",
    },
    {
      icono: "fa-solid fa-vault",
      titulo: "Gana con tu caja fuerte",
      texto:
        "Genera ganancias diarias depositando dólares digitales en tu caja fuerte de El Dorado Gana. Tu dinero, trabajando por ti.",
      boton: "Empezar a ganar",
    },
  ];

  return (
    <section className="min-vh-100 bg-light">
      {/* Hero Content */}
      <div className="container py-2">
        <div className="row align-items-center g-5">
          {/* Left Content */}
          <div className="col-lg-5">
            <h1 className="display-6 fw-bold" style={{ color: "#35b8af" }}>
              Haz que tu dinero digital trabaje por ti.
            </h1>
          </div>
          <div className="col-lg-7">
            {" "}
            <p className="lead text-secondary mt-2 fs-4 ">
              Nuestra plataforma te permite comprar y vender dólares digitales
              sin complicaciones en países como Argentina, Bolivia, Brasil,
              Colombia, Panamá y Perú. Aprovecha tus métodos de pago locales,
              realiza transacciones rápidas y accede al ecosistema cripto sin
              barreras técnicas ni comisiones ocultas. Todo desde una sola app,
              diseñada para ti.
            </p>
          </div>
          <CarruselPagos />
          <div></div>
          <div className="row">
            {servicios.map((s, idx) => (
              <div className="col-md-4 mb-4" key={idx}>
                <div className="card h-100 text-center border-0 shadow-sm card-hover">
                  <div className="card-body d-flex flex-column align-items-center">
                    <i
                      className={`${s.icono} fa-3x mb-3`}
                      style={{ color: "#35b8af" }}
                    ></i>
                    <h5 className="card-title fs-4 fw-bold">{s.titulo}</h5>
                    <p className="card-text">{s.texto}</p>
                    <button className="btn btn-warning mt-auto">
                      {s.boton}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <style jsx>{`
            .card-hover {
              transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            .card-hover:hover {
              transform: scale(1.03);
              box-shadow: 0 0.75rem 1.5rem rgba(0, 0, 0, 0.15);
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
