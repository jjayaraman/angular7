import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-form',
  templateUrl: './array-form.component.html',
  styleUrls: ['./array-form.component.css']
})
export class ArrayFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  form: FormGroup;

  ngOnInit() {

    this.form = this.fb.group({
      name: ['', Validators.required],
      service: this.fb.array([])
    });

    console.log('name : ' + this.fc['name'].value);
  }

  get fc() {
    return this.form.controls;
  }

  get fv() {
    return this.form.value;
  }

  get serviceForms() {
    return this.form.get('service') as FormArray;
  }

  add() {
    const service = this.fb.group({
      country: '',
      service: ''
    });

    this.serviceForms.push(service);
  }


  deleteService(i) {
    this.serviceForms.removeAt(i);
  }
}
