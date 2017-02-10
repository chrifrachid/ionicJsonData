import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class RedditData {
  titles: any;
  constructor(public http: Http) {
  console.log('SERVICE STARTED');
  this.titles = [
    { title: "Unbrakable Apps", code: 1223, product: "Top Socials" },
    { title: "Thinking Bots", code: 5233, product: "Chat App101" },
    { title: "Groundbraking Tech", code: 1553, product: "Speed Save" },
    { title: "DemoApp-Tester", code: 6191, product: "Pictorial" },
    { title: "T-Shirt Pro", code: 7023, product: "B&O" },
    { title: "radArts", code: 1223, product: "Socials-Busters" },
    { title: "iOBots", code: 5633, product: "Chat Applets Demos" },
    { title: "GhokuMaker", code: 1550, product: "SpeedTracker" },
    { title: "SibonileInc", code: 6041, product: "Pictorial" },
    { title: "BrakingDoors", code: 7523, product: "B&O ft rad" }
  ];
}
  loadAll(){
    return Promise.resolve(this.titles);
  }
  getLocalData(){
    console.log(this.http.get('assets/data/redditData.json').map(res => res.json()));
    return this.http.get('assets/data/redditData.json').map(res => res.json());
  }

  getByID(id){
    for(var i =0; i < (this.titles).length; i ++){
      if(this.titles[i].code == id){
        return Promise.resolve(this.titles[i]);
      }
    }
  }
}
