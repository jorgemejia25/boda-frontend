import { Component, OnInit } from '@angular/core';

import { Invitado } from '../index/confirmar.service';
import { VerService } from '../ver.service';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.scss'],
})
export class VerComponent implements OnInit {
  invitados: Invitado[] = [];
  constructor(private verService: VerService) {}

  ngOnInit(): void {
    this.getConfirmados();
  }

  getConfirmados() {
    this.verService.getInvitadosConfirmados().then((res: any) => {
      console.log(res);
      this.invitados = res.invitados;
    });
  }

  getRechazados() {
    this.verService.getInvitadosRechazados().then((res: any) => {
      console.log(res);
      this.invitados = res.invitados;
    });
  }

  getPendientes() {
    this.verService.getInvitadosPendientes().then((res: any) => {
      console.log(res);
      this.invitados = res.invitados;
    });
  }

  getInvitados() {
    this.verService.getInvitados().then((res: any) => {
      console.log(res);
      this.invitados = res.invitados;
    });
  }
}
