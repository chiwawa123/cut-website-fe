export interface Requirement {
  id:number;
  programId:number;
  briefDescription:string;
  olevelSubjects:Array<string>;
  alevelSubjects:Array<string>;
  mustHaveOlevelSubjects:Array<string>;
  mustHaveAlevelSubjects:Array<string>;
  honours:Array<string>;
  deplomers:Array<string>;
  certificate:Array<string>;
}
