import { Component, OnInit } from '@angular/core';
import { loginn } from '../loginn';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }
  userModel= new loginn('','' );

  ngOnInit(): void {
  }

}
