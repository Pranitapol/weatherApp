import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from "@angular/router";
import {SettingsComponent} from '../settings/settings.component'
//import {LocalStorageService  } from "ngx-webstorage";
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  selectedValue: any;
  weather: any;
  longitude: any;
  latitude: any;
//  val: any;
  search: any;
  localData:any;
 forcast:any;
  datafor:Array<any>=[];

key:any;
item:any;
  constructor(private weatherservice: HttpService, private router: Router) { }

  ngOnInit(): void {
    this.getCurrentLocation();

    for(let i=0;i<localStorage.length;i++){
      this.key=localStorage.key(i);
      this.item=localStorage.getItem(this.key);
      var x:any=document.getElementById('mySelect');
  let option=document.createElement("option");
  option.textContent=this.item;
  x.add(option);
  localStorage.setItem(this.item,this.item);
     }    
    //this.localData=JSON.parse(String(localStorage.getItem("location")));
    //console.log(this.localData);
  }
  //get latitude and longitude of current location by geolocation
  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {

        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      });
    }
    else {
      alert("Geolocation is not supported by this browser.");
    }
    
  }
  getData: any;
  //getting weather by selected city
  selectChangeHandler(event: any) {

    this.selectedValue = event.target.value;
    //getting  weather data by selected city
    if (this.selectedValue) {
      this.weatherservice.getWeatherByCity(this.selectedValue).subscribe(data => {
        this.getData = data;
        console.log(this.getData);

      })

      
    }
    if(this.selectedValue){
      this.weatherservice.getPrediction(this.selectedValue).subscribe(data=>{
        this.forcast=data;
        console.log(this.forcast);
        for(let index=0;index<this.forcast.list.length;index++ ){
          if(index%8==0){
            console.log(this.forcast.list[index]);
            this.datafor.push(this.forcast.list[index]);
          }
        }
      })
      
    }
    //passing longitude and latitude to get weather details of current location
    this.weatherservice.getWeather(this.latitude, this.longitude).subscribe(data => {
      this.weather = data;
      console.log(this.weather);
    })



  }
  //user can search city and get weather data
  /*onSearch(val: any) {
    if (val) {
      this.weatherservice.getWeatherBySearch(val).subscribe(data => {
        this.search = data;
        console.log(this.search);

      })
    }
    var x:any=document.getElementById('mySelect');
  let option=document.createElement("option");
  option.text=val;
  x.add(option);
  }
*/
  onClick() {
    this.router.navigate(['/setting']);
  }

}
