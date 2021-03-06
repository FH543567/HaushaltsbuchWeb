import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss']
})
/**
 * @author jb260400
 * TODO: Serverkommunikation
 */
export class BookNewComponent implements OnInit {
  form: FormGroup;
  private formSubmitAttempt: boolean;
  isError: boolean;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    if (this.form.valid) {
      // TODO: submit data to create new book with (this.form.value)
      this.isError = true;
    }
    this.formSubmitAttempt = true;
  }
}
