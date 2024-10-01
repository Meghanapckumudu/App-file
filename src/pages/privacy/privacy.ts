import { Component } from "@angular/core";
import { NavParams, ViewController } from "@ionic/angular";

/**
 * Generated class for the PrivacyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-privacy",
  templateUrl: "privacy.html",
})
export class PrivacyPage {
  constructor(public navParams: NavParams, public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad PrivacyPage");
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
