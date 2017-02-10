import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditData } from '../../app/providers/redditData.service';
import { Page4 } from '../page4/page4'

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  items: any;
  titles: any =0;
  constructor(public navCtrl: NavController, public redditData: RedditData) {
    this.redditData.loadAll().then(result => {
      this.titles = result;
    });

  }

  ionViewDidLoad(){
    console.log("--This data must be in a map for navigation purposes--");
    this.redditData.getLocalData().subscribe(response => {
      this.items = response.data.children;
    });

  }
  detailsPage(id){
    this.navCtrl.push(Page4, {code: id})
  }


}
