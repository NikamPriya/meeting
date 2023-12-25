import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginObj:any={
    userName: '',
    userPassword: ''
  }
  constructor(private loginSrv: LoginService, private router: Router){}

  ngOnInit(): void {
    
  }
  login(){
    debugger;
    this.loginSrv.onLogin(this.loginObj).subscribe((res:any)=>{
      if(res.result){
        this.router.navigateByUrl('home')
        localStorage.setItem('loginDetails', JSON.stringify(res.data.userName))
        this.router.navigateByUrl('/home')
        localStorage.setItem('loginDetails', JSON.stringify(res))
      }else{
        alert(res.message)
      }
    })
  }
}
