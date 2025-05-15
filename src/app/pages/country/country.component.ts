import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { Country } from '../../models/country.dto';
import { KeyValuePipe, NgFor, NgIf } from '@angular/common';
import { Weather } from '../../models/weather.dto';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-country',
  imports: [
    NgFor,
    KeyValuePipe,
  ],
  templateUrl: './country.component.html',
  styleUrl: './country.component.scss'
})
export class CountryComponent implements OnInit{
  cca3!: string;
  capital!: string;
  countryData: Country | undefined;
  weatherData: Weather | undefined;

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService,
    private weatherService: WeatherService,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.cca3 = params.get('cca3')!;
      this.loadCountryData();
    });
  }

  async loadCountryData() {
  this.countryData = await this.countryService.getCountryById(this.cca3);

  // Получаем столицу из countryData
  this.capital = this.countryData.capital?.[0] || '';

  if (this.capital) {
    this.weatherData = await this.weatherService.getWeather(this.capital);
  } else {
    console.warn('У страны нет столицы, погода не будет загружена.');
  }
}
}
