import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.page.html',
  styleUrls: ['./courses-list.page.scss'],
})
export class CoursesListPage implements OnInit {
  /**
   *  The Link this header should navigate back to.
   *  By default, it is the root page.
   */
  @Input("backLink") backLink: any = ['/'];

  constructor(
    public router: Router
  ) { }

  ngOnInit() {}
  
  /**
  *  Navigates to the back link.
  */
  public navigate(){
    // Will navigate to the page given as a back link.
    // Will also make sure that the URL doesn't become a part of the browser history.
    this.router.navigateByUrl(this.backLink, { replaceUrl: true });
  }

}
