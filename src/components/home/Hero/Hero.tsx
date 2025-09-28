"use client";
export function Hero() {
  return (
    <section className="min-vh-100 bg-light">
      <div className="container py-4">
        <div className="row align-items-center g-5">
          <div className="col-lg-5">
            <h1 className="display-6 fw-bold">
              Tu acceso al mundo <br />
              <span className="display-2 fw-bold" style={{ color: "#35b8af" }}>
                Cripto en Latinoamérica
              </span>
            </h1>
            <p className="lead text-secondary mt-2 fs-4 ">
              Crea anuncios P2P, conecta con la comunidad y comienza a generar
              ingresos en dólares desde cualquier lugar.
            </p>
            <div className="d-flex gap-5 mt-1">
              <div className="text-center">
                <div className="fs-4 fw-bold text-dark">29M+</div>
                <div className="text-muted">Millones Usuarios</div>
              </div>
              <div className="text-center">
                <div className="fs-4 fw-bold text-dark">100M+</div>
                <div className="text-muted">Operaciones completadas</div>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 g-3 mt-4">
              <div className="col">
                <button className="btn btn-dark w-100 px-4 d-flex align-items-center gap-3">
                  <i className="fa-brands fa-google-play display-5"></i>
                  <div className="text-start">
                    <div>DISPONIBLE EN</div>
                    <div className="fs-5 fw-bold">Google Play</div>
                  </div>
                </button>
              </div>
              <div className="col">
                <button className="btn btn-dark w-100 px-4 d-flex align-items-center gap-3">
                  <i className="fa-brands fa-apple display-5"></i>
                  <div className="text-start">
                    <div>CONSIGUELO EN</div>
                    <div className="fs-5 fw-bold">App Store</div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-7 position-relative overflow-hidden">
            <div
              className="mx-auto position-relative w-100"
              style={{ maxWidth: "320px", height: "600px" }}
            >
              <style jsx>{`
                @media screen and (max-width: 768px) {
                  .floating-icon {
                    transform: translate(0, 0) !important;
                    width: 36px !important;
                    height: 36px !important;
                  }
                }
              `}</style>

              {/* Íconos flotantes */}
              <div
                className="bg-warning position-absolute z-1 top-0 end-0 rounded-circle shadow"
                style={{
                  width: "244px",
                  height: "244px",
                  transform: "translate(70%, 27%)",
                }}
              ></div>

              <div
                className="position-absolute z-1 bottom-0 start-0 rounded-circle shadow"
                style={{
                  width: "179px",
                  height: "179px",
                  background: "#143b62",
                  transform: "translate(-50%, -127%)",
                }}
              ></div>

              <div
                className="bg-warning position-absolute z-1 bottom-0 start-0 rounded-circle d-flex justify-content-center align-items-center shadow floating-icon"
                style={{
                  width: "45px",
                  height: "45px",
                  transform: "translate(-244%, -900%)",
                }}
              >
                <i
                  className="fa-brands fa-bitcoin display-5"
                  style={{ color: "#143b62" }}
                ></i>
              </div>

              <div
                className="bg-warning position-absolute z-1 bottom-0 start-0 rounded-circle d-flex justify-content-center align-items-center shadow floating-icon"
                style={{
                  width: "45px",
                  height: "45px",
                  transform: "translate(-412%, -1013%)",
                }}
              >
                <i className="fa-brands fa-viacoin fs-2"></i>
              </div>

              <div
                className="bg-warning position-absolute z-1 bottom-0 start-0 rounded-circle d-flex justify-content-center align-items-center shadow floating-icon"
                style={{
                  width: "45px",
                  height: "45px",
                  transform: "translate(-363%, -692%)",
                }}
              >
                <i className="fa-solid fa-dollar-sign display-6"></i>
              </div>

              {/* Mockup del celular */}
              <div className="bg-black rounded-5 p-2 shadow-lg z-3 position-relative">
                <div className="bg-white rounded-4 h-100 overflow-hidden p-4">
                  {/* Barra de estado */}
                  <div className="d-flex justify-content-between text-muted small mb-3">
                    <span>9:41</span>
                    <div className="d-flex gap-1">
                      <div
                        className="rounded"
                        style={{
                          width: "16px",
                          height: "8px",
                          background: "#35b8af",
                        }}
                      ></div>
                      <div
                        className="rounded"
                        style={{
                          width: "4px",
                          height: "8px",
                          background: "#143b62",
                        }}
                      ></div>
                      <div
                        className="bg-warning rounded"
                        style={{ width: "24px", height: "8px" }}
                      ></div>
                    </div>
                  </div>

                  {/* Encabezado de la app */}
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                      <h5 className="mb-1 fs-6">Bienvenido</h5>
                      <p className="text-muted small mb-0">
                        Tu billetera, tu ritmo.
                      </p>
                    </div>
                    <div
                      className="rounded-circle d-flex justify-content-center align-items-center"
                      style={{
                        width: "40px",
                        height: "40px",
                        background: "#35b8af",
                      }}
                    ></div>
                  </div>

                  {/* Tarjeta de progreso */}
                  <div
                    className="text-white rounded p-3 mb-4"
                    style={{ background: "#35b8af" }}
                  >
                    <div className="d-flex justify-content-between mb-2">
                      <span className="small">Actividad de hoy</span>
                      <span
                        className="badge bg-light"
                        style={{ color: "#35b8af" }}
                      >
                        75%
                      </span>
                    </div>
                    <div className="progress mb-2" style={{ height: "6px" }}>
                      <div
                        className="progress-bar bg-light"
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                    <p className="small">6 de 8 operaciones realizadas</p>
                  </div>

                  {/* Lista de tareas */}
                  <div className="mb-4">
                    <h6 className="mb-2">Tareas del día</h6>
                    <div className="d-flex align-items-center gap-2 p-2 bg-light rounded mb-2">
                      <div
                        className="rounded-circle"
                        style={{
                          width: "16px",
                          height: "16px",
                          background: "#35b8af",
                        }}
                      ></div>
                      <span className="text-muted text-decoration-line-through small">
                        Verificar cotización de USDT
                      </span>
                    </div>
                    <div className="d-flex align-items-center gap-2 p-2 border rounded mb-2">
                      <div
                        className="border border-secondary rounded-circle"
                        style={{ width: "16px", height: "16px" }}
                      ></div>
                      <span className="small">Actualizar anuncio P2P</span>
                    </div>
                    <div className="d-flex align-items-center gap-2 p-2 border rounded">
                      <div
                        className="border border-secondary rounded-circle"
                        style={{ width: "16px", height: "16px" }}
                      ></div>
                      <span className="small">Incrementar ventas</span>
                    </div>
                  </div>

                  {/* Estadísticas inferiores */}
                  <div className="row g-2">
                    <div className="col-6">
                      <div className="border rounded text-center p-2">
                        <div className="fw-bold">12</div>
                        <div className="text-muted small">
                          Usuarios conectados
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="border rounded text-center p-2">
                        <div className="fw-bold">89%</div>
                        <div className="text-muted small">
                          Eficiencia en tus transacciones
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
