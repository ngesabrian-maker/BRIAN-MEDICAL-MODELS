import {surgicalInstrumentation} from "./nosocomial/surgical_instrumentation.js";
import {patientPreparation} from "./nosocomial/patient_preparation.js";
import {theatreWaste} from "./nosocomial/theatre_waste.js";
import { introductionNosocomial } from "./nosocomial/introdction.js";

export const nosocomial = {
  id: "nosocomial",
  name: "Nosocomial",

  parts: [
    introductionNosocomial,
    surgicalInstrumentation,
    patientPreparation,
    theatreWaste
  ]
};