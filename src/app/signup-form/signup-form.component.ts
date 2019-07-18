import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {UsernameValidators} from './username.validators';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace,
      ]),
      password: new FormControl('', Validators.required)
    }),

  });

  constructor() {
  }

  ngOnInit() {
  }

  get userName() {
    return this.form.get('account.username');
  }

  login() {
    this.form.setErrors({
      invalidLogin: true
    });
  }
}
