import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { DataProvider } from '../../providers/data/data';
import { ChitListPage } from '../chit-list/chit-list';
import { geolocPage } from '../geoloc/geoloc';
import { JmshomePage } from '../jmshome/jmshome';
import { LoginPage } from '../login/login';
import { membersendsmsPage } from '../member-sendsms/member-sendsms';
import { memberupdatePage } from '../member-update/member-update';
import { MyProfilePage } from '../my-profile/my-profile';
import { PushnotePage } from '../pushnote/pushnote';
import { SearchPage } from '../search/search';
import { SettingsPage } from '../settings/settings';
import { TabsPage } from '../tabs/tabs';
import { TesteasypayPage } from '../testeasypay/testeasypay';
import { TestpayPage } from '../testpay/testpay';
//import {InAppBrowser} from '@ionic-native/in-app-browser'
//import {Http, RequestOptions, ResponseContentType, URLSearchParams} from '@angular/http';



//import { Paytm } from '@ionic-native/paytm';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}


@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  // Basic root for our content view
  rootPage = TabsPage;

  // Reference to the app's root nav

  pages: PageInterface[] = [
    { title: 'Home', pageName: 'TabsPage', tabComponent: 'CollectionReportPage', index: 0, icon: 'home' },
    { title: 'Search', pageName: 'TabsPage', tabComponent: 'SearchPage', index: 1, icon: 'contacts' },
    { title: 'Reports', pageName: 'TabsPage', tabComponent: 'SearchPage', index: 2, icon: 'pie' },
    { title: 'Messages', pageName: 'TabsPage', tabComponent: 'SearchPage', index: 3, icon: 'mail' }

  ];

  subscription: any;
  menuStoreId: any;
  constructor(public navCtrl: NavController, public storage: Storage,
    public data: DataProvider, public http: HttpClient,
    public plt: Platform, private _location: Location, public alertController: AlertController, public router:Router) {
    //public paytm: Paytm,
    //, public iab: InAppBrowser
    // this.subscription =   this.plt.backButton.subscribe(() => {
    //   console.log('Back press handler!');
    //   console.log(this._location.path);
    //   let Mypages: any = MenuPage;
    //   this.navCtrl.pop(Mypages);

    // });
    // this.plt.backButton.subscribe(10, (processNextHandler) => {
    //   console.log('Back press handler!');
    //   console.log(this._location.path)
    //   if (this._location.isCurrentPathEqualTo('/home')) {

    //     // Show Exit Alert!
    //     console.log('Show Exit Alert!');
    //     this.showExitConfirm();
    //     processNextHandler();
    //   } else {

    //     // Navigate to back page
    //     console.log('Navigate to back page');
    //     this._location.back();

    //   }

    // });
    this.menuStoreId = this.data.storeID

  }
  ionViewDidLeave() {
    //this.subscription.unsubscribe();
  }


  openPage(page: PageInterface) {
    let params = {};

    // The index is equal to the order of our tabs inside tabs.ts
    if (page.index) {
      console.log("tabIndex: page.index" + page.index)
      params = { tabIndex: page.index };
    }
    console.log("page.pageName")
    // The active child nav is our Tabs Navigation
    this.router.navigate([page.pageName], { queryParams: params });
  }

  logoutClass() {
    //console.log("logoutClass-out " )
    return '';
  }
  logoutIconClass() {
    //console.log("log-out " )
    return 'log-out';
  }
  goToLoginPage() {
    this.storage.clear();
    this.router.navigate(['/login']);
  }
  goToSettingPage() {
    this.router.navigate(['/settings']);
  }
  goToHome() {
    this.router.navigate(['/tabs']);
  }
  goToJoinChit() {
    this.router.navigate(['/login']);
  }
  goToMyChits() {
    this.router.navigate(['/login']);
  }
  goToReport() {
    this.router.navigate(['/login']);
  }
  payResponse = "";

  gotoPayTest() {
    this.router.navigate(['/login']);
  }

  goToGeoLocation() {
    this.router.navigate(['/login']);
  }

  gotoPushNote() {
    this.router.navigate(['/login']);
  }


  gototsteasypay() {
    this.router.navigate(['/login']);
  }

  pay_check() {
    console.log("pay_check called")
    var options = {
      description: 'Scheme Payment',
      image: 'https://kumuduapps.in:8443/logo/21//favicon.png',//'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_test_yMJKzjz8mTggSd',
      order_id: 'order_F1yhyhROyAn9UR',
      amount: '5000',
      name: 'city Gold',
      prefill: {
        email: 'aparna.rajkumar+053@razorpay.com',
        contact: '8879524924',
        name: 'Pranav Gupta'
      },
      theme: {
        color: '#F37254'
      },
      modal: {
        ondismiss: function () {
          alert('dismissed')
        }
      }
    };
    let endPoint = "https://api.razorpay.com/v1/checkout/embedded";

    return new Promise((resolve, reject) => {
      this.http
        .post(endPoint, options)
        .subscribe(
          res => {
            try {
              let data = res;
              console.log("data :" + res)
              resolve(data);
            } catch (e) {
              console.log(e);
              console.log("catch :" + res)
            }
          },
          err => {
            resolve([]);
            reject(err);
            console.log("error :" + err)
          }
        );
    });

  }

  goToUpdateMember() {
    this.router.navigate(['/login']);
  }

  goToSendSmsToMember() {
    this.router.navigate(['/login']);
  }

  showExitConfirm() {
    let alert = this.alertController.create({
      message: 'Do you want to close the app?',
      //backdropDismiss: false,
      buttons: [{
        text: 'Stay',
        role: 'cancel',
        handler: () => {
          console.log('Application exit prevented!');
        }
      }, {
        text: 'Exit',
        handler: () => {
          //this.plt.
        }
      }]
    });
    alert.then(alert => alert.present());
  }

  /*
  pay_paytm() {
    this.paytm.startPayment("ORDER00011", "CUST00011", "test@gmail.com", "9999999999", "1.00", "staging")
      .then((res: any) => {
        console.log(res);
        this.payResponse = JSON.stringify(res);
      })
      .catch((error: any) => {
        console.error(error);
        this.payResponse = JSON.stringify(error);
      });
  }?


  orderId(){
    var url = "https://api.razorpay.com/v1/orders";
    var data = {
            "amount":5000,
            "currency":"INR",
            "payment_capture":1
    }
    let head = {headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization':'rzp_test_yMJKzjz8mTggSd:QUnwF3gijdJTCIRVu55gVbA7',// 'Basic cnpwX3Rlc3RfeU1KS3pqejhtVGdnU2Q6UVVud0YzZ2lqZEpUQ0lSVnU1NWdWYkE3',//
      'Access-Control-Allow-Origin': 'localhost:8100',
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Headers': 'Content-Type'
    }};

    this.http.post(url, data, head).subscribe(
      res => {
        console.log('res: ', res);

      },
      err => {
        console.log('ERROR: ', err);

      }
    );


}

public orderId_servercall() {
  let endPoint =
      this.data.url + "schemes/GetRazorOrder_ID/";
      return new Promise((resolve, reject) => {
        this.http
          .get(endPoint)
          .subscribe(
            res => {
              try {
                let data = res;
                resolve(data);
                console.log(data)
              } catch (e) {
                console.log(e);
              }
            },
            err => {
              resolve([]);
              reject(err);
            }
          );
      });
}

public checkout(){
  /*
  var pageContent = '<html><head></head><body><form id="loginForm" action="YourPostURL" method="post">' +
'<input type="hidden" name="key1" value="' + YourValue1 + '">' +
'<input type="hidden" name="key" value="' + YourValue2 + '">' +
'</form> <script type="text/javascript">document.getElementById("loginForm").submit();</script></body></html>';

var pageContent1 = '<form method=”POST” action=”https://api.razorpay.com/v1/checkout/embedded”>'
'<input type=”hidden” name=”key_id” value=”rzp_test_yMJKzjz8mTggSd”>'
'<input type=”hidden” name=”order_id” value=”order_EAEQMMvdw8tktl”>'
'<input type=”hidden” name=”amount” value=”50000”>'
'<input type=”hidden” name=”name” value=”HDFC VAS”>'
'<input type=”hidden” name=”description” value=”CityGold”>'
'<input type=”hidden” name=”prefill[email]”'
'value=”gaurav.kumar@example.com”>'
'<input type=”hidden” name=”prefill[contact]” value=”9999999999”>'
'<input type=”hidden” name=”notes[transaction_id]” value=”transaction_1234”>'
'<input type=”hidden” name=”callback_url” value=”http://jms.asterixtechnology.com/api/”>'
'<button>Submit</button>'
'</form>'

var pageContentUrl = 'data:text/html;base64,' + btoa(pageContent1);

var browserRef =this.iab.create(
    pageContentUrl ,
    "_blank",
    "hidden=no,location=no,clearsessioncache=yes,clearcache=yes"
);

}
*/
  tt() {
    //let params: any = [];
    let Myurl = "https://kumuduapps.in:8443/paysuccess.jsp?razorpay_order_id=order_FEK45J4ACE4N0I&razorpay_payment_id=pay_FEK4AGTlYO3Fkb&razorpay_signature=53fb38debe3340c333e1372d7ae069b6f8eaf40363b497f4375beb7338c5c740"
    var regex = /[?&]([^=#]+)=([^&#]*)/g,
      url = Myurl,
      params: any = [],
      match;
    while (match = regex.exec(url)) {
      params[match[1]] = match[2];
    }
    console.log(params);
    console.log(params.razorpay_order_id);
    console.log(params.razorpay_signature);
    console.log(params.razorpay_payment_id);

  };

}
