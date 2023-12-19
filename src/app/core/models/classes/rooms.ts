export class Rooms {
  roomId: number;
  roomName: string;
  roomLocation: string;
  roomSeatingCapacity: Number;
  isroomActive: boolean;
  clientId: Number;
  createdDate: Date;
  lastUpdatetd: Date


  constructor(){
    this.roomId= 0,
    this.roomLocation= '',
    this.roomName='',
    this.roomSeatingCapacity=0,
    this.createdDate=new Date(),
    this.isroomActive=true,
    this.clientId=0,
    this.lastUpdatetd=new Date()
  }
}

export class ReturnClass {
  message: string;
  result: boolean;
  data: any;

  constructor() {
      this.message = '';
      this.data = null;
      this.result =true;
    }
}
