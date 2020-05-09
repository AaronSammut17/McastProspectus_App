import { Component, OnInit } from '@angular/core';
import { IonCard } from '@ionic/angular';

@Component({
  selector: 'app-institutes',
  templateUrl: './institutes.page.html',
  styleUrls: ['./institutes.page.scss'],
})
export class InstitutesPage implements OnInit {
  public selectedIndex = 0;
  public institutes = [
    {
      title: 'Applied Science',
      code: 'ias',
      url: 'courses-list'
    },
    {
      title: 'Business Management & Commerce',
      code: 'ibmc',
      url: 'courses-list'
    },
    {
      title: 'Community Services',
      code: 'ics',
      url: 'courses-list'
    },
    {
      title: 'Creative Arts',
      code: 'ica',
      url: 'courses-list'
    },
    {
      title: 'Engineering & Transport',
      code: 'iet',
      url: 'courses-list'
    },
    {
      title: 'Information & Communication Technology',
      code: 'ict',
      url: 'courses-list'
    },
    {
      title: 'Gozo Campus',
      code: 'gozo',
      url: 'courses-list'
    },
    {
      title: 'Masters',
      code: 'masters',
      url: 'courses-list'
    }
  ];

  constructor() { }

  ngOnInit() {
    const path = window.location.pathname.split('/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.institutes.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

}
