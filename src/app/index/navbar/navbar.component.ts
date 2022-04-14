import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @ViewChild('navbar') navbar!: ElementRef;
  @Output() toggleSidebar = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: Event) {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      this.navbar.nativeElement.classList.add('navbar-scrolled');
    } else {
      this.navbar.nativeElement.classList.remove('navbar-scrolled');
    }
  }
}
