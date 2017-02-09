import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditData } from '../../app/providers/redditData.service';

@Component({
  selector: 'page-page4',
  templateUrl: 'page4.html'
})
export class Page4 {
  items: any;
  constructor(public navCtrl: NavController, public redditData: RedditData) {
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



}
