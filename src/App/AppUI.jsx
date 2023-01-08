import React, { useState } from "react";
import { Cabecero } from "../components/Cabecero";
import FormularioAgregar from "../components/FormularioAgregar";
import { MostrarIngresosYEgresos } from "../components/MostrarIngresosYEgresos";

const datosIngreso = [
  {
    id: 1,
    descripcion: "Salario",
    valor: 2100.0,
  },
  {
    id: 2,
    descripcion: "Venta carro",
    valor: 1500,
  },
  {
    id: 3,
    descripcion: "Nuevo ingreso",
    valor: 1200,
  },
];

const datosEgresos = [
  {
    id: 1,
    descripcion: "Arriendo apartamento",
    valor: 900,
  },
  {
    id: 2,
    descripcion: "Ropa",
    valor: 400,
  },
  {
    id: 3,
    descripcion: "Alimentación",
    valor: 500,
  },
];

function AppUI() {
  // Persistir datos en localStorage
  /* const localStorageDataIngresos = localStorage.getItem(
    "STORAGE_DATA_INGRESOS"
  );

  let parsedDataIngresos;

  if (!localStorageDataIngresos) {
    localStorage.setItem("STORAGE_DATA_INGRESOS", JSON.stringify([]));
    parsedDataIngresos = [];
  } else {
    parsedDataIngresos = JSON.parse(localStorageDataIngresos);
  } */

  const [ingresos, setIngresos] = useState(datosIngreso);
  const [egresos, setEgresos] = useState(datosEgresos);

  const eliminarIngreso = (id) => {
    // console.log(id);
    let isDelete = confirm(
      `¿Estas seguro de eliminar el ingreso con el id '${id}'`
    );

    if (isDelete) {
      let indiceEliminar = ingresos.findIndex((ingreso) => ingreso.id === id);
      let newIngresos = [...ingresos];
      newIngresos.splice(indiceEliminar, 1);
      setIngresos(newIngresos);
    } else {
      return;
    }
  };

  const eliminarEgreso = (id) => {
    // console.log(id);
    let isDelete = confirm(
      `¿Estas seguro de eliminar el egreso con el id '${id}'?`
    );

    if (isDelete) {
      let indiceEliminar = egresos.findIndex((egreso) => egreso.id === id);
      let newEgresos = [...egresos];
      newEgresos.splice(indiceEliminar, 1);
      setEgresos(newEgresos);
    } else {
      return;
    }
  };

  /* const saveIngresos = (newIngreso) => {
    // Conversion a string con JSON.stringify
    const stringifiedIngresos = JSON.stringify(newIngreso);
    localStorage.setItem("STORAGE_DATA_INGRESOS", stringifiedIngresos);
    setIngresos(newIngreso);
  }; */

  const agregarDatos = (data) => {
    data.id = Date.now();
    data.valor = Number(data.valor);
    // console.log(data);
    const $tipo = document.getElementById("tipo");
    // console.log($tipo.value);
    if ($tipo.value === "ingreso") {
      setIngresos([...ingresos, data]);
    } else if ($tipo.value === "egreso") {
      setEgresos([...egresos, data]);
    }
  };

  return (
    <>
      <Cabecero ingresos={ingresos} egresos={egresos} />
      <FormularioAgregar agregarDatos={agregarDatos} />
      <MostrarIngresosYEgresos
        ingresos={ingresos}
        egresos={egresos}
        eliminarIngreso={eliminarIngreso}
        eliminarEgreso={eliminarEgreso}
      />
    </>
  );
}

export { AppUI };
