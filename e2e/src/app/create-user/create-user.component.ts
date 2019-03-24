import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  firstName:string;
  lastName:string;
  email:string;
  city:string;
  country:string;

  constructor() { }

  ngOnInit() {
  }

}
