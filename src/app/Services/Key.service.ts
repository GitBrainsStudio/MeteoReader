import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseData } from '../Models/ResponseData';
import { map } from 'rxjs/operators';

@Injectable({providedIn:"root"})
export class KeyService 
{
    constructor(private http:HttpClient) { }
    key:string;    
    
    downloadDataFromApi() : Observable<ResponseData>
    {
        return this.http.get("http://api.openweathermap.org/data/2.5/forecast?q=Chelyabinsk&appid=827bc80cc453ed424cf10a43904faba2&units=metric")
        
        .pipe(map((v:ResponseData) => 
        {
            v.list.forEach(v => { v.dt = new Date(v.dt as number * 1000) });

            return v;
        }));
    }
}