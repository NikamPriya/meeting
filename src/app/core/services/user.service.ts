import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIConstant } from '../constant/APIconstant';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }


  getAllusers(){
    return this.http.get(APIConstant.user.getAllusers);
  }

  getAllUsersByClientId(){
    return this.http.get(APIConstant.user.getAllUsersByClientId)
  }

  getEditUserById(){
    return this.http.get(APIConstant.user.getEditUserById);
  }

  addUser(Obj:any){
    return this.http.post(APIConstant.user.addUser,Obj);
  }

  updateUser(Obj:any){
    return this.http.post(APIConstant.user.updateUser,Obj);
  }

  deleteUsersById(id:number){
    return this.http.post(APIConstant.user.deleteUsersById,id);
  }
}
