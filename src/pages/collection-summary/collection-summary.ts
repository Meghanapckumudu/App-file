import { Component } from "@angular/core";
import { NavParams, Platform } from "@ionic/angular";
import { DataProvider } from "../../providers/data/data";
import { WebClientProvider } from "../../providers/web-client/web-client";
import { Router } from "@angular/router";

/**
 * Generated class for the CollectionSummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-collection-summary",
  templateUrl: "collection-summary.html",
})
export class CollectionSummaryPage {
  startDate: any;
  endDate: any;
  summary: any = [];
  total: any = 0;
  constructor(
    private router: Router,
    public navParams: NavParams,
    private plt: Platform,
    public apiClient: WebClientProvider,
    public data: DataProvider
  ) {}

  ionViewDidLoad() {
    this.startDate = this.navParams.get("s");
    this.endDate = this.navParams.get("e");
    console.log("ionViewDidLoad CollectionSummaryPage");
    this.apiClient
      .getMyLedgerSummary({
        startDate: this.startDate,
        endDate: this.endDate,
        agentID: this.data.agentID + "",
        storeID: this.data.storeID,
      })
      .then((result) => {
        this.summary = result;
        this.calcSum(result);
      });
  }

  subscription: any;
  ionViewDidEnter() {
    this.subscription = this.plt.backButton.subscribe(() => {
      console.log("Back press handler!");
      console.log("Show Exit Alert!");
      // let Mypages: any = CollectionSummaryPage;
      // this.navCtrl.pop(Mypages);
      this.router.navigate(["/collection-summary"]);
    });
  }

  ionViewDidLeave() {
    this.subscription.unsubscribe();
  }

  calcSum(result) {
    let tot = 0;
    for (let each of result) {
      tot = tot + each.a;
    }
    this.total = tot;
  }
}
