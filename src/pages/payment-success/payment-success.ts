import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Platform } from "@ionic/angular";
import { PrinterListPage } from "../printer-list/printer-list";
import { DataProvider } from "../../providers/data/data";
import { SearchPage } from "../search/search";
import { MenuPage } from "../menu/menu";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "page-payment-success",
  templateUrl: "payment-success.html",
})
export class PaymentSuccessPage {
  @ViewChild("navbar") navBar: any; // Adjust type if you know the specific type
  voucherNo: any = "";

  constructor(
    private router: Router,
    public platform: Platform,
    public modalCtrl: ModalController,
    public data: DataProvider
  ) {
    // Using Router instead of NavParams
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.voucherNo = navigation.extras.state["voucherNo"]; // Access voucherNo from state
    }

    // Register back button action
    this.platform.backButton.subscribeWithPriority(2, () =>
      this.backButtonClick()
    );
  }

  backButtonClick() {
    console.log("// doing something");
    this.router.navigate(["/search"]); // Navigate to SearchPage
  }

  ionViewDidEnter() {
    // If you are using a custom back button click handler in the navbar, set it here
    if (this.navBar) {
      this.navBar.backButtonClick = this.backButtonClick.bind(this);
    }
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad PaymentSuccessPage");
    if (this.data.userLoginType == "agent") {
      this.print();
    }
  }

  backToHome() {
    this.router.navigate(["/menu"]); // Navigate to MenuPage
  }

  async print() {
    const profileModal = await this.modalCtrl.create({
      component: PrinterListPage,
    });
    await profileModal.present();
  }
}
