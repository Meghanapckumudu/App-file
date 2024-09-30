import { Component } from '@angular/core';
import { App, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';
import { LoginPage } from '../pages/login/login';
import { DataProvider } from '../providers/data/data';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    private storage: Storage, private app: App, public data: DataProvider, private fcm: FCM, ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      platform.registerBackButtonAction(() => {
        //sometimes the best thing you can do is not think, not wonder, not imagine, not obsess.
        //just breathe, and have faith that everything will work out for the best.
      }, 1);
      try {
        this.fcm.getToken().then(token => {
          console.log(token);
        });
        this.fcm.onNotification().subscribe(data => {
          console.log(data);
          if (data.wasTapped) {
            console.log('Received in background');
          } else {
            console.log('Received in foreground');
          }
        });
        this.fcm.onTokenRefresh().subscribe(token => {
          console.log(token);
        });
      } catch (error) {

      }
    });
  }
}

