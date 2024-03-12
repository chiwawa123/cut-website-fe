import { DirectorateContact } from "./directorate-contact";
import { DirectorateDescription } from "./directorate-description";
import { DirectorateLink } from "./directorate-link";

export interface Directorate{
  id: number;
  code:string;
  staff:[];
  name:string;
  picUrl:string;
  links:Array<DirectorateLink>;
  description:DirectorateDescription;
  contact:DirectorateContact;
  mainImageUrl:string;
}
