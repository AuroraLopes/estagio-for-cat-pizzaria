import { Component } from '@angular/core';
import { PizzaService } from '../../data-access/pizza.service';
import { Pizza } from '../../@models/pizza.model';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  searchQuery: string = '';
  searchResults: Pizza[] = [];
  showResults: boolean = false; // Controla a visibilidade dos resultados
  hovering: boolean = false; // Detecta se o mouse está sobre a lista

  constructor(private pizzaService: PizzaService) {}

  // Método de busca ao enviar o formulário
  onSearch(event: Event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    const query = this.searchQuery.trim().toLowerCase();

    if (query) {
      const allPizzas = this.pizzaService.getPizzas();
      this.searchResults = allPizzas.filter(
        (pizza) =>
          pizza.name.toLowerCase().includes(query) || 
          pizza.ingredients.some((ingredient) =>
            ingredient.name.toLowerCase().includes(query)
          )
      );
    } else {
      this.searchResults = [];
    }

    this.showResults = true; // Mostra os resultados ao realizar a pesquisa
  }

  // Método para esconder os resultados se o mouse não estiver sobre a lista
  hideResults() {
    if (!this.hovering) {
      this.showResults = false;
    }
  }
}
