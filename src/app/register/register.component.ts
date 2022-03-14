import { Component, OnInit } from '@angular/core';
import { Register } from '../register';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  registerUser=new Register('','','','','')
  submitData(){

  }

  ngOnInit(): void {
  }

}
