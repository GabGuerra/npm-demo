import { Injectable } from '@angular/core';
import { PubsubMessage } from '../models/pubsub-message';
import { PubsubHelper } from '../utils/pubsub-helper';

@Injectable()
export class BmgmoneyTrackingService {

  constructor(private pubsubHelper: PubsubHelper) {
  }

  track(eventType: string, data: any){
    let message = new PubsubMessage(eventType, data);
    this.pubsubHelper.publish(message);
  }

}
