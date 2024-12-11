// src/app/site/feature/catalog/catalog.component.ts
import { Component, inject, OnInit } from '@angular/core';
import { PizzaService } from '../../data-access/pizza.service';
import { NgFor } from '@angular/common';
import { PizzaCardComponent } from '../../ui/pizza-card/pizza-card.component';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [NgFor, PizzaCardComponent],
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  pizzaService = inject(PizzaService);
  pizzas = this.pizzaService.getPizzas();

  ngOnInit() {
    this.pizzas = this.pizzaService.getPizzas();
  }
}
