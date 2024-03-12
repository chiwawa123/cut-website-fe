import { Department } from "./department";
import { Events } from "./events";
import { SchoolContact } from "./school-contact";
import { SchoolDescription } from "./school-description";

export interface School {
  id:number;
  name:string;
  description:SchoolDescription;
  departments:Array<Department>;
  events:Array<Events>;
  contact:SchoolContact;
}
