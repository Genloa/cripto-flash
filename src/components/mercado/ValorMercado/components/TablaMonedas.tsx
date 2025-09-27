"use client";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Image from "next/image";

type Moneda = {
  id: string;
  name: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  price_change_percentage_24h: number;
  last_updated: string;
  image: string;
};

export default function TablaMonedas() {
  const [moneda, setMoneda] = useState<Moneda[]>([]);
  const [search, setSearch] = useState("");
  const [paginaTabla, setPaginaTabla] = useState(0);
  const filasPorPagina = 4;

  useEffect(() => {
    fetchMoneda();
  }, []);

  useEffect(() => {
    setPaginaTabla(0);
  }, [search]);

  const fetchMoneda = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
      );
      const monedas = await response.json();
      setMoneda(monedas);
    } catch (error) {
      console.error("Error fetching monedas:", error);
    }
  };
  // Pagination logic

  // Filtrar monedas por nombre
  const monedasFiltradas = moneda.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );
  const pageCount = Math.ceil(monedasFiltradas.length / filasPorPagina);
  const offset = paginaTabla * filasPorPagina;
  const monedasPagina = monedasFiltradas.slice(offset, offset + filasPorPagina);

  return (
    <section className="container mt-4">
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar moneda..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <table className="table">
        <thead className="">
          <tr className="table-warning">
            <th scope="col">#</th>
            <th scope="col">Moneda</th>
            <th scope="col">Precio Actual</th>
            <th scope="col">Capital Mercado</th>
            <th scope="col">Rango Mercado</th>
            <th scope="col">% Variacion Precio</th>
            <th scope="col">última Actualización</th>
          </tr>
        </thead>
        <tbody>
          {monedasPagina.map((m, idx) => (
            <tr key={m.id}>
              <th scope="row">{offset + idx + 1}</th>
              <td>
                <Image
                  src={m.image}
                  alt={m.name}
                  width={20}
                  height={20}
                  style={{ marginRight: 8 }}
                />
                {m.name}
              </td>
              <td>${m.current_price.toLocaleString()}</td>
              <td>${m.market_cap.toLocaleString()}</td>
              <td>{m.market_cap_rank}</td>
              <td>{m.price_change_percentage_24h?.toFixed(2)}%</td>
              <td>{new Date(m.last_updated).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {pageCount > 1 && (
        <div className="d-flex justify-content-center">
          <ReactPaginate
            previousLabel={"Anterior"}
            nextLabel={"Siguiente"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
            onPageChange={(selected) => setPaginaTabla(selected.selected)}
            containerClassName={"pagination"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
            forcePage={paginaTabla}
          />
        </div>
      )}
    </section>
  );
}
