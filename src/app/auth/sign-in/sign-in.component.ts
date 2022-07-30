import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  constructor(private logForm: FormBuilder, private _router: Router) {}
  // form validation :
  userSignInForm = this.logForm.group({
    email: [
      null,
      [
        Validators.required,
        Validators.email,
        Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
      ],
    ],
    password: [
      null,
      [
        Validators.required,
        Validators.pattern(
          /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/
        ),
      ],
    ],
  });
  // Login process :
  signIn(data: any) {
    if (data.valid) {
      if (data.form.controls.email.value === 'admin@mail.com') {
        localStorage.setItem(
          'Admin',
          JSON.stringify(data.form.controls.email.value)
        );
        alert('Admin have logged in successfully');
        this._router.navigate(['home']);
      } else {
        alert('Not a valid Admin account');
      }
    }
  }
  ngOnInit(): void {}
}
