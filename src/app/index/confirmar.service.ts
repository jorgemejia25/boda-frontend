import { interval, lastValueFrom } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Invitado {
  id: number;
  nombre: string;
  cantidad: number;
  confirmados: number | string;
}

@Injectable({
  providedIn: 'root',
})
export class ConfirmarService {
  constructor(private http: HttpClient) {}

  async getInvitado(id: number) {
    return await lastValueFrom(
      this.http.get(`https://proyecto-voda.herokuapp.com/invitados/${id}`)
    );
  }

  async sendEdit(id: number, confirmados: number | string) {
    console.log(confirmados);
    console.log(id);

    return await lastValueFrom(
      this.http.post(
        `https://proyecto-voda.herokuapp.com/invitados/${id}`,
        confirmados
      )
    );
  }

  async sendDenegar(id: number) {
    return await lastValueFrom(
      this.http.put(
        `https://proyecto-voda.herokuapp.com/invitados/denegar/${id}`,
        'Rechazado'
      )
    );
  }
}
