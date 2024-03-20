import { Component } from '@angular/core';
import { Program } from '../../models/program';
import { School } from '../../models/school';
import { ProgramServiceService } from '../../services/program-service.service';
import { SchoolServiceService } from '../../services/school-service.service';
import { WebUrlServiceService } from '../../services/web-url-service.service';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.css'
})
export class ProgramsComponent {
previousPage() {
throw new Error('Method not implemented.');
}
  title:string = 'Cut Programs';
  p: number = 1;
  programs!: Program[];
  schools!: School[];
  filteredPrograms!: Program[];
  currentPage!: number;
  pageSize!: number;
  constructor(

    private programsService: ProgramServiceService,
    private schoolService: SchoolServiceService,
    public webUrlService:WebUrlServiceService,
  ) {
   this.programsService.getAllPrograms().subscribe((data:Array<Program>)=>{
    this.filteredPrograms = this.programs = data;


   });

   this.schoolService.getAllSchools().subscribe(data=>this.schools=data);
   }

  limit(text: string,limit: any){
    return (text.substr(0,limit) + '...').replace('<p>','');
  }

  filterPrograms(search: string){
    this.filteredPrograms = (search) ?
    this.programs.filter( p => p.title.toLowerCase().includes(search.toLowerCase())) : this.programs;

  }
  navigateProg(p: number){
    this.p = this.p+p;
    window.scroll(0,0);
  }
}
