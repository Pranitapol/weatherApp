import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

//  https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=ee091d0197a466a265ed61ea50d0f3c4
getWeatherByCity(val:any):Observable<any>{
  return this.http.get<any>(`https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=ee091d0197a466a265ed61ea50d0f3c4`);
 
}
  getPrediction(val:any):Observable<any>{
return this.http.get<any>(`https://api.openweathermap.org/data/2.5/forecast?q=${val}&appid=ee091d0197a466a265ed61ea50d0f3c4`);
  }
  getWeather(latitude:any,longitude:any):Observable<any>{

    return this.http.get<any>(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=ee091d0197a466a265ed61ea50d0f3c4`);
  }
 

}
