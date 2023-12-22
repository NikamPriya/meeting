import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IclientPackageList } from '../models/interfaces/IclientPackage';
import { APIConstant } from '../constant/APIconstant';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { ReturnClass } from '../models/classes/client';

@Injectable({
  providedIn: 'root'
})
export class ClientPackageService {

  constructor(private http:HttpClient) { }

  getAllClientPackages(): Observable<IclientPackageList[]>{
    return this.http.get<IclientPackageList[]>(APIConstant.clientPackage.getClientPAckage)
  }

  editClientPackageByid(id:number): Observable<IclientPackageList[]>{
    return this.http.get<IclientPackageList[]>(APIConstant.clientPackage.editClientPackage + id)
  }

  getAllClientPackageByClientId(clientId:number): Observable<IclientPackageList[]>{
    return this.http.get<IclientPackageList[]>(APIConstant.clientPackage.getClientPackageByClientId + clientId)
  }

  getAllActivePackageByClientId(clientId:number): Observable<IclientPackageList[]>{
    return this.http.get<IclientPackageList[]>(APIConstant.clientPackage.getActivePackageByClientId + clientId)
  }

  saveClientPackage(obj:any):Observable<ReturnClass[]>{
    return this.http.post<ReturnClass[]>(APIConstant.clientPackage.createClientPackage, obj)
  }

  UpadateClientPackage(obj:any):Observable<IclientPackageList[]>{
    return this.http.post<IclientPackageList[]>(APIConstant.clientPackage.updateClientPackage, obj)
  }
   DeleteClientPackage(id:number):Observable<IclientPackageList[]>{
    return this.http.post<IclientPackageList[]>(APIConstant.clientPackage.delClientPackage + id, {})
   }

}
