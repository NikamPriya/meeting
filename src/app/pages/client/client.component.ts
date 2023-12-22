import { JsonPipe } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { client } from 'src/app/core/models/classes/client';
import { Iclient } from 'src/app/core/models/interfaces/Iclient';
import { ClientService } from 'src/app/core/services/client.service';
import { ToggleService } from 'src/app/core/services/toggle.service';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clientObj: client = new client;
  clientList: Iclient[] = [];


  isCardView: boolean = true;
  ListView: boolean = true;

  displayStyle: string = "none";

  isToggled = false;
  isLoading:boolean = true;

  private subscription: Subscription = new Subscription;



  constructor(private clientSrv: ClientService, private togglesrv: ToggleService, private toastrsrv: ToastrService) {
    this.subscription = this.togglesrv.toggleSubject.subscribe(() => {
      this.isToggled = !this.isToggled;
    });
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);

  }

  ngOnInit(): void {
    this.getAllClients();

  }
  getAllClients() {
    this.clientSrv.getAllClient().subscribe((res: any) => {
      this.clientList = res.data;

    })
  }
  editClientData(clientId: number) {
    this.clientSrv.editCli(clientId).subscribe((res: any) => {
      this.clientObj = res.data;
    })
  }
  // editClientData(item: any) {
  //   debugger
  //   this.clientObj = item;
  // }


  saveClientData() {
    this.isLoading = true;
    this.clientSrv.saveClient(this.clientObj).subscribe((res: any) => {
      this.isLoading = false;
      if (res.result) {
        alert(" New Client Created Successfully")
        this.getAllClients();
      } else {
        alert(res.message)
      }
    },
      error => {
        alert(JSON.stringify(error.error))
      })
  }

  updateClientData() {
    this.clientSrv.onUpdate(this.clientObj).subscribe((res: any) => {
      if (res.result) {
        alert("Update Client Data Successfully")
        this.getAllClients();
      } else {
        alert(res.message)
      }
    },
      error => {
        alert(JSON.stringify(error.error))
      })
  }

  DeleteClientData(clientId: number) {
    const isDelete = confirm(" Are you want to delete client data");
    if (isDelete == true) {
      this.clientSrv.onDelete(clientId).subscribe((res: any) => {
        if (res.result) {
          alert("Client Deleted Successfully")
          this.getAllClients();
        } else {
          alert(res.message);
        }
      },
        error => {
          alert(JSON.stringify(error.error))
        })
    }
  }

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
    this.clientObj = new client;
  }
  onView() {
    this.ListView = !this.ListView
  }



}
