export default function CarruselPagos() {
  const logos = [
    { icon: " ", url: "https://www.zellepay.com" },
    { icon: " ", url: "https://www.paypal.com" },
    { icon: " ", url: "https://www.zinli.com" },
    { icon: " ", url: "https://www.nequi.com.co" },
    { icon: " ", url: "https://www.yape.com.pe" },
    { icon: " ", url: "https://www.bcb.gov.br" },
    { icon: " ", url: "https://www.mercadopago.com" },
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
                  <img src={logo.icon} alt="logo" />
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

        .logo-wrapper {
          flex: 0 0 auto;
          width: 120px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-wrapper img {
          max-width: 100%;
          max-height: 60px;
          object-fit: contain;
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
            width: 80px;
            height: 40px;
          }
          .logo-wrapper img {
            max-height: 50px;
          }
        }
      `}</style>
    </section>
  );
}
