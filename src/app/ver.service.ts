import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VerService {
  constructor(private http: HttpClient) {}

  getInvitadosConfirmados() {
    return lastValueFrom(
      this.http.get('https://proyecto-voda.herokuapp.com/invitados/confirmados')
    );
  }

  getInvitadosRechazados() {
    return lastValueFrom(
      this.http.get('https://proyecto-voda.herokuapp.com/invitados/rechazados')
    );
  }

  getInvitadosPendientes() {
    return lastValueFrom(
      this.http.get('https://proyecto-voda.herokuapp.com/invitados/pendientes')
    );
  }

  getInvitados() {
    return lastValueFrom(
      this.http.get('https://proyecto-voda.herokuapp.com/invitados/')
    );
  }
}
