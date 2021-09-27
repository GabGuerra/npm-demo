import { ModuleWithProviders, NgModule } from '@angular/core';
import { BmgMoneyTrackingConfig } from './bmgmoney-tracking.config';
import { BmgmoneyTrackingService } from './bmgmoney-tracking.service';
import { HttpService } from '../utils/http-service';

@NgModule({
  declarations: [],
  imports: [],
  exports: []
})
export class BmgmoneyTrackingModule {
  static forRoot(config: BmgMoneyTrackingConfig): ModuleWithProviders<BmgmoneyTrackingModule> {
    return {
      ngModule: BmgmoneyTrackingModule,
      providers: [
        HttpService,
        BmgmoneyTrackingService, { provide: 'config', useValue: config }
      ]
    }
  }
}
