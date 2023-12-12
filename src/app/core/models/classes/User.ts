export class user {
  userId: number;
  clientId: number;
  userName: string;
  userPassword: string;
  createdDate: Date;
  lastUpdated: Date;
  isActive: boolean;
  role: string

  constructor(){
    this.userId=0;
    this.clientId=0;
    this.userName="";
    this.userPassword="";
    this.createdDate=new Date();
    this.lastUpdated=new Date();
    this.isActive=true;
    this.role="";

  }
}