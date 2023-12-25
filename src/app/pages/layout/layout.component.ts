import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';
import { ToggleService } from 'src/app/core/services/toggle.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  animations: [
    trigger('slidein', [
      transition(':enter', [
        // when ngif has true
        style({ transform: 'translateX(-100%)' }),
        animate(250, style({ transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        // when ngIf has false
        animate(250, style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
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
  expanded: boolean=true;

  ListView:boolean=false;

  isLoggedIn: boolean = false;
  userInfo?: any;

  constructor(private togglesrv:ToggleService, private loginsrv:LoginService, private router:Router){
    const userData = localStorage.getItem('loginDetails')
    if(userData == null) {
      this.isLoggedIn =false;
   } else {
    this.isLoggedIn =true;
    this.userInfo =JSON.parse(userData);
   }
  }

  logOff(){
    this.router.navigateByUrl("");
  }
  toggle(){
   this.togglesrv.toggleSubject.next(true);
}
onView(){
  this.ListView= !this.ListView
}
}
