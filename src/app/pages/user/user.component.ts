import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/core/models/classes/User';
import { client } from 'src/app/core/models/classes/client';
import { Iclient } from 'src/app/core/models/interfaces/Iclient';
import { Iuser } from 'src/app/core/models/interfaces/Iuser';
import { ClientService } from 'src/app/core/services/client.service';
import { UserService } from 'src/app/core/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ToggleService } from 'src/app/core/services/toggle.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userList: Iuser[] = []
  userObj: user = new user
  clientList: Iclient[] = [];
  displayStyle: string = 'none';
  isCardView: boolean = true;
  loggedinuserdata: any;
  isSpinner: boolean = false;
  isLoading:boolean = true;
  isToggled = false;
  ListView: boolean = true;
 
  private subscription: Subscription = new Subscription;


  constructor(private userSrv: UserService, private clientSrv: ClientService,private toastr:ToastrService,private togglesrv: ToggleService,) {
    this.subscription = this.togglesrv.toggleSubject.subscribe(() => {
      this.isToggled = !this.isToggled;
    });
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
    const localdata = localStorage.getItem('loginDetails')
    if (localdata != null) {
      this.loggedinuserdata = JSON.parse(localdata)
    }


  }

  ngOnInit(): void {

    if (this.loggedinuserdata.role == 'Client') {
      this.userObj.clientId == this.loggedinuserdata.clientId
      this.onGetAllUsersByClientId();
    } else {
      this.onGetAllUser();
    }

    // this.onGetAllUsersByClientId();
    this.getAllClients();
  }

  onGetAllUser() {
    this.isSpinner = true;
     this.userSrv.getAllusers().subscribe((res: any) => {
      this.isSpinner=false;
      this.userList = res.data;
    })
  }

  onGetAllUsersByClientId() {
    this.userSrv.getAllUsersByClientId(this.loggedinuserdata.clientId).subscribe((res: any) => {
      this.userList = res.data;
    })
  }

  getAllClients() {
    this.clientSrv.getAllClient().subscribe((res: any) => {
      this.clientList = res.data;

    })
  }

  onEdit(item: any) {
    this.userObj = item
  }

  saveAllUser() {
    debugger;
    this.isLoading = true;
    if (this.loggedinuserdata.role == 'Client') {
      this.userObj.clientId = this.loggedinuserdata.clientId
    }
    this.userSrv.addUser(this.userObj).subscribe((res: any) => {
      this.isLoading = false;
      if (res.result) {
        alert("User Added Successfully");
        // this.toastr.success(res.message)
        this.onGetAllUser();
      } else {
        // this.toastr.error(res.message)
        alert(res.message)
      }
    },
      error => {
        alert(JSON.stringify(error.error))
      })
  }

  onUpsateUser() {
    this.isLoading = true;
    this.userSrv.updateUser(this.userObj).subscribe((res: any) => {
      this.isLoading = false;
      if (res.result) {
        alert("User Updated Successfully");

        this.onGetAllUser();
      } else {
        alert(res.message);
      }
    },
      error => {
        alert(JSON.stringify(error.error))
      })
  }

  ondeleteUser(userId: number) {
    const isConfirm = confirm("Are you sure to delete this user");
    if (isConfirm) {
      this.userSrv.deleteUsersById(userId).subscribe((res: any) => {
        if (res.result) {
          alert("User Delated Successfully");
          this.onGetAllUser();
        } else {
          alert(res.message)
        }
      },
        error => {
          alert(JSON.stringify(error.error));
        })
    }
  }


  openPopup() {
    this.displayStyle = 'block';
  }
  closePopup() {
    this.displayStyle = 'none';
    this.userObj = new user()
  }
  onView() {
    this.ListView = !this.ListView
  }

}
