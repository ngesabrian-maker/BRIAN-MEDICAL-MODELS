import {surgicalInstrumentation} from "./nosocomial/surgical_instrumentation.js";
import {patientPreparation} from "./nosocomial/patient_preparation.js";
import {theatreWaste} from "./nosocomial/theatre_waste.js";

export const nosocomial = {
  id: "nosocomial",
  name: "Nosocomial",

  notes: {
    anatomy: `
      <h2>Nosocomial Infections</h2>

      <p>
        Infections acquired in healthcare settings, particularly infections
        associated with healthcare procedures and the Operation Theatre.
      </p>
    `
  },

  parts: [
    surgicalInstrumentation,
    patientPreparation,
    theatreWaste
  ]
};