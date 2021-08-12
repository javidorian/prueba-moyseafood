import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userId = 0;
  user:any;
  showMsg: boolean = false;

  constructor(private router:Router, private activatedRoute:ActivatedRoute, private usersService:UsersService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{
      this.userId = params['id'];
      console.log(params['id']);
    })


    this.getUser();
  }

   getUser(){
    console.log(this.userId);
    this.usersService.getUser(this.userId)
    .subscribe(resp=> {
      console.log(resp);
      this.user = resp;
    })
  } 

  updateUser(){
    this.usersService.updateUser(this.userId, this.user.phone, this.user.email)
    .subscribe(resp=>{
      console.log(resp);
      this.showMsg=true;
      setTimeout(() => {
        this.showMsg=false;
        this.router.navigate(['/']);
      }, 1500);
    })
  }

}
