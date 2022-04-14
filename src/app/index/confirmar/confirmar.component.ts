import { Component, OnInit } from '@angular/core';
import { ConfirmarService, Invitado } from '../confirmar.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.scss'],
})
export class ConfirmarComponent implements OnInit {
  invitado: Invitado = {
    id: 0,
    nombre: '',
    cantidad: 0,
    confirmados: 0,
  };

  confirmarGroup: FormGroup = new FormGroup({
    confirmados: new FormControl(0, [
      Validators.required,
      Validators.max(this.invitado.cantidad),
      Validators.min(0),
    ]),
  });

  constructor(
    private route: ActivatedRoute,
    private confirmarService: ConfirmarService
  ) {}

  async ngOnInit() {
    this.invitado = (
      (await this.confirmarService.getInvitado(
        this.route.snapshot.params['id'].split('MC')[1]
      )) as any
    ).invitado;

    console.log(this.invitado);

    this.onChanges();
  }

  sendEdit() {
    if (this.confirmarGroup.value.confirmados != 0) {
      Swal.fire({
        title: '¿Estás seguro?',
        text: `Estás por confirmar a ${this.confirmarGroup.value.confirmados} de ${this.invitado.cantidad} personas. ¿Estas seguro?`,
        showCancelButton: true,
        confirmButtonText: 'Sí',
        denyButtonText: `Cancelar`,
        confirmButtonColor: '#c6ffb8',
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.confirmarService
            .sendEdit(this.invitado.id, this.confirmarGroup.value)
            .then((res: any) => {
              if (res.invitado) {
                this.invitado = res.invitado;
                Swal.fire(
                  'Éxito',
                  'Invitación confirmada con éxito',
                  'success'
                );
              } else {
                Swal.fire('Error', res.message, 'error');
              }
            });
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info');
        }
      });
    } else {
      Swal.fire('Error', 'No puedes confirmar 0 personas', 'error');
    }
  }

  sendDenegar() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Estás por confirmar que NO podrás acompañarnos. ¿Estás seguro?',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      denyButtonText: `Cancelar`,
      confirmButtonColor: '#ff6565',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.confirmarService.sendDenegar(this.invitado.id).then((res: any) => {
          if (res.invitado) {
            this.invitado = res.invitado;
            Swal.fire('Éxito', 'Invitación rechazada con éxito', 'success');
          } else {
            Swal.fire('Error', res.message, 'error');
          }
        });

        Swal.fire('', '', 'success');
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  }

  onChanges(): void {
    this.confirmarGroup.get('confirmados')!.valueChanges.subscribe((value) => {
      if (value > this.invitado.cantidad) {
        this.confirmarGroup
          .get('confirmados')!
          .setValue(this.invitado.cantidad);
      }

      if (value < 0) {
        this.confirmarGroup.get('confirmados')!.setValue(0);
      }
    });
  }

  sumConfirmados() {
    this.confirmarGroup
      .get('confirmados')!
      .setValue(this.confirmarGroup.get('confirmados')!.value + 1);
  }

  restConfirmados() {
    this.confirmarGroup
      .get('confirmados')!
      .setValue(this.confirmarGroup.get('confirmados')!.value - 1);
  }
}
