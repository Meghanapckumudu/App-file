import { Component } from "@angular/core";
import { NavParams, Platform } from "@ionic/angular";
import { DataProvider } from "../../providers/data/data";
import { WebClientProvider } from "../../providers/web-client/web-client";
import { YoutubeVideoPlayer } from "@ionic-native/youtube-video-player";
import { Router } from "@angular/router";

/**
 * Generated class for the HowtouseappPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-howtouseapp",
  templateUrl: "howtouseapp.html",
})
export class HowtouseappPage {
  constructor(
    private router: Router,
    public navParams: NavParams,
    private plt: Platform,
    public apiClient: WebClientProvider,
    public youtube: YoutubeVideoPlayer,
    public data: DataProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad HowtouseappPage");
  }

  subscription: any;
  ionViewDidEnter() {
    this.subscription = this.plt.backButton.subscribe(() => {
      console.log("Back press handler!");
      console.log("Show Exit Alert!");
      this.router.navigate(["howtouseapp"]); // Replace 'howtouseapp' with the actual route path
    });
  }
  ionViewDidLeave() {
    this.subscription.unsubscribe();
  }

  watch() {
    this.youtube.openVideo("TcovfE8IsHs");
  }
  watchyoutubeHelp() {
    console.log("Inside Function");
    this.apiClient.get_getytubehelppath().then((result) => {
      let urlNew = "";
      console.log("Data:" + result["data"]);
      if (result["data"] != "" || result["data"] != null) {
        urlNew = result["data"] + "";
        if (urlNew.length > 0) {
          this.youtube.openVideo(urlNew);
        }
      }
    });
  }
}
