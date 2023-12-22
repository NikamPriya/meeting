import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIConstant } from '../constant/APIconstant';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient) { }

  getAllBookings(){
    return this.http.get(APIConstant.Booking.getAllBookings);
  }

  getAllBookingsByClientId(){
    return this.http.get(APIConstant.Booking.getAllBookingsByClientId);
  }

  getAllBookingsByUserId(){
    return this.http.get(APIConstant.Booking.getAllBookingsByUserId);
  }

  createBooking(Obj:any){
    return this.http.post(APIConstant.Booking.createBooking,Obj)
  }

  updateBooking(Obj:any){
    return this.http.post(APIConstant.Booking.updateBooking,Obj)
  }

  deleteBooking(id:number){
    return this.http.post(APIConstant.Booking.deleteBooking+id,{})
  }

  editBooking(){
    return this.http.get(APIConstant.Booking.editBooking)
  }

  getTime(){
    return this.http.get(APIConstant.Booking.getTime)
  }
}
