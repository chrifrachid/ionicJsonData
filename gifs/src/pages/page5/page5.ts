import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RedditData } from '../../app/providers/redditData.service';



@Component({
  selector: 'page-page5',
  templateUrl: 'page5.html'
})
export class Page5 {
  items: any;
  title; any = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public redditData: RedditData) {
  }

  ionViewDidLoad(){
    this.redditData.getLocalData().subscribe(response => {
      this.items = response.data.children;
      for(var i = 0; i < (this.items).length; i++){
        if(this.items[i].data.num_comments >= 30){
          this.items = [this.items[i]];
          console.log(this.items)
        }
      }
    });
  }

  detailsPage(){
    this.redditData.getByID(this.navParams.get('code')).then(result => {
      this.title = result;
    });
  }
}
