import { Component } from "@angular/core";
import { NavParams } from "@ionic/angular";

/**
 * Generated class for the MessagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-messages",
  templateUrl: "messages.html",
})
export class MessagesPage {
  constructor(public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad MessagesPage");
  }
}
