import { Component, inject } from '@angular/core';
import { PersonasService } from '../../services/personas.service';
import { IPersona } from '../../interfaces/ipersona.interface';
import { PersonaCardComponent } from '../../components/persona-card/persona-card.component';
import { IResponse } from '../../interfaces/iresponse.interface';

@Component({
  selector: 'app-personas-list',
  standalone: true,
  imports: [PersonaCardComponent],
  templateUrl: './personas-list.component.html',
  styleUrl: './personas-list.component.css'
})
export class PersonasListComponent {
  personasServices = inject(PersonasService)
  arrPersonasPerPage: IPersona[] = [];
  currentPage: number = 1; 
  pageSize: number = 8;
  
  arrPersonas: IPersona[] = [];
  

  async ngOnInit(): Promise<void> {
     let response:any = await this.personasServices.getAllPromises()
     this.arrPersonas = response.results
     this.calculateRowPages()
     console.log(this.arrPersonas)
     
   }

   calculateRowPages () {
    const start = (this.currentPage - 1) * this.pageSize
    const end = start + this.pageSize
    this.arrPersonasPerPage = this.arrPersonas.slice(start, end)
  }
  calculateTotalPages () {
    const totalPages = Math.ceil(this.arrPersonas.length / this.pageSize) 
    return totalPages
  }
  nextTo () {
    const totalPages = this.calculateTotalPages()
    if (this.currentPage < totalPages) {
      this.currentPage++
      this.calculateRowPages()
    }
  }
  backTo () {
    if (this.currentPage !== 1) {
      this.currentPage--
      this.calculateRowPages()
    }
  }
}
