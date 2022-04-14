import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  scrollTo(id: string): void {
    document.getElementById(id)!.scrollIntoView({ behavior: 'smooth' });
  }
}
