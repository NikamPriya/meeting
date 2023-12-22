import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIConstant } from '../constant/APIconstant';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http:HttpClient) { }


  getAllRooms(){
    return this.http.get(APIConstant.Rooms.getRoom);
  }
  
  getAllRoomsByClientId(id:number){
    return this.http.get(APIConstant.Rooms.GetAllRoomsByClientId+id)
  }

  createRoom(Obj:any){
    return this.http.post(APIConstant.Rooms.createRoom,Obj)
  }

  updateRoom(Obj:any){
    return this.http.post(APIConstant.Rooms.updateRoom,Obj)
  }

  deleteRoom(id:number){
    return this.http.post(APIConstant.Rooms.deleteRoom +id,{})
  }

}
