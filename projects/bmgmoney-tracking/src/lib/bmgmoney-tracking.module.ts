import { NgModule } from '@angular/core';
import { HttpService } from '../utils/http-service';
import { PubsubHelper } from '../utils/pubsub-helper';
import { BmgmoneyTrackingService } from './bmgmoney-tracking.service';

@NgModule({
  declarations: [
  ],
  imports: [
  ],
  exports: [

  ],
  providers: [
    HttpService,
    PubsubHelper,
    BmgmoneyTrackingService
  ]
})
export class BmgmoneyTrackingModule { }
