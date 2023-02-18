import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {FrontPageComponent} from "./front-page/front-page.component";
import {AboutPageComponent} from "./about-page/about-page.component";
import {ContactPageComponent} from "./contact-page/contact-page.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: FrontPageComponent
      },
      {
        path: 'about',
        component: AboutPageComponent
      },
      {
        path: 'contact',
        component: ContactPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
