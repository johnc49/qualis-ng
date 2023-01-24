import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styleUrls: ['./account-setting.component.css'],
})
export class AccountSettingComponent implements OnInit {
  firstName!: FormControl;
  lastName!: FormControl;

  formGroup!: FormGroup;

  ngOnInit(): void {
    this.firstName = new FormControl('Kangwa', [
      Validators.required,
      Validators.minLength(2),
    ]);
    this.lastName = new FormControl('Kangwa', [
      Validators.required,
      Validators.minLength(2),
    ]);

    this.formGroup = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
    });
  }

  onFormSubmit(): void {
    console.log(this.formGroup?.valid);
    console.log(this.formGroup?.value);
  }
}
