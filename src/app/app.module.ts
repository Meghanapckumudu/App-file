import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Geolocation } from '@ionic-native/geolocation';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from '@ionic/angular';
//import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder';

// import { razorpay } from 'razorpay';
//import { Paytm } from '@ionic-native/paytm';
import { HttpClientModule } from '@angular/common/http';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { Device } from '@ionic-native/device';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';
import { BenifitsPage } from '../pages/benifits/benifits';
import { ChitListPage } from '../pages/chit-list/chit-list';
import { CollectionReportPage } from '../pages/collection-report/collection-report';
import { CollectionSummaryPage } from '../pages/collection-summary/collection-summary';
import { ContactPage } from '../pages/contact/contact';
import { CustomerProfilePage } from '../pages/customer-profile/customer-profile';
import { CustomerSearchPage } from '../pages/customer-search/customer-search';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { geolocPage } from '../pages/geoloc/geoloc';
import { GroupsdetailsPage } from '../pages/groupsdetails/groupsdetails';
import { JmshomePage } from '../pages/jmshome/jmshome';
import { JoinChitSuccessPage } from '../pages/join-chit-success/join-chit-success';
import { JoinChitPage } from '../pages/join-chit/join-chit';
import { LoginPage } from '../pages/login/login';
import { membersendsmsPage } from '../pages/member-sendsms/member-sendsms';
import { memberupdatePage } from '../pages/member-update/member-update';
import { MenuPage } from '../pages/menu/menu';
import { MessagesPage } from '../pages/messages/messages';
import { MyProfilePage } from '../pages/my-profile/my-profile';
import { OffersPage } from '../pages/offers/offers';
import { PaymentModePage } from '../pages/payment-mode/payment-mode';
import { PaymentSuccessPage } from '../pages/payment-success/payment-success';
import { PrinterListPage } from '../pages/printer-list/printer-list';
import { PrivacyPage } from '../pages/privacy/privacy';
import { PushnotePage } from '../pages/pushnote/pushnote';
import { ReturnpolicyPage } from '../pages/returnpolicy/returnpolicy';
import { SchemeDetailPage } from '../pages/scheme-detail/scheme-detail';
import { SchemePayPage } from '../pages/scheme-pay/scheme-pay';
import { SearchPage } from '../pages/search/search';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';
import { TermsPage } from '../pages/terms/terms';
import { TestpayPage } from '../pages/testpay/testpay';
import { UserLedgerPage } from '../pages/user-ledger/user-ledger';
import { DataProvider } from '../providers/data/data';
import { WebClientProvider } from '../providers/web-client/web-client';
import { MyApp } from './app.component';
//import { HowtousePage } from '../pages/howtouse/howtouse';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { FaqPage } from '../pages/faq/faq';
import { HowtouseappPage } from '../pages/howtouseapp/howtouseapp';
import { TesteasypayPage } from '../pages/testeasypay/testeasypay';
//import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
// import { FileOpener } from '@ionic-native/file-opener/ngx';
 import { DocumentViewer } from '@ionic-native/document-viewer';
//import { SmsRetriever } from '@ionic-native/sms-retriever/ngx';
//import { GeocoderProvider } from '../providers/geocoder/geocoder';
//import {FCM} from '@ionic-native/fcm';


@NgModule({
  declarations: [
    MyApp, LoginPage, MenuPage, TabsPage, CollectionReportPage, SearchPage, CustomerProfilePage, MyProfilePage, SchemeDetailPage, SchemePayPage, PaymentSuccessPage, SettingsPage, DashboardPage,
    CollectionSummaryPage, MessagesPage, PaymentModePage, JoinChitPage, ChitListPage,
    JoinChitSuccessPage, PrinterListPage, UserLedgerPage, CustomerSearchPage, ReturnpolicyPage,
    TermsPage, PrivacyPage, ContactPage,memberupdatePage, TestpayPage, geolocPage,
    membersendsmsPage,PushnotePage,GroupsdetailsPage,JmshomePage,OffersPage, BenifitsPage, FaqPage, HowtouseappPage, TesteasypayPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      scrollAssist: false,
      autoFocusAssist: false
    }), HttpClientModule, IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp, LoginPage, MenuPage, TabsPage, CollectionReportPage, SearchPage, CustomerProfilePage, MyProfilePage, SchemeDetailPage, SchemePayPage, PaymentSuccessPage, SettingsPage, DashboardPage, CollectionSummaryPage
    , PaymentModePage, JoinChitPage, ChitListPage, JoinChitSuccessPage, UserLedgerPage, CustomerSearchPage,
    MessagesPage, PrinterListPage, ReturnpolicyPage, TermsPage,
    PrivacyPage, ContactPage, memberupdatePage, TestpayPage, geolocPage, JmshomePage,
    membersendsmsPage,PushnotePage, GroupsdetailsPage, OffersPage, BenifitsPage, HowtouseappPage, FaqPage, TesteasypayPage],
  providers: [
    StatusBar,
    SplashScreen,
    WebClientProvider,
    BluetoothSerial,
    DataProvider, InAppBrowser, Geolocation, NativeGeocoder,FCM, YoutubeVideoPlayer,  DocumentViewer,
    UniqueDeviceID,Device,//SmsRetriever,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    //GeocoderProvider,// Paytm
  ]
})
export class AppModule { }
