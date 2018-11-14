import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-form',
  templateUrl: './array-form.component.html',
  styleUrls: ['./array-form.component.css']
})
export class ArrayFormComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  form: FormGroup;

  ngOnInit() {
    this.form = this.fb.group({
      name: ['jay', Validators.required],
      address: this.fb.array([])
    });

    console.log('name : ' + this.fc['name']);
  }

  get fc() {
    return this.form.controls;
  }

  get fv() {
    return this.form.value;
  }

  get homeAddress() {
    return this.fc.controls['address'] as FormArray;
  }

  add() {
    const address = this.fb.group({
      line1: '',
      city: '',
      country: ''
    });

    this.homeAddress.push(address);
  }
}
