import { conceptRationaleCommunityPharmacies } from "./community_base_pharmacology/concept-rationale.js";
import { proceduresSettingUpCommunityPharmacies } from "./community_base_pharmacology/setting-up-pharmacies.js";

import { personnelTOTCommunityPharmacies } from "./community_base_pharmacology/personnel-tot.js";
import { infrastructureCommunityPharmacies } from "./community_base_pharmacology/infrastructure.js";
import { initialSuppliesCommunityPharmacies } from "./community_base_pharmacology/initial-supplies.js";
import { managementTeamCommunityPharmacies } from "./community_base_pharmacology/management-team.js";

import { sustainabilityCommunityPharmacies } from "./community_base_pharmacology/sustainability.js";
import { monitoringEvaluationCommunityPharmacies } from "./community_base_pharmacology/monitoring-evaluation.js";


export const communityBasedPharmacies = {

    id: "community-based-pharmacies",

    name: "Community Based Pharmacies",

    notes: {
        anatomy: `
            This course unit provides trainees with knowledge and attitudes
            concerning community based pharmacies, their establishment,
            management, sustainability, monitoring and evaluation.
        `
    },

    parts: [

        // 1. Concept and rationale
        conceptRationaleCommunityPharmacies,

        // 2. Procedures of setting up community based pharmacies
        proceduresSettingUpCommunityPharmacies,

        // 3. Personnel and Training of Trainers (TOT)
        personnelTOTCommunityPharmacies,

        // 4. Infrastructure
        infrastructureCommunityPharmacies,

        // 5. Initial supplies
        initialSuppliesCommunityPharmacies,

        // 6. Management team
        managementTeamCommunityPharmacies,

        // 7. Sustainability
        sustainabilityCommunityPharmacies,

        // 8. Monitoring and evaluation
        monitoringEvaluationCommunityPharmacies
    ]
};
