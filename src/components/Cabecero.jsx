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

function Cabecero({ ingresos, egresos }) {
  let datosIngreso = 0;
  let datosEgreso = 0;

  ingresos.map((el) => {
    datosIngreso += el.valor;
    // console.log(datosIngreso);
  });

  egresos.map((el) => {
    datosEgreso += el.valor;
    // console.log(datosEgreso);
  });

  let presupuesto = datosIngreso - datosEgreso;
  let porcentaje = datosEgreso / datosIngreso;

  return (
    <div className="cabecero">
      <div className="presupuesto">
        <div className="presupuesto_titulo">Presupuesto disponible</div>
        <div className="presupuesto_valor">{formatoMoneda(presupuesto)}</div>
        {/* Ingresos */}
        <div className="presupuesto_ingreso limpiarEstilos">
          <div className="presupuesto_ingreso--texto">Ingresos</div>
          <div className="derecha">
            <div className="presupuesto_ingreso--valor" id="ingresos">
              {formatoMoneda(datosIngreso)}
            </div>
            <div className="presupuesto_ingreso--porcentaje">&nbsp;</div>
          </div>
        </div>
        {/* Egresos */}
        <div className="presupuesto_egreso limpiarEstilos">
          <div className="presupuesto_egreso--texto">Egresos</div>
          <div className="derecha limpiarEstilos">
            <div className="presupuesto_egreso--valor" id="egresos">
              {formatoMoneda(datosEgreso)}
            </div>
            <div className="presupuesto_egreso--porcentaje" id="porcentaje">
              {formatoPorcentaje(porcentaje)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Cabecero };
