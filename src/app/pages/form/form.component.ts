import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PersonasService } from '../../services/personas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  tipo: string = 'NUEVO'
  personasForm: FormGroup;
  personasServices = inject(PersonasService)
  router = inject(Router)
  activatedRoute = inject(ActivatedRoute)

  constructor() {
    this.personasForm = new FormGroup({
      first_name: new FormControl('', [
        Validators.required
      ]),
      last_name: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
      ]),
      image: new FormControl('', [
        Validators.required
      ]),
      username: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    }, [])

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async (params:any) => {
      if(params._id) {
        const response = await this.personasServices.getById(params._id)
        console.log(response)
        this.personasForm = new FormGroup({
          _id: new FormControl(response._id),
          first_name: new FormControl(response.first_name, [
            Validators.required
          ]),
          last_name: new FormControl(response.last_name, [
            Validators.required
          ]),
          email: new FormControl(response.email, [
            Validators.required
          ]),
          image: new FormControl(response.image, [
            Validators.required
          ]),
          username: new FormControl(response.username, [
            Validators.required
          ]),
          password: new FormControl(response.password, [
            Validators.required
          ])
        }, [])
      }
    })
  }

  async getDataForm() {
    if (this.personasForm.value._id) {
      const response = await this.personasServices.update(this.personasForm.value);
      if(response.id) {
        alert(`El Usuario ${response.first_name} se ha actualizado correctamente`)
        this.router.navigate(['/home'])
      } else {
        alert('Hubo un problema, intentalo de nuevo')
      }

    } else {
      const response = await this.personasServices.create(this.personasForm.value)
    if(response.id) {
      alert(`El Usuario ${response.first_name} se ha añadido correctamente`)
      this.router.navigate(['/home'])
    }else {
      alert('Hubo un problema, intentalo de nuevo')
    }
    }

    
  }
}
