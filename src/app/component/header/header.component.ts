import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() themeTogled: EventEmitter<number> = new EventEmitter()
  themIcon: string | null = 'dark_mode' ;
  constructor() { }

  ngOnInit(): void {
    this.themIcon = localStorage.getItem('themIcon');
  }

  clicSurBouton() {
    if (this.themIcon == 'dark_mode') {
      localStorage.setItem('themIcon', 'wb_sunny');
      this.themIcon = 'wb_sunny'
    }
    else {
      localStorage.setItem('themIcon', 'dark_mode');
      this.themIcon = 'dark_mode'
    }
    this.themeTogled.emit()
  }

}
