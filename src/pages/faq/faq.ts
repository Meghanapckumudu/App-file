import { Component } from "@angular/core";
import { NavParams, Platform } from "@ionic/angular";
import { DataProvider } from "../../providers/data/data";
import { WebClientProvider } from "../../providers/web-client/web-client";
import { Router } from "@angular/router";

/**
 * Generated class for the FaqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-faq",
  templateUrl: "faq.html",
})
export class FaqPage {
  index = 0;
  clicked: any;
  public hidden: boolean[] = [];
  faq: any;
  isCardCollapse = 0;
  constructor(
    private router: Router,
    public navParams: NavParams,
    public data: DataProvider,
    private plt: Platform,
    public apiClient: WebClientProvider
  ) {
    console.log("Constructor");
    this.faq = [];
    this.apiClient.showLoader();
    this.apiClient.getfaq().then((result) => {
      this.faq = result;
      console.log(" this.faq :" + this.faq);
      this.apiClient.dismissLoader();
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad FaqPage");
  }
  subscription: any;
  ionViewDidEnter() {
    this.subscription = this.plt.backButton.subscribe(() => {
      console.log("Back press handler!");
      console.log("Show Exit Alert!");
      this.router.navigate(["/faq"]); // Adjust the path based on your routing setup
    });
  }

  ionViewDidLeave() {
    this.subscription.unsubscribe();
  }

  toggleSection(i: number) {
    this.hidden[i] = !this.hidden[i];
  }
}
