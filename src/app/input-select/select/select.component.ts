import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {CommonModule} from "@angular/common";

interface PokemonOption {
  value: string;
  label: string;
}

interface PokemonGroup {
  label: string;
  options: PokemonOption[];
  disabled: boolean;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule],
})

export class SelectComponent {
  pokemonGroups: PokemonGroup[] = [
    { label: 'Grass', options: [
        { value: 'bulbasaur', label: 'Bulbasaur' },
        { value: 'oddish', label: 'Oddish' },
        { value: 'bellsprout', label: 'Bellsprout' },
      ], disabled: false },
    { label: 'Water', options: [
        { value: 'squirtle', label: 'Squirtle' },
        { value: 'psyduck', label: 'Psyduck' },
        { value: 'horsea', label: 'Horsea' },
      ], disabled: true },
    { label: 'Fire', options: [
        { value: 'charmander', label: 'Charmander' },
        { value: 'vulpix', label: 'Vulpix' },
        { value: 'flareon', label: 'Flareon' },
      ], disabled: false },
    { label: 'Psychic', options: [
        { value: 'mew', label: 'Mew' },
        { value: 'mewtwo', label: 'Mewtwo' },
      ], disabled: false },
  ];
}





