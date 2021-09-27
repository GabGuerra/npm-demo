import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CloudFunctionMessage } from '../models/cloud-function-message';
import { HttpService } from '../utils/http-service';
import { BmgMoneyTrackingConfig } from './bmgmoney-tracking.config';

@Injectable()
export class BmgmoneyTrackingService {

  constructor(@Inject('config') private config: BmgMoneyTrackingConfig, private httpService: HttpService) { }

  track(eventType: string, data: any, customerId: Number): Observable<any> {
    let message = new CloudFunctionMessage(eventType, data, customerId);

    return this.httpService.post(this.config.cloudFunctionUrl, this.config.cloudFunctionName, message);
  }

}
