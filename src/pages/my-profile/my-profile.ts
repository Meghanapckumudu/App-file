import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { DataProvider } from "../../providers/data/data";

/**
 * Generated class for the MyProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-my-profile",
  templateUrl: "my-profile.html",
})
export class MyProfilePage {
  startDate: string = "";
  endDate: string = "";

  constructor(public router: Router, public data: DataProvider) {}

  ionViewDidLoad() {
    let dateD = new Date();
    this.startDate = dateD.toISOString();
    dateD.setDate(dateD.getDate() + 1);
    this.endDate = dateD.toISOString();
    console.log("ionViewDidLoad MyProfilePage");
  }

  ionViewDidEnter() {
    this.data.setSearchterm("");
    this.data.membsearchterm = "";
  }

  goToCollectionDetail() {
    this.router.navigate(["/collection-report"], {
      state: { s: this.startDate, e: this.endDate },
    });
  }

  goToCollectionSummaryPage() {
    this.router.navigate(["/collection-summary"], {
      state: { s: this.startDate, e: this.endDate },
    });
  }
}
