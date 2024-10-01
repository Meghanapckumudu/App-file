import { Component } from "@angular/core";
import { NavParams, ViewController } from "@ionic/angular";

/**
 * Generated class for the TermsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-terms",
  templateUrl: "terms.html",
})
export class TermsPage {
  constructor(public navParams: NavParams, public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad TermsPage");
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
