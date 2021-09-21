import { NgModule } from '@angular/core';
import { HttpService } from '../utils/http-service';
import { PubsubHelper } from '../utils/pubsub-helper';

@NgModule({
  declarations: [
  ],
  imports: [
  ],
  exports: [

  ],
  providers: [
    HttpService,
    PubsubHelper
  ]
})
export class BmgmoneyTrackingModule { }
