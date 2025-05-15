import { Routes } from '@angular/router';
import { CountriesCatalogComponent } from './pages/countries-catalog/countries-catalog.component';
import { CountryComponent } from './pages/country/country.component';

export const routes: Routes = [
    { path: '', component: CountriesCatalogComponent },
    { path: 'country/:cca3/:capital', component: CountryComponent },
];
