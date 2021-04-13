import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    localStorage.setItem('themIcon', 'wb_sunny');
  }

  isDark = false;

  themeTogled() {
    if (this.isDark)
      this.isDark = false;
    else
      this.isDark = true;
  }

}
