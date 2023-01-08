import React, { useState } from "react";

const initialForm = [
  {
    id: null,
    descripcion: "",
    valor: "",
  },
];

function FormularioAgregar({ agregarDatos }) {
  const [form, setform] = useState(initialForm);

  const onChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    // console.log("Clic");
    e.preventDefault();

    if (!form.descripcion || !form.valor) {
      alert("Datos incompletos!!");
      return;
    }

    agregarDatos(form);

    // handleReset();
  };

  /* const handleReset = () => {
    setform(initialForm);
  }; */

  return (
    <form id="forma" onSubmit={handleSubmit}>
      <div className="agregar">
        <div className="agregar_contenedor">
          <select name="" id="tipo" className="agregar_tipo">
            <option value="ingreso" defaultValue={"ingreso"}>
              +
            </option>
            <option value="egreso">-</option>
          </select>
          <input
            type="text"
            name="descripcion"
            className="agregar_descripcion"
            id="descripcion"
            placeholder="Agregar descripcion"
            onChange={onChange}
          />
          <input
            type="number"
            name="valor"
            className="agregar_valor"
            id="valor"
            placeholder="Valor"
            step="any"
            onChange={onChange}
          />
          <button className="agregar_btn">
            <ion-icon
              name="checkmark-circle-outline"
              onClick={handleSubmit}
            ></ion-icon>
          </button>
        </div>
      </div>
    </form>
  );
}

export default FormularioAgregar;
