import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {NavigationConstant} from "@constants/navigation.constant";
import {INavigation} from "../models/navigation.model";
import {Observable} from "rxjs";
import {AuthService} from "@core/services";

@Component({
  selector: 'telio-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnInit {
  private readonly _navigation: INavigation[] = NavigationConstant
  private readonly _isLoggedIn: Observable<boolean> = this.authService.isLoggedIn;

  constructor(
    private authService: AuthService,
  ) {
  }

  get isLoggedIn() {
    return this._isLoggedIn
  }

  get navigation() {
    return this._navigation
  }

  ngOnInit(): void {
  }

}
