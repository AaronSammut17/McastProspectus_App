import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as xml2js from 'xml2js';


// Load the XML file and store it in an array structure(HTTPP/XML2JS)
// Get institute information
// Get courses

@Injectable({
  providedIn: 'root'
})
export class ProspectusService {

  /**
   * The data stored in this service.
   */
  private _data: any = null;

  constructor(public http: HttpClient) { }

  /**
   * Loads the XML data into this service.
   */
  public async preload(){
    
    await this.http.get('/assets/data.json', {
        headers: new HttpHeaders()
            .set('Access-Control-Allow-Origin', '*')
            .append('Access-Control-Allow-Methods', 'GET')
            .append('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method')

    })
        .toPromise()
        .then(
          // Success
          (content: string) => {
            this._data = content;
          },

          // Failure
          error => {
            console.warn(error);
          }
        );
  }

  /**
  * Will retrieve one institute from the list.
  * @param code The institute code.
  */
  public getInstitute(code: string): any
  {
    return this._data.find(i => i.code == code);
  }

  /**
  * Finds and returns the institute name from the JSON object.
  * @param institute The institute object
  * @param lang [OPTIONAL] The language with which to retrieve the information.
  */
  public getInstituteName(institute: any, lang: string = 'en'): string {
    
    return (lang == 'en') ? institute.name_en : institute.name_mt;
  }

  /**
  * Look for and return the institutes list.
  */
  public getInstitutes(): any[] {
    return this._data;
  }

  /**
  * Will retrieve one course from the list.
  * @param code The course code.
  */
 public getCourses(code: any): any
 {
    // first, find the institute containing the required course
    const institute = this._data.find(i => i.courses.find(c => c.code == code));
    
    // then, get the course from the same institute
    // information is layered, that is why this is needed:
    const course = institute.courses.find(c => c.code == code);

    return course;
  }
}
