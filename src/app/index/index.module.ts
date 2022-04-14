import 'hammerjs';
import 'mousetrap';

import { CommonModule } from '@angular/common';
import { ConfirmarComponent } from './confirmar/confirmar.component';
import { CountdownComponent } from './header/countdown/countdown.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { HeaderComponent } from './header/header.component';
import { HistoriaComponent } from './historia/historia.component';
import { MainComponent } from './main/main.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UbicacionesComponent } from './ubicaciones/ubicaciones.component';
import { ViewerComponent } from './gallery/viewer/viewer.component';
import { LugaresTuristicosComponent } from './lugares-turisticos/lugares-turisticos.component';
import { RegalosComponent } from './regalos/regalos.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    MainComponent,
    CountdownComponent,
    SidebarComponent,
    HistoriaComponent,
    GalleryComponent,
    UbicacionesComponent,
    ViewerComponent,
    ConfirmarComponent,
    LugaresTuristicosComponent,
    RegalosComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    GalleryModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports: [MainComponent],
})
export class IndexModule {}
