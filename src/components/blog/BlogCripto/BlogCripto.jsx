"use client";

import Image from "next/image";
import imagen from "../../../asset/img/cripto1.jpg";
import imagen2 from "../../../asset/img/cripto2.jpg";
import imagen3 from "../../../asset/img/cripto3.jpg";

export default function BlogCripto() {
  const noticias = [
    {
      img: imagen,
      titulo:
        "China declara que los contratos perpetuos en criptomonedas son apuestas",
      texto:
        "El Tribunal Supremo chino considera que los contratos perpetuos no son inversiones legítimas, sino apuestas especulativas. Esto endurece aún más la postura regulatoria del país frente a las criptomonedas.",
      fecha: "28/09/2025",
      categoria: "Regulación Internacional",
    },
    {
      img: imagen2,
      titulo:
        "Jiuzi Holdings invertirá 1000 millones de dólares en criptomonedas",
      texto:
        "La empresa china anunció un plan para incorporar Bitcoin, Ethereum y Binance Coin a sus reservas corporativas, buscando diversificar activos frente a la incertidumbre global.",
      fecha: "26/09/2025",
      categoria: "Adopción Corporativa",
    },
    {
      img: imagen3,
      titulo: "Bitcoin, Ethereum y Solana sufren fuerte desplome",
      texto:
        "Las principales criptomonedas registran caídas por regulaciones más estrictas, miedo en el mercado y presión macroeconómica. Ethereum cayó un 6% en 24 horas.",
      fecha: "26/09/2025",
      categoria: "Volatilidad del Mercado",
    },
  ];

  return (
    <section className="container py-5" id="blog">
      <h2
        className="text-center fw-bold display-4 mb-5"
        style={{ color: "#35b8af" }}
      >
        Actualidad Cripto
      </h2>

      <div className="row gy-4">
        {noticias.map((noticia, index) => (
          <div
            key={index}
            className={`col-12 ${index === 0 ? "col-md-6" : "col-md-3"}`}
          >
            <div className="card border-0 shadow-sm h-100">
              <div className="ratio ratio-16x9">
                <Image
                  src={noticia.img}
                  alt={noticia.titulo}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                />
              </div>
              <div className="card-body d-flex flex-column">
                <span
                  className={`badge mb-2 ${
                    index === 0 ? "bg-warning text-dark" : "bg-secondary"
                  }`}
                >
                  {noticia.categoria}
                </span>
                <h5 className="card-title fw-bold">{noticia.titulo}</h5>
                <p className="card-text">{noticia.texto}</p>
                <p className="text-muted small mt-auto">{noticia.fecha}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
