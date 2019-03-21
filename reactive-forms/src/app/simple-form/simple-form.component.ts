import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
  constructor(private fb: FormBuilder) { }

  form: FormGroup;

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      dept: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(5)]
      ]
    });

    this.form.statusChanges.subscribe(data => console.log('status chane : ' + JSON.stringify(data)));
    this.form.valueChanges.subscribe(data => {
      console.log('value changes : ' + JSON.stringify(data));
    });
  }


  get fc() {
    return this.form.controls;
  }
}
