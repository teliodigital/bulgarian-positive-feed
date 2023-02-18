import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from '@features/home/home.component';
import {HomeRoutingModule} from "@features/home/home-routing.module";
import {AboutPageComponent} from '@features/home/about-page/about-page.component';
import {ContactPageComponent} from '@features/home/contact-page/contact-page.component';
import {FrontPageComponent} from "@features/home/front-page/front-page.component";
import {ReactiveFormsModule} from "@angular/forms";
import {LoginPageComponent} from '@features/home/login-page/login-page.component';
import {RegisterPageComponent} from './register-page/register-page.component';
import {SharedModule} from "@shared/shared.module";

const MODULES = [
  CommonModule,
  HomeRoutingModule,
  ReactiveFormsModule,
  SharedModule
];

const COMPONENTS = [
  HomeComponent,
  FrontPageComponent,
  AboutPageComponent,
  ContactPageComponent,
  LoginPageComponent,
  RegisterPageComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    ...MODULES
  ]
})
export class HomeModule {
}
