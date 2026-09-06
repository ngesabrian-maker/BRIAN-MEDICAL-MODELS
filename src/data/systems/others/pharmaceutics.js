import {introductionPharmaceutics} from "./pharmaceutics/introduction.js";
import {unitOperationPharmaceutics} from "./pharmaceutics/unit_operation.js";
import {solidDosageForms} from "./pharmaceutics/solid_dosage_forms.js";

export const pharmaceutics = {
  id: "pharmaceutics",
  name: "Pharmaceutics",
  parts: [
    introductionPharmaceutics,
     unitOperationPharmaceutics,
     solidDosageForms
    ]

};