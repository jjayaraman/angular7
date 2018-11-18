import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-form2',
  templateUrl: './array-form2.component.html',
  styleUrls: ['./array-form2.component.css']
})
export class ArrayForm2Component implements OnInit {

  constructor(private fb: FormBuilder) { }

  form: FormGroup;

  ngOnInit() {

    this.form = this.fb.group({
      country: ['', Validators.required],
      service: ['', Validators.required],
      services: this.fb.array([])
    });

  }

  get fc() {
    return this.form.controls;
  }

  get fv() {
    return this.form.value;
  }

  get serviceForms() {
    return this.form.get('services') as FormArray;
  }

  add() {
    const service = this.fb.group({
      country: this.form.get('country'),
      service: this.form.get('service')
    });

    this.serviceForms.push(service);
  }


  deleteService(i) {
    this.serviceForms.removeAt(i);
  }
}
