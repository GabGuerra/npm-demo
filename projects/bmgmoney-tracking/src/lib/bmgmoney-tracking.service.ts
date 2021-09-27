import { Inject, Injectable } from '@angular/core';
import { PubsubMessage } from '../models/pubsub-message';
import { HttpService } from '../utils/http-service';
import { BmgMoneyTrackingConfig } from './bmgmoney-tracking.config';

@Injectable()
export class BmgmoneyTrackingService {

  constructor(@Inject('config') private config: BmgMoneyTrackingConfig, private httpService: HttpService) { }

  track(eventType: string, data: any) {
    let message = new PubsubMessage(eventType, data);

    this.httpService.post(this.config.pubsubUrl, this.config.pubsubEndpoint, message).subscribe((result: any) => {
      console.log("Published to pubsub:" + JSON.stringify(result));
    });
  }

}
