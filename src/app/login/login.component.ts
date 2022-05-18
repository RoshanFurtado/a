import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isuserlogedin= false
  isadminlogedin = false

  constructor() { }

  ngOnInit(): void {
  }

  userlogin(user:HTMLInputElement){
    if(user.value == 'user')
    this.isuserlogedin = true
    alert('hello user welcome to thinktac')
  }


  
  adminlogedin(admn:HTMLInputElement){
    if(admn.value=='admin')
    this.isadminlogedin=  true
    alert('Welcome Admin')
    
  }




}
