import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Gun } from '../model/Gun';

@Injectable({
  providedIn: 'root'
})
export class GunService {
 gunsUrl:string="/api/guns";
  //gunsUrl : string = "http://localhost:3000/guns";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })};
  constructor(private http: HttpClient) { }

  getGuns(): Observable<Gun[]>{
    return this.http.get<Gun[]>(this.gunsUrl);  }


  addGun(gun: Gun): Observable<Gun> {
    return this.http.post<Gun>(this.gunsUrl, gun, this.httpOptions);}

  deleteGun(g: Gun | number): Observable<Gun> {
    console.log('gggg');
    const id = typeof g === 'number' ? g : g.id;
    const url=this.gunsUrl+'/'+id;
    return this.http.delete<Gun>(url);
  }
  getGunById(id: number): Observable<Gun> {
    console.log('ffff');
    return this.http.get<Gun>(this.gunsUrl +'/'+ id);  }

  updateGun(id: number, gun: Gun): Observable<Gun> {
    return this.http.put<Gun>(this.gunsUrl +'/'+ id, gun, this.httpOptions);}

}

