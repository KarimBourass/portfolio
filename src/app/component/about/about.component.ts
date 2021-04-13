import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

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
