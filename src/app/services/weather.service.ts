import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Weather } from '../models/weather.dto';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey: string = "76ab04b38af14cc5bf3171747251305"

  constructor(private httpService: HttpClient) { }

  async getWeather(capital: string): Promise<Weather>{
    return await lastValueFrom(this.httpService.get<Weather>(`http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${capital}`));
  } 
}
