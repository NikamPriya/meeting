import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/core/models/classes/User';
import { Iuser } from 'src/app/core/models/interfaces/Iuser';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  
  userList:Iuser[]=[]
  userObj:user=new user

  constructor(private userSrv:UserService){}
  ngOnInit(): void {
    this.onGetAllUser();
  }

  onGetAllUser(){
    this.userSrv.getAllusers().subscribe((res:any)=>{
      this.userList=res.data;
    })
  }

  onGetAllUsersByClientId(){
    this.userSrv.getAllUsersByClientId().subscribe((res:any)=>{
      this.userList = res.data;
    })
  }

  saveAllUser(){
    this.userSrv.addUser(this.userObj).subscribe((res:any)=>{
      if(res.result){
       alert("User Added Successfully");
       this.onGetAllUser();
      }else{
       alert(res.message)
      }
    },
    error => {
      alert(JSON.stringify(error.error))
    })
  }

onUpsateUser(){
  this.userSrv.updateUser(this.userObj).subscribe((res:any)=>{
    if(res.result){
     alert("User Updated Successfully");
      this.onGetAllUser(); 
    }else{
      alert(res.message);
    }
  },
  error=>{
    alert(JSON.stringify(error.error))
  })
}

ondeleteUser(userId:number){
  const isConfirm = confirm("Are you sure to delete this user");
  if(isConfirm){
   this.userSrv.deleteUsersById(userId).subscribe((res:any)=>{
    if(res.result){
   alert("User Delated Successfully");
   this.onGetAllUser(); 
    }else{
     alert(res.message)
    }
   },
   error=>{
    alert(JSON.stringify(error.error));
   })
  }
}

}


