import { Component } from "@angular/core";
import { NavParams, Platform } from "@ionic/angular";
import { DataProvider } from "../../providers/data/data";
import { Router } from "@angular/router";

@Component({
  templateUrl: "howtouse.html",
})
export class HowtousePage {
  constructor(
    private router: Router,
    private plt: Platform,
    public navParams: NavParams,
    public data: DataProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad");
  }

  subscription: any;
  ionViewDidEnter() {
    this.subscription = this.plt.backButton.subscribe(() => {
      console.log("Back press handler!");
      console.log("Show Exit Alert!");
      // let Mypages: any = HowtousePage;
      this.router.navigate(["/howtouse"]); // Replace with your route path
    });
  }

  ionViewDidLeave() {
    this.subscription.unsubscribe();
  }
}
