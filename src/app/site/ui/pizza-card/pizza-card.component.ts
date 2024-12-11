import { Component, Input } from '@angular/core';
import { Pizza } from '../../@models/pizza.model';
import { CurrencyPipe, NgIf } from '@angular/common';
import { PizzaService } from '../../data-access/pizza.service';

@Component({
  selector: 'app-pizza-card',
  standalone: true,
  imports: [CurrencyPipe, NgIf], 
  templateUrl: './pizza-card.component.html',
  styleUrls: ['./pizza-card.component.scss']
})
export class PizzaCardComponent {
  @Input() pizza!: Pizza;

  get ingredientList(): string {
    return this.pizza.ingredients.map((ing) => ing.name).join(', ');
  }

  ngOnInit(): void {
    console.log(this.pizza); // Exibe os dados da pizza no console
  }
}
