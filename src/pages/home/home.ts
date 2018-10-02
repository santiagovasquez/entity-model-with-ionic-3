import { Component} from "@angular/core";
import { NavController} from "ionic-angular";
import { HomeHelper, HomeModelHelperDelegate } from "../../helpers/HomeHelper";

/**
 * HomePage is the controller what call the date and paint in the view.
 * @author Santiago Vasquez Olarte. <santiago.vasquez@ingeneo.com>
 * @copyright (c) 2018 Snippet Developer.
 */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HomeHelper]
})

export class HomePage implements HomeModelHelperDelegate {

  static postsDataArray: Array<any> = new Array<any>();

  constructor(public navCtrl: NavController, public homeHelper: HomeHelper) {
    this.homeHelper.homeDelegate = this;
    this.homeHelper.getHomeData();
  }

  dataSourceUpdated(data) {
    HomePage.postsDataArray = data;
  }

  get staticPostsDataArray() {
    return HomePage.postsDataArray;
  }

}
