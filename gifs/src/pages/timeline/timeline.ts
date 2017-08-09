import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditData } from '../../app/providers/redditData.service';

@Component({
  selector: 'timeline',
  templateUrl: 'timeline.html'
})
export class TimeLinePage {
  selectedItem: any;
  items: any;
  category: any;
  limit: any;
  constructor(public navCtrl: NavController, public redditData: RedditData) {

  }




}
