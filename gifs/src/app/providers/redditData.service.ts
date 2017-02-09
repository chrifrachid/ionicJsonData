import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class RedditData {
  constructor(public http: Http) {
  console.log('--|SERVICE STARTED|--');

  }

  getLocalData(){
    return this.http.get('assets/data/redditData.json').map(res => res.json());
  }


}
