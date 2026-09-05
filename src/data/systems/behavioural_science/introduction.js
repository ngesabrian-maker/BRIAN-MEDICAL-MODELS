import { psychologyBehaviouralScience } from "./introduction/concepts.js";
import { determinantsOfBehaviour } from "./introduction/determinants.js";
import { behaviourAndHealth } from "./introduction/behaviour_health.js";
import { biopsychosocialApproach } from "./introduction/biopsychosocial_approach.js";
import { behaviourChange } from "./introduction/behaviour_change.js";
import { healthPromotion } from "./introduction/health_promotion.js";
import { clinicalApplication } from "./introduction/clinical_application.js";
import { introBehaviouralScience } from "./introduction/introduction.js";


export const introductionBehaviouralScience = {
  id: "introduction_behavioural_science",
  name: "Introduction to psychology",
//

  parts: [
    introBehaviouralScience,
    psychologyBehaviouralScience,
    determinantsOfBehaviour,
    behaviourAndHealth,
    biopsychosocialApproach,
    behaviourChange,
    healthPromotion,
    clinicalApplication
  ]
};