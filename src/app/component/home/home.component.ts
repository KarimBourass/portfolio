import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  isDarkTheme: boolean = true;
  constructor() { }

  ngOnInit(): void {
    this.getColor();
  }

  getColor() {
    let theme = localStorage.getItem('themIcon');
    if (theme == 'wb_sunny')
      return 'black'
    else
      return 'white '
  }

}
