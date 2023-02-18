import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from "../@shared/shared.module";
import { LayoutComponent } from './layout/layout.component';
import {RouterLinkWithHref, RouterOutlet} from "@angular/router";
import { NavigationComponent } from './navigation/navigation.component';

const Modules = [
  CommonModule,
  SharedModule
];

@NgModule({
  declarations: [
    LayoutComponent,
    NavigationComponent
  ],
  imports: [
    ...Modules,
    RouterOutlet,
    RouterLinkWithHref
  ]
})
export class coreModule {
  constructor(@Optional() @SkipSelf() parentModule: coreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only.');
    }
  }

  static forRoot() {
    return {
      ngModule: coreModule,
      providers: []
    };
  }
}
