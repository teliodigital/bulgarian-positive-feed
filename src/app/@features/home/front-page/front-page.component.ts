import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'telio-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FrontPageComponent implements OnInit {
  newsletterFormGroup: FormGroup;

  constructor() {
    this.newsletterFormGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  ngOnInit(): void {
  }

  private isEmailValid(email: string): boolean {
    // TODO - use a library for this || use a custom validator
    const regex = new RegExp('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$');
    return regex.test(email);
  }

  registerEmail() {
    if (!this.isEmailValid(this.newsletterFormGroup.value.email)) {
      return;
    }

    // TODO - send email to backend
    console.log(this.newsletterFormGroup.value.email);
  }
}
