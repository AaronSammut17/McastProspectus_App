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
    
    await this.http.get('/assets/data.xml', {
        headers: new HttpHeaders()
            .set('Content-Type', 'text/xml')
            .append('Access-Control-Allow-Origin', '*')
            .append('Access-Control-Allow-Methods', 'GET')
            .append('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method'),
        responseType: 'text'

    })
        .toPromise()
        .then(
          // Success
          (content: string) => this.parseData(content),

          // Failure
          error => {
            console.warn(error);
          }
        );
  }

  /**
  * Interprets the XML information into JSON (so the app understands the data).
  * @param content The XML data as a string.
  */
  private parseData(content: string){

    xml2js.parseString(content, {
      attrKey: 'attr',
      trim: true
    }, (error, result) => {
          // check for errors first so we can stop the process if something happens.
          if (error != null)
          {
            console.error(error);
            return;
          }

          // Successful process goes here.
          this._data = result.prospectus;
          console.log(this._data);
    });
  }

  /**
  * Will retrieve one institute from the list.
  * @param code The institute code.
  */
  public getInstitute(code: string): any
  {
    return this._data.institute.find(i => i.$.url == code);
  }

  /**
  * Finds and returns the institute name from the JSON object.
  * @param institute The institute object
  * @param lang [OPTIONAL] The language with which to retrieve the information.
  */
  public getInstituteName(institute: any, lang: string = 'en'): string {
    const info = institute.info[0].name.find(name => name.$.lang == lang);
    return info._;
  }

  /**
  * Look for and return the institutes list.
  */
  public getInstitutes(): any[] {
    return this._data.institute;
  }
}
