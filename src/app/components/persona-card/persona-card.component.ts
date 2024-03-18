import { Component, Input } from '@angular/core';
import { IPersona } from '../../interfaces/ipersona.interface';
import { RouterLink } from '@angular/router';
import { IResponse } from '../../interfaces/iresponse.interface';
import { BotonesComponent } from '../botones/botones.component';

@Component({
  selector: 'app-persona-card',
  standalone: true,
  imports: [RouterLink, BotonesComponent],
  templateUrl: './persona-card.component.html',
  styleUrl: './persona-card.component.css'
})
export class PersonaCardComponent {
  @Input() miUser!: IPersona;
}
