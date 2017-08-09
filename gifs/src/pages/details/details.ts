import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RedditData } from '../../app/providers/redditData.service';

@Component({
  templateUrl: 'details.html'
})
export class DetailsPage {
  item: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public redditData: RedditData) {
    this.item = navParams.get('item');
  }

}
