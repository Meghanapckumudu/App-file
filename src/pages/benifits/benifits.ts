import { Component, Inject } from "@angular/core";
import { InAppBrowser } from "@awesome-cordova-plugins/in-app-browser";
import { NavController, NavParams, Platform } from "@ionic/angular";
import { DataProvider } from "../../providers/data/data";
import { WebClientProvider } from "../../providers/web-client/web-client";
//import { PreviewAnyFile } from '';
import { Router } from "@angular/router";

@Component({
  selector: "page-benifits",
  templateUrl: "benifits.html",
})
export class BenifitsPage {
  groups: any;
  distinctgroups: any;
  slide1 =
    "https://drive.google.com/viewerng/viewer?embedded=true&url=https://kumuduapps.in:8443/logo/" +
    this.data.storeID +
    "/pdf/";
  constructor(
    private router: Router,
    public navParams: NavParams,
    public data: DataProvider,
    public apiClient: WebClientProvider,
    @Inject(InAppBrowser) public iab: typeof InAppBrowser,
    private platform: Platform
  ) {
    this.groups = [];
    this.apiClient.showLoader();

    this.apiClient.getGroups().then((result) => {
      this.groups = result;
      console.log(this.groups);
      this.removeduplicate(this.groups);
      this.apiClient.dismissLoader();
    });
  }

  removeduplicate(groups: any) {
    //  const distinctArray =  this.groups.filter((n, i) =>  this.groups.indexOf(n) === i);
    //  const distinctArray =  this.groups.filter((n, i) =>  this.groups.indexOf(n) === i);
    const distinctThings = this.groups.filter(
      (thing: any, i: any, arr: any) =>
        arr.findIndex((t: any) => t.scheme_name === thing.scheme_name) === i
    );
    this.distinctgroups = distinctThings;
    console.log(distinctThings);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad BenifitsPage");
  }

  subscription: any;
  ionViewDidLoadEnter() {
    this.subscription = this.platform.backButton.subscribe(() => {
      console.log("Back press handler!");
      console.log("Show Exit Alert!");
      // this.navCtrl.pop();
      this.router.navigate(["/previous-route"]); // Adjust the path based on your routing setup
    });

    console.log("ionViewDidLoad BenifitsPage");
  }

  ionViewDidLeave() {
    this.subscription.unsubscribe();
  }

  // DisplayPdf(scheme_name) {
  //   this.slide1 = this.slide1 + scheme_name + ".pdf;"
  //   console.log(this.slide1)
  // }

  /*
   DisplayPdf(scheme_name) {
     this.slide1 = this.slide1 + scheme_name + ".pdf;"
     console.log(this.slide1)
     this.FileOpener1.open(this.slide1, 'application/pdf')
       .then(() => console.log('File is opened'))
       .catch(e => console.log('Error openening file', e));
   }

   DisplayPdf1(scheme_name){
     const options: DocumentViewerOptions = {
       title: 'My PDF'
     }
     console.log("path :"+this.slide1)
     this.slide1 = this.slide1 + scheme_name + ".pdf;"
     this.document.viewDocument(this.slide1, 'application/pdf',options)
   }
  */
  DisplayPdf_new(scheme_name: any) {
    // let options: InAppBrowserOptions = {
    //   location: 'yes',
    //   hideurlbar: 'yes',
    //   hidenavigationbuttons: 'yes',
    //   clearcache: 'yes',
    //   clearsessioncache: 'yes',
    //   closebuttoncaption: 'Close',
    //   zoom: 'no',
    //   closebuttoncolor: '#888888'
    // };
    let MyPdf = "";
    // let url = this.slide1 + "SWARNASIKHARAM.pdf;" // 'http://www.asterixtechnology.com/privacy-policy.html';
    MyPdf = this.slide1 + scheme_name + ".pdf;";
    //let urlNew = url
    // const browser = this.iab.create(urlNew, "_blank", options);
    const browser = this.iab.create(MyPdf, "_blank", "hidden=no,location=no");
    console.log("On create");
    browser.show();
  }
  DisplayPdf_new1(scheme_name: any) {}
  // DisplayPdf_new(scheme_name) {
  //   let MyPdf = ""
  //   const options: DocumentViewerOptions = {
  //     title: 'My PDF'
  //   }
  //   console.log("path :" + this.slide1)
  //   MyPdf = this.slide1 + scheme_name + ".pdf;"
  //   this.document.viewDocument(MyPdf, 'application/pdf', options)
  // }
}
