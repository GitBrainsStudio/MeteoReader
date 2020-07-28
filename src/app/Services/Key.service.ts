import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ResponseData } from '../Models/ResponseData';
import { map, catchError } from 'rxjs/operators';
import { KeyLocalDetector } from '../Models/KeyLocalDetector';
import { KeyLocalSetter } from '../Models/KeyLocalSetter';
import { SnackbarService } from '../Services/Snackbar.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({providedIn:"root"})
export class KeyService 
{
    constructor(private http:HttpClient, private snackBarService: SnackbarService, private snackBar : MatSnackBar) { }

    get key() : string
    {
      return KeyLocalDetector.Key();
    }

    set key(key:string)
    {
        KeyLocalSetter.Write(key);
    }
    
    
    downloadDataFromApi() : Observable<ResponseData>
    {
        return this.http.get("http://api.openweathermap.org/data/2.5/forecast?q=Chelyabinsk&appid=" + this.key + "&units=metric")
        
        .pipe(map((v:ResponseData) => 
        {
            v.list.forEach(v => { v.dt = new Date(v.dt as number * 1000) });

            return v;
        } 
        )).pipe(catchError(this.handleError.bind(this)));

    }

    imageUrlCreatorByImgId(imgCode: string) 
    {
        return "http://openweathermap.org/img/wn/" + imgCode + "@2x.png"
    }

    handleError(error: HttpErrorResponse) {

        if (error.status)
        {
            if (error.status == 401)
            {
                this.snackBar.open("Введённый Api ключ не корректный. Код ошибки: 401", 'закрыть', {
                    duration: 5000,
                  });
                this.snackBarService.showMessage("Введённый Api ключ не корректный. Код ошибки: 401");
            }
    
            else
            {
                this.snackBarService.showMessage("Ошибка при получении данных. Код ошибки: " + error.status);
            }
        }

        else
        {
            this.snackBarService.showMessage("Не смогли получить ответ от сервера. Проверьте своё подключение к сети интернет.");
        }

        return Observable.throw(error);
      };

}

//827bc80cc453ed424cf10a43904faba2