import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditData } from '../../app/providers/redditData.service';
import {RedditsPage} from '../reddits/reddits';


@Component({
  selector: 'settings-page',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  category: any;
  limit: any;
  constructor(public navCtrl: NavController, private redditData: RedditData) {
    this.getDefaults();
  }

  getDefaults(){
  if(localStorage.getItem('category') != null){
    this.category = localStorage.getItem('category');
  }
  else{
    this.category = 'art';
  }

  if(localStorage.getItem('limit') != null){
    this.limit = localStorage.getItem('limit');
  }
  else{
    this.limit = 10;
  }
}

  setDefaults(){
    localStorage.setItem('category', this.category);
    localStorage.setItem('limit', this.limit);
    this.navCtrl.push(RedditsPage);
  }

}
