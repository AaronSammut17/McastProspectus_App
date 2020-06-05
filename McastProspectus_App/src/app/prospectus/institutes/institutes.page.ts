import { Component, OnInit } from '@angular/core';
import { IonCard } from '@ionic/angular';
import { ProspectusService } from 'src/app/services/prospectus.service';

@Component({
  selector: 'app-institutes',
  templateUrl: './institutes.page.html',
  styleUrls: ['./institutes.page.scss'],
})
export class InstitutesPage implements OnInit {

  /**
  * The institute list available to this page.
  */
  public institutes: any[] = [];

  
  constructor( 
    // if to be used in HTML, use public or ionic will give errors on build
    public prospectusService: ProspectusService ) { }

  ngOnInit() {
    this.institutes = this.prospectusService.getInstitutes();

  }

}
