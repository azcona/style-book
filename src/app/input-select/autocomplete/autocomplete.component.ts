import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
})
export class AutocompleteComponent implements OnInit {
  myControl = new FormControl('');
  options: string[] = ['None', 'Pizza', 'Burger', 'Sandwich', 'Pasta'];
  filteredOptions: Observable<string[]>;

  constructor() {
    this.filteredOptions = of([]);
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  trackByFn(index: number, option: string): string {
    return option;
  }
}
