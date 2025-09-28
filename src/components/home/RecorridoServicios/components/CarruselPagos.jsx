import Image from "next/image";
import imagen from "../../../../asset/img/Zelle.png";
import imagen2 from "../../../../asset/img/PayPal.png";
import imagen3 from "../../../../asset/img/Zinli.png";
import imagen4 from "../../../../asset/img/nequi.png";
import imagen5 from "../../../../asset/img/Yape.png";

export default function CarruselPagos() {
  const logos = [
    { icon: imagen, url: "https://www.zellepay.com" },
    { icon: imagen2, url: "https://www.paypal.com" },
    { icon: imagen3, url: "https://www.zinli.com" },
    { icon: imagen4, url: "https://www.nequi.com.co" },
    { icon: imagen5, url: "https://www.yape.com.pe" },
  ];

  return (
    <section className="container my-5">
      <div className="row align-items-center">
        {/* Texto izquierdo */}
        <div className="col-md-4 text-center text-md-start mb-4 mb-md-0">
          <h3 className="fw-bold text-warning">Nuestros métodos de pago</h3>
          <p className="text-muted">Conecta con tus apps favoritas como:</p>
        </div>

        {/* Carrusel derecho */}
        <div className="col-md-8 overflow-hidden">
          <div className="d-flex gap-4 carrusel-track">
            {[...logos, ...logos].map((logo, idx) => (
              <div key={idx} className="logo-wrapper">
                <a href={logo.url} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={logo.icon}
                    alt={`Logo ${idx}`}
                    width={200}
                    height={50}
                    style={{
                      objectFit: "contain",
                      filter: "grayscale(100%)",
                      transition: "filter 0.3s ease",
                      display: "block",
                    }}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .carrusel-track {
          animation: scroll 30s linear infinite;
          display: flex;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .logo-wrapper {
            width: 120px;
            height: 40px;
          }
        }
      `}</style>
    </section>
  );
}
