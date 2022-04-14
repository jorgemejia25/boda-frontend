import * as moment from 'moment';

import { Component, Input, OnInit } from '@angular/core';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
})
export class CountdownComponent implements OnInit {
  time!: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };

  @Input() finishDateString: string = '';
  finishDate: Date = new Date();

  constructor() {}

  ngOnInit(): void {
    this.time = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    this.finishDateString = moment(this.finishDateString).format();
    this.finishDate = new Date(this.finishDateString);

    this.start().subscribe((_) => console.log('tik'));
  }

  updateTime() {
    const now = new Date();
    const diff = this.finishDate.getTime() - now.getTime();

    // Cálculos para sacar lo que resta hasta ese tiempo objetivo / final
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor(diff / (1000 * 60));
    const secs = Math.floor(diff / 1000);

    // La diferencia que se asignará para mostrarlo en la pantalla
    this.time.days = days;
    this.time.hours = hours - days * 24;
    this.time.minutes = mins - hours * 60;
    this.time.seconds = secs - mins * 60;
  }

  start() {
    return interval(1000).pipe(
      map((x: number) => {
        this.updateTime();
        return x;
      })
    );
  }
}
