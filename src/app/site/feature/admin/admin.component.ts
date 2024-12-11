import { Component, inject, ChangeDetectorRef, booleanAttribute } from '@angular/core';
import { PizzaService } from '../../data-access/pizza.service';
import { Pizza } from '../../@models/pizza.model';
import { Ingredient } from '../../@models/ingredient.model';
import { NgFor, NgIf, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [NgFor, NgIf, CurrencyPipe, FormsModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  pizzaService = inject(PizzaService);
  cdr = inject(ChangeDetectorRef);
  pizzas = this.pizzaService.getPizzas();
  ingredients = this.pizzaService.getIngredients();

  newPizza: Pizza = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    ingredients: [],
    image: '',
    unavailable:false
  };

  // Edita a pizza, carregando seus dados no formulário
  editPizza(pizza: Pizza) {
    this.newPizza = { ...pizza }; // Carrega os dados da pizza no formulário de adição/edição
  }


  // Processa a imagem selecionada
  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.newPizza.image = reader.result as string; // Converte a imagem para base64
      };
    }
  }

  // Adiciona uma nova pizza
  addPizza() {
    if (this.newPizza.id === 0) {
      // Se o id for 0, significa que é uma nova pizza
      this.pizzaService.createPizza(this.newPizza);
    } else {
      // Caso contrário, estamos editando uma pizza existente
      this.pizzaService.updatePizza(this.newPizza);
    }
    this.pizzas = this.pizzaService.getPizzas();
    this.cdr.detectChanges();
    this.newPizza = { id: 0, name: '', description: '', price: 0, ingredients: [], image: '', unavailable: false };
  }

  // Deleta a pizza
  deletePizza(id: number) {
    this.pizzaService.deletePizza(id);
    this.pizzas = this.pizzaService.getPizzas();
    this.cdr.detectChanges();
  }

  // Adiciona ou remove ingredientes
  toggleIngredient(ingredient: Ingredient) {
    const index = this.newPizza.ingredients.findIndex((ing) => ing.id === ingredient.id);
    if (index === -1) {
      this.newPizza.ingredients.push(ingredient);
    } else {
      this.newPizza.ingredients.splice(index, 1);
    }
  }
}
