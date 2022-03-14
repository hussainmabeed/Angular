import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-userscomponent',
  templateUrl: './userscomponent.component.html',
  styleUrls: ['./userscomponent.component.scss']
})
export class UserscomponentComponent implements OnInit {

  constructor(private users:UsersService) { }
  userslist:any;
    ngOnInit(): void {
      this.users.GetAllUsers().subscribe(
        users=>{
          this.userslist=users
        }
      )
    }


}
