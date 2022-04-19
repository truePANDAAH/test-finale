import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { ActivityService } from 'src/app/activity.service';
import { Cocktail } from 'src/app/Modules/Cocktail';

@Component({
  selector: 'app-list-cocktails',
  templateUrl: './list-cocktails.component.html',
  styleUrls: ['./list-cocktails.component.css']
})
export class ListCocktailsComponent implements OnInit {
  selectDrinks!: Cocktail[];
  subscription!: Subscription;
  cocktails$!: Observable<Cocktail[]>;
  cocktails: Cocktail[] = []

  constructor(private activity: ActivityService) { }

  ngOnInit(): void {
    this.cocktails$ = this.activity.getAll()
  }

  getDrinks() {
    this.activity.get().subscribe(data => { this.selectDrinks = data
    });
  }

  submitDrinks(f: NgForm) {
    this.cocktails.push({
      ...f.value
    })
  }

}
