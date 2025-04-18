import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

type Region = 'Africa' | 'Americas' | 'Europe'| 'Asia' | 'Oceania'

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``,
})
export class ByRegionPageComponent {
  constructor(private countriesSerive: CountriesService) {}

  public countries: Country[] = [];
  public regions: Region[] = ['Africa', 'Americas', 'Europe', 'Asia','Oceania'];
  public selectedRegion?:Region;


  public searchByRegion(region: Region) {
    this.selectedRegion = region;
    this.countriesSerive.searchRegion(region)
    .subscribe((countries) => {
      this.countries = countries;
    });
  }
}
