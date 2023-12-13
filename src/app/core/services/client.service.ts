import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iclient } from '../models/interfaces/Iclient';
import { APIConstant } from '../constant/APIconstant';
import { ReturnClass } from '../models/classes/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }

  getAllClient(): Observable<Iclient[]>{
return this.http.get<Iclient[]>(APIConstant.client.getClient)
  }

  editCli(id:number): Observable<Iclient[]>{
    return this.http.get<Iclient[]>(APIConstant.client.editClient + id)
  }

  saveClient(obj:any): Observable<ReturnClass>{
    return this.http.post<ReturnClass>(APIConstant.client.createClient, obj)
  }

  onUpdate(obj:any): Observable<Iclient[]>{
    return this.http.post<Iclient[]>(APIConstant.client.updateClient, obj)
  }

  onDelete(id:number): Observable<Iclient[]>{
    return this.http.post<Iclient[]>(APIConstant.client.delClient, id)
  }

}
