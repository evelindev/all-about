import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../models/country.dto';
import { CardCountryComponent } from "../../components/card-country/card-country.component";

@Component({
  selector: 'app-countries-catalog',
  imports: [CardCountryComponent],
  templateUrl: './countries-catalog.component.html',
  styleUrl: './countries-catalog.component.scss'
})
export class CountriesCatalogComponent implements OnInit{
  countries: Country[] | undefined;
  selectedCountry?: Country | undefined;

  constructor(private countryService: CountryService){}

  async getAllCountries(){
    this.countries = await this.countryService.getCountries();
  }

  ngOnInit(): void {
      this.getAllCountries();
  }
}
