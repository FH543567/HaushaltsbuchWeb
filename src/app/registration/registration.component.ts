import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

/**
 * @author jb260400
 *
 * TODO: Validitätsprüfung fertigstellen
 */
export class RegistrationComponent implements OnInit {

  form: FormGroup;
  errMessage: String = '';
  private formSubmitAttempt: boolean;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }


  onSubmit() {
    console.log(this.form.valid);
    if (this.form.valid) {
      // TODO: Daten an Server für Registration Übertragen
    } else {
      this.errMessage = 'E-Mail "' + this.form.value.username + '" wird bereits benutzt!';
    }
    this.formSubmitAttempt = true;
  }
}
