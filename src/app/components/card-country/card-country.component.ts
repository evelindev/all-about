import { Component, Input, OnInit, Pipe } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../models/country.dto';
import { KeyValuePipe, NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-card-country',
  imports: [
    NgFor,
    KeyValuePipe,
  ],
  templateUrl: './card-country.component.html',
  styleUrl: './card-country.component.scss'
})
export class CardCountryComponent{
  [x: string]: any;
  @Input() countries: Country[] | undefined;

  constructor(private router: Router) {}

  goToCountry(cca3: string, capital: string) {
    this.router.navigate(['/country', cca3.toLowerCase(), capital]);
  }
}
