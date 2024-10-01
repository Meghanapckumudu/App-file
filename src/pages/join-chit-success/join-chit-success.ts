import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Platform } from "@ionic/angular";
import { SchemeDetailPage } from "../scheme-detail/scheme-detail";

/**
 * Generated class for the JoinChitSuccessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-join-chit-success",
  templateUrl: "join-chit-success.html",
})
export class JoinChitSuccessPage {
  memberCode: any;
  private subscription: any;

  constructor(private router: Router, private plt: Platform) {
    // Retrieve the memberCode from route parameters
    const navigation = this.router.getCurrentNavigation();
    this.memberCode = navigation?.extras?.state?.memberCode;
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad JoinChitSuccessPage");
  }

  ionViewDidEnter() {
    this.subscription = this.plt.backButton.subscribe(() => {
      console.log("Back press handler!");
      // Navigate back to the previous page or perform an exit action here
      this.router.navigate(["/previous-page"]); // Replace with your previous page route
    });
  }

  ionViewDidLeave() {
    this.subscription.unsubscribe();
  }

  goToSchemeDetailPage() {
    this.router.navigate(["/scheme-detail"], {
      state: { memberCode: this.memberCode },
    });
  }
}
