import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { Weather } from "./weather";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'https://api.openweathermap.org/data/2.5/';
  private apiKey = '2c5ad581d5612b99b845d7830187851b';
  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<Weather> {
  const options = new HttpParams()
    .set('units', 'metric')
    .set('q', city)
    .set('appId', this.apiKey);
  return this.http.get<Weather>(this.apiUrl + 'weather', { params: options });
  }
}
