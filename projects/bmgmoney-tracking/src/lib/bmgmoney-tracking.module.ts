import { ModuleWithProviders, NgModule } from '@angular/core';
import { BmgMoneyTrackingConfig } from './bmgmoney-tracking.config';
import { BmgmoneyTrackingService } from './bmgmoney-tracking.service';
import { HttpService } from '../utils/http-service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [CommonModule, HttpClient ],
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
