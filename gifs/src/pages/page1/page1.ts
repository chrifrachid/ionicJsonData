import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditData } from '../../app/providers/redditData.service';


@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  items: any;
  constructor(public navCtrl: NavController, public redditData: RedditData) {


  }

  ionViewDidLoad(){
    console.log("--This data must be in a map for navigation purposes--");
    this.redditData.getLocalData().subscribe(response => {
      this.items = response.data.children;
      console.log(this.items);
    });

  }


}
