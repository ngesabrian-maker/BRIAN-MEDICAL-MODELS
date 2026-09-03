import  { introductonOtherSystems }  from  "./others/introduction.js";
import {communityBasedPharmacology} from "./others/community_based_pharmacology.js";
import  {nosocomial} from "./others/nosocomial.js";
import {basicPharmacology} from "./others/basic_pharmacology.js";


export const otherSystems = {
    id: "others",
    name: "Other Units",
    organs: [
        introductonOtherSystems,
        communityBasedPharmacology,
        nosocomial,
        basicPharmacology
    ]
};