import {Injectable} from "@angular/core";

/**
 * HomeModel is the model what distribute the data in you own name.
 * @author Santiago Vasquez Olarte. <santiago.vasquez@ingeneo.com>
 * @copyright (c) 2018 Snippet Developer.
 */

@Injectable()
export class HomeModel {

    id:string = null;
    userId:string = null;
    title:string = null;
    body:string = null;

    constructor(data) {
        this.id  = data.id;
        this.userId  = data.userId;
        this.title  = data.title;
        this.body  = data.body;
    }

}

