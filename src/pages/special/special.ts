import { Component } from "@angular/core";
import { NavParams } from "@ionic/angular";

/**
 * Generated class for the SpecialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-special",
  templateUrl: "special.html",
})
export class SpecialPage {
  constructor(public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad SpecialPage");
  }
}
