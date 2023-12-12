import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { client } from 'src/app/core/models/classes/client';
import { Iclient } from 'src/app/core/models/interfaces/Iclient';
import { ClientService } from 'src/app/core/services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clientObj: client = new client;
  clientList: Iclient[] = [];

  constructor(private clientSrv: ClientService) { }

  ngOnInit(): void {

  }

  getAllClients() {
    this.clientSrv.getAllClient().subscribe((res: any) => {
      this.clientList = res.data;

    })
  }
  editClientData(id: number) {
    this.clientSrv.editCli(id).subscribe((res: any) => {
      this.clientList = res.data;
    })
  }

  saveClientData() {
    this.clientSrv.saveClient(this.clientObj).subscribe((res: any) => {
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

  DeleteClientData(id: number) {
    const isConfirm = confirm(" Are you want to delete client data");
    if (isConfirm) {
      this.clientSrv.onDelete(id).subscribe((res: any) => {
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

}
