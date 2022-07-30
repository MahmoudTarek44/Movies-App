import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  constructor(private regForm: FormBuilder) {}

  RegisterForm = this.regForm.group({
    name: [null, [Validators.required, Validators.maxLength(20)]],
    email: [
      null,
      [
        Validators.required,
        Validators.email,
        Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
      ],
    ],
    userName: [null, [Validators.required, Validators.pattern(/^[^\s]+$/)]],
    password: [
      null,
      [
        Validators.required,
        Validators.pattern(
          /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/
        ),
      ],
    ],
    confirmPass: [
      null,
      [
        Validators.required,
        Validators.pattern(
          /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/
        ),
      ],
    ],
    address: this.regForm.array([]),
  });

  submitForm() {
    console.log(this.RegisterForm.value);
  }

  ngOnInit(): void {}
}
