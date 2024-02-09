import { useState } from "react";
import Swal from "sweetalert2";
import Clase from "./DateForm.module.css";
const initialForm = {
  nombre: "",
  apellido: "",
  email: "",
  telefono: "",
};
const DateForm = ({ getData }) => {
  const [form, setForm] = useState(initialForm);

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const handleChange = (e) => {
    const newForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(newForm);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.apellido || !form.email || !form.nombre || !form.telefono) {
      return Toast.fire({
        icon: "error",
        title: "Por favor complete todos los campos correctamente",
      });
    } else {
      getData(form);
      setForm(initialForm);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className={Clase.form}>
        <label htmlFor="inputNombre">Nombre</label>
        <input
          className={Clase.input}
          id="inputNombre"
          type="text"
          value={form.nombre}
          name="nombre"
          onChange={handleChange}
        />
        <label htmlFor="inputApellido">Apellido</label>
        <input
          className={Clase.input}
          id="inputApellido"
          type="text"
          value={form.apellido}
          name="apellido"
          onChange={handleChange}
        />
        <label htmlFor="inputEmail">Email</label>
        <input
          className={Clase.input}
          autoComplete="off"
          id="inputEmail"
          type="email"
          value={form.email}
          name="email"
          onChange={handleChange}
        />
        <label htmlFor="inputTelefono">Telefono</label>
        <input
          className={Clase.input}
          id="inputTelefono"
          type="phone"
          value={form.telefono}
          name="telefono"
          onChange={handleChange}
        />
        <input id="inputSubmit" type="submit" value="Generar orden" />
      </form>
    </>
  );
};
export default DateForm;
