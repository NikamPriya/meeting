import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  list=[
    {
      number: '1',
      name: 'dashboard',
      icon: 'fa fa-home fa-1'
    },
    {
      number: '1',
      name: 'user',
      icon: 'fa fa-home'
    },
    {
      number: '1',
      name: 'message',
      icon: 'fa fa-home'
    },
    {
      number: '1',
      name: 'about',
      icon: 'fa fa-home'
    },
    {
      number: '1',
      name: 'contact',
      icon: 'fa fa-home'
    },
    {
      number: '1',
      name: 'setting',
      icon: 'fa fa-home'
    },
  ]

  
  isLoggedIn: boolean = false;
  userInfo: any;
  divChange:boolean=true;
  constructor(){
    const userData = localStorage.getItem('loginDetails')
    if(userData == null) {
      this.isLoggedIn =false;
   } else {
    this.isLoggedIn =true;
    this.userInfo =JSON.parse(userData);
   }
  }
  logOff(){
    localStorage.removeItem('loginDetails');
    this.isLoggedIn =false
  }

  toggleSideNav(){
    this.divChange =!this.divChange
  }

  
}
