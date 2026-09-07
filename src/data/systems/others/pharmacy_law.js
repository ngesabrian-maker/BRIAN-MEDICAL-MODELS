import { lawIntroduction } from "./pharmacy_law/introduction.js";
import { pharmacyRegulations } from "./pharmacy_law/pharmacy_regulations.js";
import { legistlationResponsibilities } from "./pharmacy_law/legistlation_responsibilities.js";
import { registrationAndLicensing } from "./pharmacy_law/registration_and_lisencing.js";
import { liabilityMedicalMalpractice } from "./pharmacy_law/liability.js";

export const pharmacyLaw = {
  id: "pharmacyLaw",
  name: "Pharmacy Law",
  parts: [
    lawIntroduction,
    pharmacyRegulations,
    legistlationResponsibilities,
    registrationAndLicensing,
    liabilityMedicalMalpractice
  ]
};