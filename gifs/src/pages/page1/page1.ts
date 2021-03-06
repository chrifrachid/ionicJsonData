import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditData } from '../../app/providers/redditData.service';
import { DetailsPage } from '../details/details'

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  items: any;
  titles: any =0;
  search: string = '';
  list: string[];
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
    this.navCtrl.push(DetailsPage, {code: id})
  }
  getItems(ev: any){
    this.redditData.loadAll().then(result => {
      this.list = result;
    });

    let val = ev.target.value;

    if(val && val.trim() != ''){
      this.list = this.list.filter((list) =>{
        return (list.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }


}
