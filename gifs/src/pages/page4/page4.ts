import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RedditData } from '../../app/providers/redditData.service';

@Component({
  selector: 'page-page4',
  templateUrl: 'page4.html'
})
export class Page4 {
  items: any;
  photo: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public redditData: RedditData) {

  }

  ionViewDidLoad(){
    this.redditData.getLocalData().subscribe(response => {
      this.items = response.data.children;
      console.log(this.items);
    });
  }


}
