import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn:"root"})
export class KeyService 
{
    constructor(private http:HttpClient) { }
    key:string;    
    
    downloadDataFromApi()
    {
        
    }
}