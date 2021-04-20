import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }


getWeatherByCity(val:any):Observable<any>{
  return this.http.get<any>(`http://api.weatherstack.com/current?access_key=ec250e9fc6ae55dcc5bc47da56033b86&query=${val}`);
 
}
  getPrediction(val:any){
return this.http.get<any>(`http://api.openweathermap.org/data/2.5/forecast?q=${val}&appid=ee091d0197a466a265ed61ea50d0f3c4`);
  }
  getWeather(latitude:any,longitude:any):Observable<any>{

    return this.http.get<any>(`http://api.weatherstack.com/current?access_key=ec250e9fc6ae55dcc5bc47da56033b86&query=${latitude},${longitude}`);
  }
  getWeatherBySearch(val:any){
    return this.http.get<any>(`http://api.weatherstack.com/current?access_key=ec250e9fc6ae55dcc5bc47da56033b86&query=${val}`)
  }

}
