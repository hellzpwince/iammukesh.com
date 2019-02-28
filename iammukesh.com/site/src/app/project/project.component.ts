import { Component, OnInit } from '@angular/core';
declare var basicInitialization:any;
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor() {

   }

  ngOnInit() {
    new basicInitialization();
  }

}
