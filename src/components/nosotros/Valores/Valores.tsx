const valores = [
  {
    titulo: "Seguridad",
    descripcion:
      "Protegemos cada transacción con tecnología confiable y procesos transparentes. Tu dinero está en buenas manos.",
    icono: "fa-solid fa-shield-check",
  },
  {
    titulo: "Agilidad",
    descripcion:
      "Facilitamos pagos y transferencias en minutos, sin fricciones ni esperas innecesarias. Porque tu tiempo vale.",
    icono: "fa-solid fa-bolt",
  },
  {
    titulo: "Crecimiento",
    descripcion:
      "Impulsamos tu economía digital con herramientas para ganar, ahorrar y escalar. Tu dinero, trabajando por ti.",
    icono: "fa-solid fa-chart-line",
  },
  {
    titulo: "Inclusión",
    descripcion:
      "Diseñamos soluciones accesibles para todos, sin importar su nivel técnico o ubicación. Cripto para todos.",
    icono: "fa-solid fa-people-group",
  },
  {
    titulo: "Conexión regional",
    descripcion:
      "Integramos métodos locales en Argentina, Bolivia, Brasil, Colombia, Panamá y Perú. Latinoamérica en red.",
    icono: "fa-solid fa-globe",
  },
];

export default function Valores() {
  return (
    <section id="Valores" className="container-fluid w-100">
      <div className="row justify-content-center">
        <div className="col col-sm-6 col-md-4 col-lg-3 text-white mt-5 ms-4">
          <h2 className="display-3 fw-bold mb-5 pt-5 text-warning">
            Nuestros Valores
          </h2>
        </div>

        {valores.map((valor, index) => (
          <div
            key={index}
            className="col col-sm-6 col-md-4 col-lg-3 m-2 p-3"
            style={{ background: "#35b8af", borderRadius: "12px" }}
          >
            <div className="text-center mb-4">
              <i className={`${valor.icono} display-2 text-warning`}></i>
            </div>
            <h5 className="text-white fw-bold text-center">{valor.titulo}</h5>
            <p className="text-white text-center">{valor.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
