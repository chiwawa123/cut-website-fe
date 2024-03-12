import { Component } from '@angular/core';
import { ProgrammeAttendanceType } from '../../models/programme-attendance-type';
import { Parent } from '../../models/parent';
import { ActivatedRoute } from '@angular/router';
import { ProgramServiceService } from '../../services/program-service.service';
import { WebUrlServiceService } from '../../services/web-url-service.service';
import { ProgrammeAttendanceTypeServiceService } from '../../services/programme-attendance-type-service.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrl: './program.component.css'
})
export class ProgramComponent {
  programmeAttendanceType = new ProgrammeAttendanceType();

  program:any;
  school:any;
  programmeAttendanceTyp:any;
  parent!: Parent;
  entryTypes:any=[];
  myUrl;
  data: any;
  constructor(
    private route:ActivatedRoute,
    private programService:ProgramServiceService,
    public webUrlService:WebUrlServiceService,
    public programmeAtendanceType:ProgrammeAttendanceTypeServiceService
  ) {
    this.myUrl = this.route.snapshot.paramMap.get('id');
    if (this.myUrl) {
      this.programService.getProgramById(webUrlService.getID(this.myUrl)).subscribe((data:any)=>{
        this.program = data.program;
        this.programmeAttendanceTyp = data.programAttendanceType
        // console.log(this.programmeAttendanceTyp );
        this.school = data.program.school;
        this.parent = {
          url:'/school/'+webUrlService.getUrl(this.school.id),
          title: this.school.name
        };
        this.entryTypes = data.entryTypes;
        this.entryTypes.forEach((element: { myRequirements: any; },index: any) => {
          this.programService.getRequirement(this.program.id,index).subscribe(data=>{
            element.myRequirements = data;
          });
        });

      });

    }
   }
}
