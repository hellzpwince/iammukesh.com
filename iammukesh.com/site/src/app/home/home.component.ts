import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { ProjectService } from '../project-service';
declare var previousTestimonial: any;
declare var nextTestimonial: any;
declare var basicInitialization: any
declare var homePageInitialization: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public projects: Observable<any[]>;


  public videoEpisodeText = `Lessons are non-linear ~10min episodes covering
                             a variety of topics that include a video, 
                             writeup, and github repo.`;

  constructor(private router: Router, private meta: Meta, private title: Title, private route: ActivatedRoute,db: AngularFirestore) {
    this.title.setTitle('Mukesh Joshi | Developer & Digital Consultant');
    this.meta.addTag({ name: 'description', content: 'Mukesh Joshi is a web consultant providing web services to various companies and businesses. Click to know more about him' });
    this.meta.addTag({ name: 'author', content: 'Mukesh Joshi' });
    this.meta.addTag({ name: 'keywords', content: 'Mukesh Joshi,Mukesh,Mukesh Joshi Roorkee,Mukesh Joshi Developer' });
    this.projects = db.collection('/projects').valueChanges();
  }

  ngOnInit() {
    new basicInitialization();
    new homePageInitialization();
  }

  previousTestimonial() {
    new previousTestimonial();
  }
  nextTestimonial() {
    new nextTestimonial();
  }
  routeProject() {
    this.router.navigate(['/project']);
  }


}
