import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ProspectusService } from './services/prospectus.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

// impliments OnInit will force the initialization function to work.
export class AppComponent implements OnInit {
  // index of which page is selected
  public selectedIndex = 0;
  // the list of pages
  public appPages = [
    {
      title: 'Home',
      url: 'home',
      icon: 'home'
    },
    {
      title: 'About',
      url: 'about',
      icon: 'information-circle'
    },
    {
      title: 'Students Work',
      url: 'students-work',
      icon: 'brush'
    },
    {
      title: 'Institutes',
      url: 'institutes',
      icon: 'school'
    },
    {
      title: 'Contact Us',
      url: 'contact-us',
      icon: 'call'
    }
  ];
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,

    private prospectusSercive: ProspectusService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async ngOnInit() {
    // Always load the information first.
    await this.prospectusSercive.preload();

    // All the rest of the code you need goes below this line!
    // this is for the sidemenu
    // this will check which pae is selected and it will changes the url path to that page selected.
    const path = window.location.pathname.split('/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
