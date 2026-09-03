import { AnatomyIntroduction } from "./general_anatomy/introduction.js";
import { structuralOrganization } from "./general_anatomy/structural_organization.js";
import { embrologyIntroduction } from "./general_anatomy/embrology_introduction.js";

export const generalAnatomySystem = {
  id: "general_anatomy",
  name: "General Anatomy",
  organs: [
    AnatomyIntroduction,
    structuralOrganization,
    embrologyIntroduction
  ]
};