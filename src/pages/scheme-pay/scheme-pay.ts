import { Component, OnDestroy, OnInit } from "@angular/core";
import { Platform } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: "page-scheme-pay",
  templateUrl: "scheme-pay.html",
})
export class SchemePayPage implements OnInit {
  private subscription: any;

  constructor(private router: Router, private plt: Platform) {}

  ngOnInit() {
    console.log("SchemePayPage initialized");
  }

  ionViewDidEnter() {
    console.log("ionViewDidEnter SchemePayPage");
    this.subscription = this.plt.backButton.subscribeWithPriority(9999, () => {
      console.log("Back press handler!");
      console.log("Show Exit Alert!");

      // Navigate to the desired previous route
      this.router.navigate(["/previous-route"]); // Replace '/previous-route' with your actual route
    });
  }

  ionViewDidLeave() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  goToPaymentSuccessPage() {
    this.router.navigate(["/payment-success"]);
  }
}
