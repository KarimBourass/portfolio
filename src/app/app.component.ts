import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isDark = false;
  darkMode: string | null | undefined;
  ngOnInit(): void {
    this.darkMode = localStorage.getItem('themIcon');
    if (this.darkMode == 'wb_sunny')
      this.isDark = false;
    else
    {
      localStorage.setItem('themIcon', 'dark_mode');
      this.isDark = true
    }

  }

  themeTogled() {
    if (this.isDark)
      this.isDark = false;
    else
      this.isDark = true;
  }

}
