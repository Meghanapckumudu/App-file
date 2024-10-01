import { Component } from "@angular/core";
import { NavParams, ViewController } from "@ionic/angular";

/**
 * Generated class for the ReturnpolicyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-returnpolicy",
  templateUrl: "returnpolicy.html",
})
export class ReturnpolicyPage {
  constructor(public navParams: NavParams, public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ReturnpolicyPage");
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
