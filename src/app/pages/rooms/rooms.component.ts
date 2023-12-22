import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Rooms } from 'src/app/core/models/classes/rooms';
import { Iclient } from 'src/app/core/models/interfaces/Iclient';
import { IroomList } from 'src/app/core/models/interfaces/Iroom';
import { ClientService } from 'src/app/core/services/client.service';
import { RoomService } from 'src/app/core/services/room.service';
import { ToggleService } from 'src/app/core/services/toggle.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {

  roomList:IroomList[]=[];
  roomObj:Rooms =new Rooms;
  displayStyle: string = 'none';
  isToggled = false;
  ListView: boolean = true;
  isSpinner: boolean = false;
  isLoading:boolean = true;
  loggedInUserdata: any;
  

  private subscription: Subscription = new Subscription;

  clientList: Iclient[] = [];
  constructor(private roomSrv:RoomService,private clientSrv: ClientService,private togglesrv: ToggleService){
    this.subscription = this.togglesrv.toggleSubject.subscribe(() => {
      this.isToggled = !this.isToggled;
    });
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
    const localdata = localStorage.getItem('loginDetails')
    if (localdata != null) {
      this.loggedInUserdata = JSON.parse(localdata)
    }

  }

  ngOnInit(): void {
    if (this.loggedInUserdata.role == 'Client') {
      this.roomObj.clientId == this.loggedInUserdata.clientId
      this.ongetAllRoomsByClientId();
    } else {
      this.ongetAllRooms();
    }

   
    this.getAllClients();
  }

  ongetAllRooms(){
    this.roomSrv.getAllRooms().subscribe((res:any)=>{
    this.roomList= res.data;
    })
  }

  ongetAllRoomsByClientId(){
    this.roomSrv.getAllRoomsByClientId(this.loggedInUserdata.clientId).subscribe((res:any)=>{
      this.roomList= res.data;
    })
  }

  getAllClients() {
    this.clientSrv.getAllClient().subscribe((res: any) => {
      this.clientList = res.data;

    })
  }

  oncreatRooms(){
    this.isLoading = true;
    if (this.loggedInUserdata.role == 'Client') {
      this.roomObj.clientId = this.loggedInUserdata.clientId
    }
    this.roomSrv.createRoom(this.roomObj).subscribe((res:any)=>{
      this.isLoading = false;
      if(res.result){
        alert("Room Created Successfully");
        this.ongetAllRooms();
      }else{
        alert(res.message);
      }
    },
    error =>{
      alert(JSON.stringify(error.error))
    })
  }

  onupdateRooms(){
    this.isLoading = true;
    this.roomSrv.updateRoom(this.roomObj).subscribe((res:any)=>{
      this.isLoading = false;
      if(res.result){
        alert("Room Updated Successfully");
        this.ongetAllRooms();
      }else{
        alert(res.message)
      }
    },
    error=>{
      alert(JSON.stringify(error.error))
    })
  }

  ondeletRooms(roomId:number){
    const isconfirm = "Are yoe sure to delete this room"
   if (isconfirm){
      this.roomSrv.deleteRoom(roomId).subscribe((res:any)=>{
        if(res.result){
          alert("Room Deleted successfully");
          this.ongetAllRooms();
        }else{
          alert(res.message)
        }
      },error=>{
        alert(JSON.stringify(error.error))
      })
    }
    }

    onEdit(item: any) {
      this.roomObj = item
    }
  
    openPopup() {
      this.displayStyle = 'block';
    }
    closePopup() {
      this.displayStyle = 'none';
      this.roomObj = new Rooms()
    }
  
    onView() {
      this.ListView = !this.ListView
    }


}
