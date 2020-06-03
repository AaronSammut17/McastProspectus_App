import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProspectusService } from 'src/app/services/prospectus.service';

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

  /**
  * The institute to be used with this page.
  */
  public institute: any =null;

  constructor(
    public route: ActivatedRoute,
    public prospectusService: ProspectusService,
    public router: Router
  ) { }

  ngOnInit() {
  
    const code = this.route.snapshot.params.code;
    this.institute = this.prospectusService.getInstitute(code);
    
  }
  /**
  *  Navigates to the back link.
  */
  public navigate(){
    // Will navigate to the page given as a back link.
    // Will also make sure that the URL doesn't become a part of the browser history.
    this.router.navigateByUrl(this.backLink, { replaceUrl: true });
  }
}
