import React from "react";
import { Contact } from "../models/contact";
import ComponetB from "./componetB";

const ComponetA = () => {
  const newCont = new Contact("Adri", "Mouly", "adr@gg.com", false);
  return (
    <div>
      <h1>Hola</h1>
      <ComponetB cont={newCont}></ComponetB>
    </div>
  );
};

export default ComponetA;
