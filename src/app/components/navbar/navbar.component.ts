import {Component, ElementRef, Renderer2} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  isOpened: boolean = false;
  isDroppedDokumenty: boolean = false;
  isDroppedDokumentyM: boolean = false;
  isDroppedObecne: boolean = false;
  isDroppedObecneM: boolean = false;
  isDroppedAkcie: boolean = false;
  isDroppedAkcieM: boolean = false;

  sidenavbar = this.el.nativeElement.querySelector('.sidenavbar');

  toggleNavbar() {
    this.isOpened = !this.isOpened;
    this.sidenavbar = this.el.nativeElement.querySelector('.sidenavbar');
    if (this.isOpened) {
      this.renderer.setStyle(this.sidenavbar, 'display', 'flex');
    } else {
      this.renderer.setStyle(this.sidenavbar, 'display', 'none');
    }
  }

  toggleOpenDokumenty() {
    this.isDroppedDokumenty = !this.isDroppedDokumenty;
    if (this.isDroppedAkcie === true) {
      this.isDroppedAkcie = false;
    }

    if (this.isDroppedObecne === true) {
      this.isDroppedObecne = false;
    }
  }

  toggleOpenDokumentyM() {
    console.log('Dokumenty b:', this.isDroppedDokumentyM); // Added this line
    this.isDroppedDokumentyM = !this.isDroppedDokumentyM;
    console.log('Dokumenty a:', this.isDroppedDokumentyM); // Added this line

    if (this.isDroppedAkcieM === true) {
      this.isDroppedAkcieM = false;
    }

    if (this.isDroppedObecneM === true) {
      this.isDroppedObecneM = false;
    }
  }


  toggleOpenObecne() {
    this.isDroppedObecne = !this.isDroppedObecne;
    if (this.isDroppedAkcie === true) {
      this.isDroppedAkcie = false;
    }

    if (this.isDroppedDokumenty === true) {
      this.isDroppedDokumenty = false;
    }
  }

  toggleOpenObecneM() {
    this.isDroppedObecneM = !this.isDroppedObecneM;
    if (this.isDroppedAkcieM === true) {
      this.isDroppedAkcieM = false;
    }

    if (this.isDroppedDokumenty === true) {
      this.isDroppedDokumenty = false;
    }
  }

  toggleOpenAkcie() {
    this.isDroppedAkcie = !this.isDroppedAkcie

    if (this.isDroppedObecne === true) {
      this.isDroppedObecne = false;
    }

    if (this.isDroppedDokumenty === true) {
      this.isDroppedDokumenty = false;
    }
  }

  toggleOpenAkcieM() {
    this.isDroppedAkcieM = !this.isDroppedAkcieM

    if (this.isDroppedObecneM === true) {
      this.isDroppedObecneM = false;
    }

    if (this.isDroppedDokumenty === true) {
      this.isDroppedDokumenty = false;
    }
  }

}
