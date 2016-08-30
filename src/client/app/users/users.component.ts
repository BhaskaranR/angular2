import { Component, OnInit } from '@angular/core';

import { User } from '../shared/services/user/user';
import { UserService } from '../shared/services/user/user.service';

@Component({
    selector: 'users',
    templateUrl: 'app/users/users.component.html',
    styleUrls: ['app/home-root/home-root.component.css', 'app/users/users.component.css']
})

export class UsersComponent implements OnInit {
  users: User[];
  selectedUser: User;

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
   // this._userService.getUsers().then(users => this.users = users);
  }

  onSelect(user: User) {
    if(user == this.selectedUser) {
      //this.selectedHero = undefined;
    } else {
      this.selectedUser = user;
    }
  }

  title = 'Users Component';
}
