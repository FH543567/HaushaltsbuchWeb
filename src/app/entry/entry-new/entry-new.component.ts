import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-entry-new',
  templateUrl: './entry-new.component.html',
  styleUrls: ['./entry-new.component.scss']
})
export class EntryNewComponent implements OnInit {
  options: FormGroup;
  date: Date;

  constructor(private fb: FormBuilder) {
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
