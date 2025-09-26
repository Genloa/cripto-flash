"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.min.js");
  }, []);
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg"
        style={{
          borderBottom: "1px solid #ccc",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <div className="container-fluid">
          {/* Logo y marca alineados a la izquierda */}
          <Link
            href="/"
            className="navbar-brand d-flex align-items-center gap-2"
          >
            <Image
              src="/assets/img/logo.png"
              alt="Logo"
              height={60}
              width={60}
              priority
            />
            <span className="fs-1">CriptoFlash</span>
          </Link>

          {/* Botón hamburguesa para móviles */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              {[
                { href: "/", label: "Inicio" },
                { href: "/nosotros", label: "Nosotros" },
                { href: "/mercado", label: "Mercado" },
                { href: "/blog", label: "Blog" },
              ].map(({ href, label }) => {
                const isActive =
                  pathname === href ||
                  (href !== "/" && pathname.startsWith(href));
                return (
                  <li
                    className="nav-item fs-5"
                    key={href}
                    style={
                      isActive
                        ? {
                            borderBottom: "4px solid #F39A2B",
                            transition: "border-bottom 0.2s",
                          }
                        : {}
                    }
                  >
                    <Link
                      href={href}
                      className={`nav-link${isActive ? " active" : ""}`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="d-flex gap-2">
            <Link href="/" className="btn btn-warning">
              Registrarse
            </Link>
            <Link href="/" className="btn btn-light">
              Iniciar sesión
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
