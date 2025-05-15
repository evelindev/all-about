import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../models/country.dto';
import { lastValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private httpService: HttpClient) { }

  async getCountries(): Promise<Country[]>{
    return await lastValueFrom(this.httpService.get<Country[]>("https://restcountries.com/v3.1/all"));
  }


  async getCountryById(cca3: string): Promise<Country> {
    const res = await lastValueFrom(this.httpService.get<Country[]>(`https://restcountries.com/v3.1/alpha/${cca3}`));
  return res[0];
  }
}
