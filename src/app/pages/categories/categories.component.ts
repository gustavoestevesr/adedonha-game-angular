import { LowerCasePipe, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [RouterModule, NgClass],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent {
  categories: readonly string[] = [
    'Animais',
    'Cidades',
    'Países',
    'Nomes próprios',
    'Frutas',
    'Filmes',
    'Cantores/Bandas',
    'Esportes',
    'Comidas',
    'Objetos',
    'Partes do corpo',
    'Marcas',
    'Profissões',
    'Programas de TV',
    'Personagens fictícios',
  ];

  categorySelected: string = this.categories[0];
}
