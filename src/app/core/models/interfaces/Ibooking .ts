
export interface Ibooking {
      bookingId: number,
      roomId: number,
      clientId: number,
      clientName: string,
      userId: number,
      roomName: string,
      userName: string,
      bookingDate: Date,
      fromTime: any,
      toTime: any
    // bookingId  : number,
    // roomId  : number,
    // userId  : number,
    // bookingDate  : Date ,
    // fromTime  : Date,
    // toTime  : Date,
    // createdDate  :   Date  ,
    // lastUpdated  :   Date  

}

export interface Itime {
    timeId: any,
    time: string
}