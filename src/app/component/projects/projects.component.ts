import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  getColor() {
    let theme = localStorage.getItem('themIcon');
    if (theme == 'wb_sunny')
      return 'black'
    else
      return 'white '
  }
}
