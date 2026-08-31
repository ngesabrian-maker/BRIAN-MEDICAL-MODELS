import { cranialCavity } from "./cranial.js";
import { thoracicCavity } from "./thoracic.js";
import { abdominalCavity } from "./abdominal.js";
import { pelvicCavity } from "./pelvic.js";



export const bodyCavities = {
  id: "body_cavities",
  name: "Body Cavities",
  parts: [
    cranialCavity,
    thoracicCavity,
    abdominalCavity,
    pelvicCavity
  ]
};