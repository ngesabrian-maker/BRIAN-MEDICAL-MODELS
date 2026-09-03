import { introductionBehaviouralScience } from "./behavioural_science/introduction.js";
import { growthAndDevelopmentSystem } from "./behavioural_science/growth_and_development.js";
import { sociologySystem } from "./behavioural_science/sociology.js";
import { governmentAndPoliticalSystems } from "./behavioural_science/government_and_political_systems.js";
import { economicsSystem } from "./behavioural_science/economics.js";
import { educationSystem } from "./behavioural_science/education.js";
import { religionSystem } from "./behavioural_science/religion.js";
import { anthropologySystem } from "./behavioural_science/anthropology.js";
import { counsellingSystem } from "./behavioural_science/counselling.js";

export const behaviouralSocialScience = {
  id: "behavioural_social_science",
  name: "Behavioural and Social Science",
  organs: [
    introductionBehaviouralScience,
    growthAndDevelopmentSystem,
    sociologySystem,
    governmentAndPoliticalSystems,
    economicsSystem,
    educationSystem,
    religionSystem,
    anthropologySystem,
    counsellingSystem
  ]
};





export const behaviouralSocialScienceSystem = {
  id: "behavioural_social_science",
  name: "Behavioural and Social Science",
  organs: [
    introductionBehaviouralScience
  ]
};