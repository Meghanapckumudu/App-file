import { Component } from "@angular/core";
import { NavParams } from "@ionic/angular";

/**
 * Generated class for the CustomerProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-customer-profile",
  templateUrl: "customer-profile.html",
})
export class CustomerProfilePage {
  constructor(public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad CustomerProfilePage");
  }
}
