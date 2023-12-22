import { Time } from "@angular/common";
import { timer, timestamp } from "rxjs";


export class booking {
    bookingId  : number;
    roomId  : number;
    userId  : number;
    bookingDate  : Date ;
    fromTime  : number;
    toTime  : number;
    createdDate  :   Date  ;
    lastUpdated  :   Date  

    constructor(){
       this.bookingId =0;
       this.roomId=0;
       this.userId=0;
       this.bookingDate=new Date();
       this.fromTime=0 ; 
       this.toTime=0;
       this.createdDate=new Date();
       this.lastUpdated=new Date();
    }
}