export default function Footer() {
  return (
    <footer
      className="text-white pt-4  border-5 border-top border-warning"
      style={{ backgroundColor: "#143b62" }}
    >
      <div className="container">
        <div className="row">
          {/* Información institucional */}

          <div className="row">
            {/* Compañía */}
            <div className="col-md-4">
              <h5 className="fw-bold text-warning mb-3">Cripto Flash</h5>
              <p className="text-white-50 fs-4">
                Tu aliado cripto en Latinoamérica
              </p>
            </div>
            <div className="col-md-2 mb-4">
              <h6 className="text-warning fw-bold">Compañía</h6>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="#inicio"
                    className="text-white-50 text-decoration-none"
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="#nosotros"
                    className="text-white-50 text-decoration-none"
                  >
                    Sobre nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="#aprende"
                    className="text-white-50 text-decoration-none"
                  >
                    Aprende
                  </a>
                </li>
                <li>
                  <a
                    href="#empleos"
                    className="text-white-50 text-decoration-none"
                  >
                    Empleos
                  </a>
                </li>
              </ul>
            </div>

            {/* Ayuda */}
            <div className="col-md-2 mb-4">
              <h6 className="text-warning fw-bold">Ayuda</h6>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="#soporte"
                    className="text-white-50 text-decoration-none"
                  >
                    Guía de uso
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-white-50 text-decoration-none">
                    Preguntas frecuentes
                  </a>
                </li>
                <li>
                  <a
                    href="#contacto"
                    className="text-white-50 text-decoration-none"
                  >
                    Quejas y reclamos
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="col-md-2 mb-4">
              <h6 className="text-warning fw-bold">Legal</h6>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="#privacidad"
                    className="text-white-50 text-decoration-none"
                  >
                    Política de privacidad
                  </a>
                </li>
                <li>
                  <a
                    href="#terminos"
                    className="text-white-50 text-decoration-none"
                  >
                    Términos de servicio
                  </a>
                </li>
              </ul>
            </div>

            {/* Redes sociales */}
            <div className="col-md-2 mb-4 text-md-end text-center">
              <h6 className="text-warning fw-bold  fs-4">Síguenos :</h6>
              <a
                className="btn btn-outline-light btn-sm mx-1 fs-4"
                href="#!"
                title="Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                className="btn btn-outline-light btn-sm mx-1 fs-4"
                href="#!"
                title="XTwitter"
              >
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a
                className="btn btn-outline-light btn-sm mx-1 fs-4"
                href="#!"
                title="TikTok"
              >
                <i className="fa-brands fa-tiktok"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Derechos reservados */}
        <div className="text-center text-white-50 mt-4 pb-3 small">
          © {new Date().getFullYear()} Cripto Flash. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}
