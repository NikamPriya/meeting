import { Injectable } from '@angular/core';
import { IpackageList } from '../models/interfaces/Ipackage';
import { packages } from '../models/classes/package';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIConstant } from '../constant/APIconstant';
import { ReturnClass } from '../models/classes/client';
import { AppComponent } from 'src/app/app.component';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  constructor(private http: HttpClient) { }

  getAllPackage(): Observable<IpackageList[]> {
    return this.http.get<IpackageList[]>(APIConstant.Packages.getPackage)
  }

  editPackageById(id: number): Observable<IpackageList[]> {
    return this.http.get<IpackageList[]>(APIConstant.Packages.editPackage + id)
  }

  savePackage(obj: any): Observable<ReturnClass[]> {
    return this.http.post<ReturnClass[]>(APIConstant.Packages.createPackages, obj)
  }

  updatePackages(obj: any): Observable<IpackageList[]> {
    return this.http.post<IpackageList[]>(APIConstant.Packages.updatePackage, obj)
  }

  delPackageById(id: number): Observable<IpackageList[]> {
    return this.http.post<IpackageList[]>(APIConstant.Packages.delPackage + id, {})
  }
}
