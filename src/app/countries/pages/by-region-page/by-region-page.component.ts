import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``,
})
export class ByRegionPageComponent {
constructor(private countriesSerive: CountriesService){
}

public countries:Country[]=[]

public searchByRegion(term:string){
  this.countriesSerive.searchRegion(term).subscribe(
    countries=>{
      this.countries = countries;
    }
  )
}

}
