import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from '@ionic/angular';
import { DataProvider } from '../../providers/data/data';


@Component({
  templateUrl: 'howtouse.html',
})

export class HowtousePage {

  constructor(public navCtrl: NavController, private plt: Platform,
    public navParams: NavParams, public data: DataProvider,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad');
  }

  subscription: any;
  ionViewDidEnter() {
    this.subscription = this.plt.backButton.subscribe(() => {
      console.log('Back press handler!');
      console.log('Show Exit Alert!');
      let Mypages: any = HowtousePage;
      this.navCtrl.pop(Mypages);
    });
  }

  ionViewDidLeave() {
    this.subscription.unsubscribe();
  }


}
