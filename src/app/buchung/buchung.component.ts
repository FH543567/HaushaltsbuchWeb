import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-buchung',
  templateUrl: './buchung.component.html',
  styleUrls: ['./buchung.component.scss']
})
export class BuchungComponent implements OnInit {
  options: FormGroup;
  date: Date;
  constructor(
    private fb: FormBuilder
  ) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
      date: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.options.valid) {
    }
  }

}
