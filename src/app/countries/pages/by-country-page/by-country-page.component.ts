import { Component } from '@angular/core';
import { CountriesRoutingModule } from '../../countries-routing.module';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'pages-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {

  constructor( private countriesService: CountriesService ) {}

  public countries: Country[] = [];

  searchByCountry( term: string ) {
    this.countriesService.searchCountry( term )
      .subscribe( countries => {
        this.countries = countries;
      } )
  }

}
