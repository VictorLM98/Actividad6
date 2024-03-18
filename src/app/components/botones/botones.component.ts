import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { PersonasService,  } from '../../services/personas.service';

@Component({
  selector: 'app-botones',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './botones.component.html',
  styleUrl: './botones.component.css'
})
export class BotonesComponent {
  @Input() parent: string = "";
  @Input() idPersona: string | undefined = "";
  personaService = inject(PersonasService)
  router = inject(Router)

  async borrarPersona(id: string | undefined) {
    if(id !== undefined){

      let confirmar = confirm('Deseas borrar al usuario con id: ' + id);
      
      if (confirmar) {
        let response = await this.personaService.deleteid(id);
        if(response._id) {
          alert('Se ha borrado correctamente al usuario: ' + response.first_name + response.last_name + ' de la base de datos')
          this.router.navigate(['/home'])
        }
      }
    }
  }
}
