import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  model: User = new User();
  users: Array<User> = [];

  constructor() {}

  ngOnInit() {}

  save() {
    this.users.push(this.model);
  }
}
