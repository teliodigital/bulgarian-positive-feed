import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from "./home-routing.module";
import {AboutPageComponent} from './about-page/about-page.component';
import {ContactPageComponent} from './contact-page/contact-page.component';
import {FrontPageComponent} from "./front-page/front-page.component";

const COMPONENTS = [
  HomeComponent,
  FrontPageComponent,
  AboutPageComponent,
  ContactPageComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule {
}
