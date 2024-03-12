import { CareerOpportunity } from "./career-opportunity";
import { JobOpportunity } from "./job-opportunity";
import { MatureEntryRequirement } from "./mature-entry-requirement";
import { NormalEntryRequirement } from "./normal-entry-requirement";
import { ProgramContact } from "./program-contact";
import { SpecialEntryRequirement } from "./special-entry-requirement";

export interface Program {
  id:number;
  title:string;
  code:string;
  about:string;
  departmentId:number;
  normalEntryRequirements:NormalEntryRequirement;
  specialEntryRequirements:SpecialEntryRequirement;
  matureEntryRequirements:MatureEntryRequirement;
  jobOpportunity:JobOpportunity;
  careerOpportunity:CareerOpportunity;
  duration:number;
  intakes:Array<string>;
  contact:ProgramContact;
  opportunities?: any;
}
