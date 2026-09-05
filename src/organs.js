import { cardiovascularSystem } from "./data/systems/cardiovascular.js";
import { nervousSystem } from "./data/systems/nervous.js";
import { respiratorySystem } from "./data/systems/respiratory.js";
import { digestiveSystem } from "./data/systems/digestive.js";
import { urinarySystem } from "./data/systems/urinary.js";
import { endocrineSystem } from "./data/systems/endocrine.js";
import {muscularSystem } from "./data/systems/masculoskeletal.js";
import { lymphaticSystem } from "./data/systems/lymphatic.js";
import { integumentarySystem } from "./data/systems/integumentary.js";
import { sensorySystem } from "./data/systems/sensory.js";
import { cellSystem } from "./data/systems/cell.js";
import{otherSystems} from "./data/systems/others.js";
import{medicalprocedure} from "./data/systems/medicalprocedure.js";
import {generalAnatomySystem} from "./data/systems/general_anatomy.js";
import { behaviouralSocialScience } from "./data/systems/behavioural_science.js";
import { skeletalsystem } from "./data/systems/skeletal.js";

export const SYSTEMS = [
  generalAnatomySystem,
  cardiovascularSystem,
  nervousSystem,
  respiratorySystem,
  digestiveSystem,
  urinarySystem,
  endocrineSystem,
  muscularSystem,
  skeletalsystem,
  lymphaticSystem,
  integumentarySystem,
  sensorySystem,
  cellSystem,
  otherSystems,
  medicalprocedure,
  behaviouralSocialScience
];
