import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cocktail } from './Modules/Cocktail';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  
  cocktails: Cocktail[] = []

  private cocktailSubject = new BehaviorSubject<Cocktail[]>(this.cocktails)
  public cocktails$ = this.cocktailSubject.asObservable()

  confUrl = 'www.thecocktaildb.com/api/json/v1/1/search.php?f=letteraolettere'

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Cocktail[]> {
    return this.httpClient.get<Cocktail[]>('www.thecocktaildb.com/api/json/v1/1/search.php?f=letteraolettere')
  }

  get(): Observable<Cocktail[]> {
    return this.httpClient.get<Cocktail[]>('www.thecocktaildb.com/api/json/v1/1/search.php?f=letteraolettere')
  }
}
