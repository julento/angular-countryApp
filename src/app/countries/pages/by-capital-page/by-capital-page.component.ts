import { Component, EventEmitter, Output } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'pages-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  constructor( private countriesService: CountriesService ) {}

  public countries: Country[] = [];


  searchByCapital( term: string ) {
    this.countriesService.searchCapital( term )
      .subscribe( countries => {
        this.countries = countries;
      } )
  }


}
