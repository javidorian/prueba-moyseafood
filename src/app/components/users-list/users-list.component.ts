import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  filter:string="";
  users:any = [];
  filteredUsers:any = [];
  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
    this.getUsersList();
  }

  getUsersList(){
    this.usersService.getUsersList()
    .subscribe(resp => {
      this.users = resp;
      this.filteredUsers = this.users;
    });
  }

  filterUsers(){
    this.filteredUsers=[];
    
    this.users.forEach((user:any) => {
      if(user.name.toLowerCase().includes(this.filter.toLowerCase()) || user.username.toLowerCase().includes(this.filter.toLowerCase()) || 
      user.email.toLowerCase().includes(this.filter.toLowerCase()) || user.phone.toLowerCase().includes(this.filter.toLowerCase())){
        this.filteredUsers.push(user);
      }
    });
  }

}
