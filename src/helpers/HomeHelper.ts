import { HomeModel } from ".././models/HomeModel";
import { Injectable} from '@angular/core';
import { Observable} from "rxjs";
import 'rxjs/add/operator/map';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

/**
 * HomeModelHelperDelegate helpers fill the variable 'homeArray' with the dates of service.
 * @author Santiago Vasquez Olarte. <santiago.vasquez@ingeneo.com>
 * @copyright (c) 2018 Snippet Developer.
 */

export interface HomeModelHelperDelegate {
    dataSourceUpdated(any);
}

@Injectable()
export class HomeHelper {

    private url = "https://jsonplaceholder.typicode.com/posts";
    homeArray : Array<HomeModel> = new Array<HomeModel>();
    homeDelegate : HomeModelHelperDelegate;

    constructor(public _http: Http) {

    }

    getHomeData() {
        this.getHomeDataFromAPI().subscribe(data => {
            console.log("Data ", data);
            for (let index in data) {
                this.homeArray.push(new HomeModel(data[index]));
            }
            this.homeDelegate.dataSourceUpdated(this.homeArray);
            console.log("Data Array", this.homeArray);
        }, error => {
            console.log("Error ", error);
        });
    }

    getHomeDataFromAPI():Observable<any> {
        return this._http.get(this.url)
            .map(res => res.json())
            .catch(err => {
                return Observable.throw(err || "Server error");
            })
    }

}