import { Component } from "@angular/core";
import { NavController, NavParams } from "@ionic/angular";
import { WebClientProvider } from "../../providers/web-client/web-client";
import { DataProvider } from "../../providers/data/data";

/**
 * Generated class for the UserLedgerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-user-ledger",
  template: "user-ledger.html",
})
export class UserLedgerPage {
  constructor(
    public navParams: NavParams,
    public apiClient: WebClientProvider,
    public data: DataProvider
  ) {}
  ledger: any = [];

  ionViewDidLoad() {
    console.log("ionViewDidLoad UserLedgerPage");
  }
  ionViewDidEnter() {
    console.log("ionViewDidLoad UserLedgerPage");
    this.apiClient
      .userLedger(this.data.getUser()["mobile"], "")
      .then((result) => {
        console.log(result);
        this.ledger = result;
      });
  }
}
