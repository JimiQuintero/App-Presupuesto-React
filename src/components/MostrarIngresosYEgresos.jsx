import React from "react";
import { CargarEgresos } from "./CargarEgresos";
import { CargarIngresos } from "./CargarIngresos";

const MostrarIngresosYEgresos = ({
  ingresos,
  egresos,
  eliminarIngreso,
  eliminarEgreso,
}) => {
  return (
    <div className="contenedor limpiarEstilos">
      {/* Lista de Ingresos */}
      <div className="ingreso">
        <h2 className="ingreso_titulo">Ingresos</h2>
        <div id="lista-ingresos">
          {ingresos.map(
            (element) => (
              <CargarIngresos
                key={element.id}
                element={element}
                eliminarIngreso={eliminarIngreso}
              />
            )
            // console.log(element)
          )}
        </div>
      </div>
      {/* Lista de Egresos */}
      <div className="egreso">
        <h2 className="egreso_titulo">Egresos</h2>
        <div id="lista-egresos">
          {egresos.map((el) => (
            <CargarEgresos
              key={el.valor}
              el={el}
              egresos={egresos}
              eliminarEgreso={eliminarEgreso}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { MostrarIngresosYEgresos };
