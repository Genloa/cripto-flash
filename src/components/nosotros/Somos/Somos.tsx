"use client";

import Image from "next/image";
import imagen from "../../../asset/img/imgNosotros.png";

export default function Somos() {
  return (
    <section className="container py-5" id="quienesSomos">
      <div className="row align-items-center position-relative">
        {/* Círculo decorativo */}
        <div className="circle-decor bg-warning position-absolute z-1 top-0 end-0 rounded-circle d-flex justify-content-center align-items-center shadow"></div>

        {/* Imagen primero en móviles */}
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0 z-3 order-md-2">
          <Image
            src={imagen}
            alt="Nosotros"
            className="img-fluid rounded"
            width={500}
            height={350}
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </div>

        {/* Texto */}
        <div className="col-12 col-md-6 order-md-1">
          <h2 className="fw-bold mb-4 display-5 " style={{ color: "#35b8af" }}>
            Nosotros
          </h2>
          <p className="text-muted fs-5">
            En <strong>Cripto Flash</strong> creemos que el acceso al dinero
            digital debe ser simple, seguro y local. Nacimos para conectar a
            millones de personas en Latinoamérica con el mundo cripto,
            ofreciendo soluciones reales para pagos, ahorro y transferencias en
            USDT.
          </p>
          <p className="text-muted fs-5">
            Somos un equipo multidisciplinario con experiencia en tecnología,
            finanzas y atención al usuario. Nuestra misión es democratizar el
            uso de stablecoins, eliminando barreras técnicas y comisiones
            ocultas.
          </p>
          <p className="text-muted fs-5">
            Desde Caracas, trabajamos cada día para que comprar, vender y ganar
            con dólares digitales sea tan fácil como enviar un mensaje. Porque
            tu dinero merece libertad.
          </p>
        </div>
      </div>

      <style jsx>{`
        .circle-decor {
          width: 417px;
          height: 417px;
          transform: translate(-28%, -3%);
        }

        @media (max-width: 768px) {
          .circle-decor {
            width: 227px;
            height: 227px;
            transform: translate(-41%, -4%);
          }

          h2 {
            font-size: 2rem !important;
          }

          p {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
