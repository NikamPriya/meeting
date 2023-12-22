
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { booking } from 'src/app/core/models/classes/booking';
import { Ibooking, Itime } from 'src/app/core/models/interfaces/Ibooking ';
import { IroomList } from 'src/app/core/models/interfaces/Iroom';
import { Iuser } from 'src/app/core/models/interfaces/Iuser';
import { BookingService } from 'src/app/core/services/booking.service';
import { RoomService } from 'src/app/core/services/room.service';
import { ToggleService } from 'src/app/core/services/toggle.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit{

  TimeList:Itime[]=[]
  bookingList:Ibooking[]=[];
  bookingObj:booking=new booking;
  roomList:IroomList[]=[];
  userList: Iuser[] = []

  isLoading:boolean = true;
  isToggled = false;
  ListView: boolean = true;
  displayStyle: string = 'none';
 
  private subscription: Subscription = new Subscription;

  constructor(private bookSrv:BookingService,private roomSrv:RoomService,private userSrv: UserService,private togglesrv: ToggleService){
    this.subscription = this.togglesrv.toggleSubject.subscribe(() => {
      this.isToggled = !this.isToggled;
    });
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  ngOnInit(): void {
    
    this.ongetAllBookings();
    this.ongetAllRooms();
    this.onGetAllUser();
    this. ongetTime();
  }

  ongetAllBookings(){
    this.bookSrv.getAllBookings().subscribe((res:any)=>{
     this.bookingList = res.data;
    })
  }

  ongetAllRooms(){
    this.roomSrv.getAllRooms().subscribe((res:any)=>{
    this.roomList= res.data;
    })
  }

  onGetAllUser() {
     this.userSrv.getAllusers().subscribe((res: any) => {
      this.userList = res.data;
    })
  }

  ongetTime(){
    this.bookSrv.getTime().subscribe((res:any)=>{
      this.TimeList = res.data;
    })
  }

  onCreateAllBookings(){
    this.isLoading = true;
    this.bookSrv.createBooking(this.bookingObj).subscribe((res:any)=>{
      this.isLoading = false;
      if(res.result){
        alert("Booking Added Successfully");
        this.ongetAllBookings();
      }else{
        alert(res.message)
      }
    },
    error=>{
     alert(JSON.stringify(error.error))
    })
  }

  onUpdateAllBookings(){
    this.isLoading = true;
    this.bookSrv.updateBooking(this.bookingObj).subscribe((res:any)=>{
      this.isLoading = false;
      if(res.result){
        alert("Booking Updated Successfully");
        this.ongetAllBookings();
      }else{
        alert(res.message)
      }
    },
    error=>{
      alert(JSON.stringify(error.error))
    })
  }

  onDeleteAllBooking(bookingId:number){
    const isconfirm = confirm("Are you sure for delete this booking");
    if(isconfirm){
      this.bookSrv.deleteBooking(bookingId).subscribe((res:any)=>{
        if(res.result){
          alert("Booking deleted successfully");
          this.ongetAllBookings();
        }else{
          alert(res.message)
        }
      },
      error=>{
        alert(JSON.stringify(error.error))
      })
    }
  }

  onEditAllBooking(item:any){
    this.bookingObj = item
  }

  openPopup() {
    this.displayStyle = 'block';
  }
  closePopup() {
    this.displayStyle = 'none';
    this.bookingObj = new booking()
  }

  onView() {
    this.ListView = !this.ListView
  }
}
