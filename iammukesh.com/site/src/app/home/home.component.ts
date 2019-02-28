import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(private meta: Meta) {
    this.meta.addTag({ name: 'description', content: 'Mukesh Joshi is a web consultant providing web services to various companies and businesses. Click to know more about him' });
    this.meta.addTag({ name: 'author', content: 'Mukesh Joshi' });
    this.meta.addTag({ name: 'keywords', content: 'Mukesh Joshi,Mukesh,Mukesh Joshi Roorkee,Mukesh Joshi Developer' });
  }

  ngOnInit() {
  }



}
