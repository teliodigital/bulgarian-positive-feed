import {Component, OnInit} from '@angular/core';
import {NavigationConstant} from "../../constant-data/navigation.constant";
import {INavigation} from "../models/navigation.model";

@Component({
  selector: 'telio-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  private readonly _navigation: INavigation[] = NavigationConstant

  get navigation() {
    return this._navigation
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
