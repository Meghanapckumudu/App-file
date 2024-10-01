import { Component } from "@angular/core";
import { NavParams } from "@ionic/angular";

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-settings",
  templateUrl: "settings.html",
})
export class SettingsPage {
  constructor(public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad SettingsPage");
  }
}
