import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.css']
})
export class NestedFormComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  form: FormGroup;


  ngOnInit() {

    const address = this.fb.group({
      'line1': '',
      'city': '',
      'country': ''
    });

    this.form = this.fb.group({ name: '', address: address });
  }

  get f() {
    return this.form.controls;
  }
}
