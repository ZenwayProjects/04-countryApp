import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, delay, map, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  constructor(private http: HttpClient) {}

  private apiUrl: string = 'https://restcountries.com/v3.1';

  private getCountriesRequest( url:string ): Observable<Country[]>{
    return this.http.get<Country[]>(url)
    .pipe(
      catchError( ()=> of ([])),
      delay(1000)
    );
  }


  public searchCountryByAlphaCode(code:string):Observable<Country | null>{
    const url = `${this.apiUrl}/alpha/${code}`;
    return this.http.get<Country[]>(url)
    .pipe(
      map(countries => countries.length > 0 ? countries[0]: null),
      catchError( ()=> of (null)
      )
    )

  }


  public searchCapital(term:string):Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${term}`;

    return this.getCountriesRequest(url);
  }

  public searchCountry(term:string):Observable<Country[]>{
    const url = `${this.apiUrl}/name/${term}`;
    return this.getCountriesRequest(url);
  }

  public searchRegion(term:string):Observable<Country[]>{
    const url = `${this.apiUrl}/region/${term}`;
    return this.getCountriesRequest(url);
  }

}
