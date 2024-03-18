import { Component, inject } from '@angular/core';
import { PersonaCardComponent } from '../../components/persona-card/persona-card.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IPersona } from '../../interfaces/ipersona.interface';
import { PersonasService } from '../../services/personas.service';
import { BotonesComponent } from '../../components/botones/botones.component';
@Component({
  selector: 'app-personaview',
  standalone: true,
  imports: [PersonaCardComponent, RouterLink, BotonesComponent],
  templateUrl: './personaview.component.html',
  styleUrl: './personaview.component.css'
})
export class PersonaviewComponent {
  activatedRoute = inject(ActivatedRoute)
  personaService = inject(PersonasService)
  unaPersona!: IPersona;

 ngOnInit(): void {

  this.activatedRoute.params.subscribe( async (params: any) => {
    const _id = (params._id)
    try{
      this.unaPersona = await this.personaService.getById(_id)
      console.log(this.unaPersona)
    }
    catch(error){
      console.log(error)
    }
  
    
    
  })


}

}
