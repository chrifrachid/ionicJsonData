import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MainPage } from '../pages/main/main';
import { RedditsPage } from '../pages/reddits/reddits';
import { TimeLinePage } from '../pages/timeline/timeline';
import { DetailsPage } from '../pages/details/details';
import { SettingsPage } from '../pages/settings/settings';

import { RedditData } from './providers/redditData.service';

@NgModule({
  declarations: [
    MyApp,
    MainPage,
    RedditsPage,
    TimeLinePage,
    DetailsPage,
    SettingsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPage,
    RedditsPage,
    TimeLinePage,
    SettingsPage,
    DetailsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, RedditData]
})
export class AppModule {}
