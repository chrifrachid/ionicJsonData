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
  getByID(id){
  this.http.get('assets/data/redditData.json').map(res => res.json()).subscribe(response => {
    this.items = response.data.children;});

    for(var i=0; i<this.items.length; i++){
      if(this.items[i].name == id){
        return this.items[i];
      }
    }

  }

}
