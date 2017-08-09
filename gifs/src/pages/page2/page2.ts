import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditData } from '../../app/providers/redditData.service';

import {DetailsPage} from '../details/details';
@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {
  selectedItem: any;
  items: any;
  category: any;
  limit: any;
  constructor(public navCtrl: NavController, public redditData: RedditData) {

  }

  ionViewDidLoad(){
    this.redditData.getLocalData().subscribe(response => {
      this.items = response.data.children;
      console.log(this.items);
    });
  }

  viewItem(item){
    this.navCtrl.push(DetailsPage, {
      item:item
    });
  }


}
