import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKeys ="602a3c09bad82e8f4265c87eb7b54734"

  constructor( private http:HttpClient) { }

  getWeatherData(cityName:string){
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.apiKeys}`)
  }
}
