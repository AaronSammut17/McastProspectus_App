import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {
  // this will be to add a number from the contact data 
  // phoneNumber: number;

  constructor(private call: CallNumber) { }

  ngOnInit() {
  }

 // this function will launch the dialer with the number 
 // and the user can call the number
  async callNumber():Promise<any>{
    await this.call.callNumber('902302392', true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));

  }

  

}
