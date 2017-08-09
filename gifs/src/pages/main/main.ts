import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditData } from '../../app/providers/redditData.service';
import {DetailsPage} from '../details/details';

@Component({
  selector: 'page-page1',
  templateUrl: 'main.html'
})
export class MainPage {
  items: any;
  category: any;
  limit: any;
  constructor(public navCtrl: NavController, private redditData: RedditData) {
    this.getDefaults();
  }

  ngOnInit(){
    this.getPosts(this.category, this.limit);
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

  getPosts(category, limit){
    this.redditData.getPosts(category, limit).subscribe(response => {
      this.items = response.data.children;
    })
  }

  viewItem(item){
    this.navCtrl.push(DetailsPage, {
      item:item
    });
  }

  changeCategory(){
    this.getPosts(this.category, this.limit);
  }



}
