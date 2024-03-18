import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IPersona } from '../interfaces/ipersona.interface';
import { Observable, lastValueFrom } from 'rxjs';
import { IResponse } from '../interfaces/iresponse.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  httpClient = inject(HttpClient)
  baseUrl = 'https://peticiones.online/api/users'
  

   getAllPromises(): Promise<IResponse[]> {
     return lastValueFrom(this.httpClient.get<IResponse[]>(this.baseUrl))
    }

  getById(id: string): Promise<IPersona> {
    return lastValueFrom(this.httpClient.get<IPersona>(`${this.baseUrl}/${id}`))

  }

  deleteid(id: string): Promise<IPersona> {
    return lastValueFrom(this.httpClient.delete<IPersona>(`${this.baseUrl}/${id}`))
  }

  create(formValue: IPersona): Promise<IPersona> {
    return lastValueFrom(this.httpClient.post<IPersona>(this.baseUrl, formValue))
  }

  update(formValue: IPersona): Promise<IPersona> {
    return lastValueFrom(this.httpClient.put<IPersona>(`${this.baseUrl}/${formValue._id}`, formValue))

  }

}
