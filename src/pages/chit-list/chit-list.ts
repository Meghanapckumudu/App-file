import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { DataProvider } from '../../providers/data/data';
import { WebClientProvider } from '../../providers/web-client/web-client';
import { GroupsdetailsPage } from '../groupsdetails/groupsdetails';
import { JoinChitPage } from '../join-chit/join-chit';
/**
 * Generated class for the ChitListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-chit-list',
  templateUrl: 'chit-list.html',
})
export class ChitListPage {
  groups: any;
  constructor(public navCtrl: NavController,  public data: DataProvider,
    public navParams: NavParams, public apiClient: WebClientProvider) {
    this.groups = [];
    this.apiClient.showLoader();

    this.apiClient.getGroups().then(result => {
      this.groups = result;
      this.apiClient.dismissLoader();
    });
  }

  ionViewWillEnter() {
    this.data.setSearchterm("");
    this.data.membsearchterm = "";
    console.log('ionViewWillEnter ChitListPage');
  }
  subscription: any;

  ionViewDidLoadEnter() {
    this.data.setSearchterm("");
    this.data.membsearchterm = "";
    console.log('ionViewDidLoad ChitListPage');

    // this.subscription = this.plt.backButton.subscribe(() => {
    //   console.log('Back press handler!');
    //   console.log('Show Exit Alert!');
    //   let Mypages: any = ChitListPage;
    //   this.navCtrl.pop(Mypages);
    // });

  }


 ionViewDidLeave() {
  //this.subscription.unsubscribe();
}

  goToJoinGroup(groupCode) {
    this.navCtrl.push(JoinChitPage, {
      groupCode: groupCode
    });
  }

  DisplayGroupDetails(groupCode) {
    this.navCtrl.push(GroupsdetailsPage, {
      groupCode: groupCode
    });
  }

}
