import { arteries } from "./cardiovascular/arteries.js";
import { veins } from "./cardiovascular/veins.js";
import { heart } from "./cardiovascular/heart.js";
import { capillaries } from "./cardiovascular/capillaries.js";
import { cardiointroduction } from "./cardiovascular/introduction.js";
import { clinicalMethodsCardiovascular } from "./cardiovascular/clinical_methods.js";




export const cardiovascularSystem = {
  id: "cardiovascular",
  name: "Cardiovascular System",

  organs: [
    cardiointroduction,
    arteries,
    veins,
    heart,
    capillaries,
    clinicalMethodsCardiovascular
  ]
};