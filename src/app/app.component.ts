import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app';

  city: any;
  weatherData: any;
  cities: string[] = [
    'Delhi',
    'Mumbai',
    'Bangalore',
    'Chennai',
    'Hyderabad',
    'Kolkata',
    'Surat',
    'Jaipur',
    'Chandigarh',
    'Varanasi'
  ];

  constructor(private weatherService: WeatherService) { }

  ngOnInit() { }

  convertToCelsius(kelvin: number): number {
    return kelvin - 273.15;
  }
  getWeather() {
    this.weatherService.getWeatherData(this.city)
      .subscribe((data: any) => {
        this.weatherData = data;
        console.log(data);
      });
  }

  
}
