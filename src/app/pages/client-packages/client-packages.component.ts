import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { clientPackage,  } from 'src/app/core/models/classes/clientPackage';
import { Iclient } from 'src/app/core/models/interfaces/Iclient';
import { IclientPackageList } from 'src/app/core/models/interfaces/IclientPackage';
import { IpackageList } from 'src/app/core/models/interfaces/Ipackage';
import { ClientPackageService } from 'src/app/core/services/client-package.service';
import { ClientService } from 'src/app/core/services/client.service';
import { PackageService } from 'src/app/core/services/package.service';
import { ToggleService } from 'src/app/core/services/toggle.service';

@Component({
  selector: 'app-client-packages',
  templateUrl: './client-packages.component.html',
  styleUrls: ['./client-packages.component.css']
})
export class ClientPackagesComponent implements OnInit {
  clientPackageObj: clientPackage = new clientPackage;
  clientPackageList: IclientPackageList[] = [];
  clientPackageListById: any[] = [];
  clientList: Iclient[] = [];
  packagesList: IpackageList[] = [];
  loggedinuserdata: any;

  clientAllPackageList: any[]=[];

  isCardView: boolean = true;
  View: boolean = false;

  isToggled = false;
  isLoading: boolean = true;

  displayStyle: string = 'none';
  displayStyle1: string = 'none';

  private subscription: Subscription = new Subscription;

  constructor(private clientPackageSrv: ClientPackageService, private clientSrv: ClientService, private togglesrv: ToggleService, private toastrsrv: ToastrService, private packagesrv: PackageService) {
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
    if (this.loggedinuserdata.role == 'client') {
      this.clientPackageObj.clientId == this.loggedinuserdata.clientId
    } else {
      this.getAllClientPackages();
    }

    this.getAllClientPackages();
    this.getActivePackagesByClientId();
    this.getAllPackages();
    this.getAllClients();
  }
  getAllClientPackages() {
    this.clientPackageSrv.getAllClientPackages().subscribe((res: any) => {
      this.clientPackageList = res.data;
    })
  }
  onEdit(Id: number) {
    this.clientPackageSrv.editClientPackageByid(Id).subscribe((res: any) => {
      this.clientPackageObj= res.data;
    })
  }

  getClientdata(id:number) {
    debugger; 
    this.clientPackageSrv.getAllClientPackageByClientId(id).subscribe((res: any) => {
      this.clientAllPackageList = res.data;
    })
  }
  getAllPackages() {
    this.packagesrv.getAllPackage().subscribe((res: any) => {
      this.packagesList = res.data;
    })
  }
  getAllClients() {
    this.clientSrv.getAllClient().subscribe((res: any) => {
      this.clientList = res.data;

    })
  }
  getActivePackagesByClientId() {
    this.clientPackageSrv.getAllActivePackageByClientId(this.clientPackageObj.clientId).subscribe((res: any) => {
      this.clientPackageList = res.data;
    })
  }

  onSaveClientPackage() {
    this.isLoading = true;
    this.clientPackageSrv.saveClientPackage(this.clientPackageObj).subscribe((res: any) => {
      this.isLoading = false;
      if (res.result) {
        alert(" New Client Package Created Successfully")
        this.getAllClientPackages();
        // this.getClientPackageByClientId();
      } else {
        alert(res.message)
      }
    },
      error => {
        alert(JSON.stringify(error.error))
      })
  }

  onUpdateClientPackage() {
    this.isLoading = true;
    this.clientPackageSrv.UpadateClientPackage(this.clientPackageObj).subscribe((res: any) => {
      this.isLoading = false;
      if (res.result) {
        alert("  Client Package Updated Successfully")
        this.getAllClientPackages();
      } else {
        alert(res.message)
      }
    },
      error => {
        alert(JSON.stringify(error.error))
      })
  }

  onDeleteClientPackage(clientPackageId: number) {
    const isDelete = confirm(" Are you want to delete client package data");
    if (isDelete == true) {
      this.clientPackageSrv.DeleteClientPackage(clientPackageId).subscribe((res: any) => {
        if (res.result) {
          this.toastrsrv.error("Client Package Deleted Successfully")
        }
      },
        error => {
          alert(JSON.stringify(error.error))
        })
    }
  }
  // onView() {
  //   this.View = !this.View
  // }
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
    this.clientPackageObj = new clientPackage;
  }
  openModal() {
    this.displayStyle1 = 'block';
  }
  closeModal(){
    this.displayStyle1='none';

  }

}



