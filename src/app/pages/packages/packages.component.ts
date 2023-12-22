import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription, flatMap } from 'rxjs';
import { packages } from 'src/app/core/models/classes/package';
import { IpackageList } from 'src/app/core/models/interfaces/Ipackage';
import { PackageService } from 'src/app/core/services/package.service';
import { ToggleService } from 'src/app/core/services/toggle.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {
packageObj: packages = new packages;
packagesList:IpackageList[]=[];

isCardView: boolean = true;
ListView: boolean = true;

isToggled = false;
isLoading:boolean = true;

displayStyle: string = "none";

private subscription: Subscription=new Subscription;

constructor(private packagesrv:PackageService, private togglesrv:ToggleService, private toastrsrv: ToastrService){
  this.subscription=this.togglesrv.toggleSubject.subscribe(()=>{
    this.isToggled=!this.isToggled;
  });
  setTimeout(()=>{
    this.isLoading=false;
  }, 2000);
}
ngOnInit(): void {
  this.getAllPacages();
  
}
getAllPacages(){
  this.packagesrv.getAllPackage().subscribe((res:any)=> {
    this.packagesList =res.data;
  })
}
editPackages(id:number){
  this.packagesrv.editPackageById(id).subscribe((res:any)=>{
    if(res.result){
      this.packageObj=res.data
    }
  })
}
// editPackages(item:any){
//   this.packageObj= item;
// }

savePackageData(){
  this.isLoading=true;
  this.packagesrv.savePackage(this.packageObj).subscribe((res:any)=>{
    this.isLoading=false;
    if(res.result){
      this.toastrsrv.success("Package Save Successfully"); 
      this.getAllPacages();
    }else {
      alert(res.message)
    }
  },
  error => {
    alert(JSON.stringify(error.error))
  })
}

updatePackageData(){
  this.isLoading=true;
  this.packagesrv.updatePackages(this.packageObj).subscribe((res:any)=>{
    this.isLoading=false;
    if(res.result) {
      this.toastrsrv.success("Package Updated Successfully"); 
      this.getAllPacages();
    } else {
      alert(res.message)
    }
  },
  error =>{
    alert(JSON.stringify(error.error))
  })
}

deletePackages(packageId:number){
  const isDelete = confirm (" Are you want to delete package data");
  if (isDelete ==true) {
    this.packagesrv.delPackageById(packageId).subscribe((res:any)=>{
      if (res.result) {
        this.toastrsrv.error("Package Deleted Successfully")
      }
    },
    error =>{
      alert(JSON.stringify(error.error))
    })
  }
}

onView() {
  this.ListView = !this.ListView
}
openPopup() {
  this.displayStyle = "block";
}
closePopup() {
  this.displayStyle = "none";
  this.packageObj = new packages;
}


}

