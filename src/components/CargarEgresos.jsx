import React from "react";

const formatoMoneda = (valor) => {
  return valor.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
};

const formatoPorcentaje = (valor) => {
  return valor.toLocaleString("en-US", {
    style: "percent",
    minimumFractionDigits: 2,
  });
};

const CargarEgresos = ({ el, egresos, eliminarEgreso }) => {
  // console.log(el);
  let { descripcion, valor, id } = el;

  let valorEgreso = 0;
  egresos.map((el) => {
    valorEgreso += valor;
    // console.log(valorEgreso);
  });

  let porcentaje = valor / valorEgreso;

  return (
    <div className="elemento limpiarEstilos">
      <div className="elemento_descripcion">{descripcion}</div>
      <div className="derecha limpiarEstilos">
        <div className="elemento_valor">- {formatoMoneda(valor)}</div>
        <div className="elemento_porcentaje">
          {formatoPorcentaje(porcentaje)}
        </div>
        <div className="elemento_eliminar">
          <button className="elemento_eliminar--btn">
            <ion-icon
              name="close-circle-outline"
              onClick={() => eliminarEgreso(id)}
            ></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
};

export { CargarEgresos };
