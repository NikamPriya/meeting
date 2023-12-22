import { Component } from '@angular/core';
import { LoginService } from 'src/app/core/services/login.service';
import { ToggleService } from 'src/app/core/services/toggle.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
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

  ListView:boolean=false;

  isLoggedIn: boolean = false;
  userInfo?: any;

  constructor(private togglesrv:ToggleService, private loginsrv:LoginService){
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
  toggle(){
   this.togglesrv.toggleSubject.next(true);
}
onView(){
  this.ListView= !this.ListView
}
}
