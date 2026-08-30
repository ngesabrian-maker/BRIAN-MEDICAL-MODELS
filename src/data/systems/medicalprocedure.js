import {cardioprocedures} from"./procedures/cardiovascular.js";
import {gastroprocedures} from"./procedures/gastrointestinal.js";
import {respprocedures} from"./procedures/respiratory.js";
import {genitourinaryprocedures} from"./procedures/genitourinary.js";
import {procedureintroduction} from"./procedures/introduction.js";
import {musculoprocedures} from"./procedures/masculo-skeletal.js";
import {neuroprocedures} from"./procedures/neuro-psychiatry.js";


export const medicalprocedure = {
  id: "medicalprocedure",
  name: "Medical Procedure",

  organs: [
   procedureintroduction,
   respprocedures, 
   cardioprocedures,
   gastroprocedures,
   genitourinaryprocedures,
   musculoprocedures,
   neuroprocedures
    
  ]
}