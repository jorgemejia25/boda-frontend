import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IndexModule } from './index/index.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { NgModule } from '@angular/core';
import { VerComponent } from './ver/ver.component';

@NgModule({
  declarations: [AppComponent, VerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IndexModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
