import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {
  faEnvelope,
  faLock,
  faUser,
  faPhone,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import { City } from '../models/city-model';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent {
  faEnvelope = faEnvelope;
  faLock = faLock;
  faUser = faUser;
  faPhone = faPhone;
  faCheck = faCheck;

  registrationForm: FormGroup;
  cities: City[] = [
    { name: 'Tbilisi' },
    { name: 'Gori' },
    { name: 'Batumi' },
    { name: 'Kutaisi' },
  ];
  submitted: boolean = false;
  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group(
      {
        name: [
          '',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.pattern('^[a-zA-Z]+$'),
          ],
        ],
        surname: [
          '',
          [Validators.minLength(2), Validators.pattern('^[a-zA-Z]+$')],
        ],
        city: [''],
        phoneNumber: ['', Validators.pattern('^5\\d{2} \\d{2} \\d{2} \\d{2}$')],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        repeatPassword: ['', [Validators.required]],
        termsAndConditions: [false, Validators.requiredTrue],
      },
      { validators: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const repeatPassword = formGroup.get('repeatPassword')?.value;
    if (password !== repeatPassword) {
      formGroup.get('repeatPassword')?.setErrors({ mismatch: true });
    } else {
      formGroup.get('repeatPassword')?.setErrors(null);
    }
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      // Handle form submission logic here
      console.log(this.registrationForm.value);
      this.submitted = true;
      this.registrationForm.reset();
      setTimeout(() => {
        this.submitted = false;
      }, 2000);
    } else {
      // Mark all fields as touched to display validation messages
      this.registrationForm.markAllAsTouched();
      console.log('Marked ');
    }
  }
}
