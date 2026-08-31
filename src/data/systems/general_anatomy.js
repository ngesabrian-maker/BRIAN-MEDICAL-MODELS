import { AnatomyIntroduction } from "./introduction.js";
import { structuralOrganization } from "./structural_organization.js";
import { embrologyIntroduction } from "./embrology_introduction.js";

export const generalAnatomySystem = {
  id: "general_anatomy",
  name: "General Anatomy",
  organs: [
    AnatomyIntroduction,
    structuralOrganization,
    embrologyIntroduction
  ]
};