import React, { useState } from "react";
import PropTypes from "prop-types";
import { Contact } from "../models/contact";

const ComponetB = ({ cont }) => {
  const [contact, setContact] = useState(cont);
  const btnConectado = () => {
    if (contact.conectado === false) {
      setContact({
        ...contact,
        conectado: true,
      });
    } else {
      setContact({
        ...contact,
        conectado: false,
      });
    }
  };
  return (
    <div>
      <h2>nombre: {contact.nombre}</h2>
      <h3>Apellido : {contact.apellido}</h3>
      <h4>Email : {contact.email}</h4>
      <h5>Usuario: {contact.conectado ? "En linea" : "Desconectado"}</h5>
      <button onClick={btnConectado}> Click </button>
    </div>
  );
};

ComponetB.propTypes = {
  cont: PropTypes.instanceOf(Contact),
};

export default ComponetB;
