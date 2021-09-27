import { Inject, Injectable } from '@angular/core';
import { CloudFunctionMessage } from '../models/cloud-function-message';
import { HttpService } from '../utils/http-service';
import { BmgMoneyTrackingConfig } from './bmgmoney-tracking.config';

@Injectable()
export class BmgmoneyTrackingService {

  constructor(@Inject('config') private config: BmgMoneyTrackingConfig, private httpService: HttpService) { }

  track(eventType: string, data: any, customerId: Number) {
    let message = new CloudFunctionMessage(eventType, data, customerId);

    this.httpService.post(this.config.cloudFunctionUrl, this.config.cloudFunctionName, message).subscribe((result: any) => {
      console.log("Published to cloudfunction:" + JSON.stringify(result));
    });
  }

}
