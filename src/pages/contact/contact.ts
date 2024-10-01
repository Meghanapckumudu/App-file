import { Component } from "@angular/core";
import { NavParams, ViewController } from "@ionic/angular";

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-contact",
  templateUrl: "contact.html",
})
export class ContactPage {
  constructor(public navParams: NavParams, public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ContactPage");
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
