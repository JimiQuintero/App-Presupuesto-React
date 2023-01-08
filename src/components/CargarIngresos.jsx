import React from "react";

const formatoMoneda = (valor) => {
  return valor.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
};

const CargarIngresos = ({ element, eliminarIngreso }) => {
  // console.log(element.id);
  let { descripcion, valor, id } = element;
  return (
    <div className="elemento limpiarEstilos">
      <div className="elemento_descripcion">{descripcion}</div>
      <div className="derecha limpiarEstilos">
        <div className="elemento_valor">+ {formatoMoneda(valor)}</div>
        <div className="elemento_eliminar">
          <button className="elemento_eliminar--btn">
            <ion-icon
              name="close-circle-outline"
              onClick={() => eliminarIngreso(id)}
            ></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
};

export { CargarIngresos };
