import { Injectable } from "@angular/core";
import { HttpService } from "./http-service"

const pubsubUrl = "https://southamerica-east1-modern-index-321812.cloudfunctions.net/";
const pubsubEndpoint = "event-digestion"

@Injectable()
export class PubsubHelper{
    constructor(private httpService: HttpService){ }

    publish(message: any){
        this.httpService.post(pubsubUrl, pubsubEndpoint, message).subscribe(result =>{
            console.log("Published to pubsub:" + JSON.stringify(result));
        });
    }
}