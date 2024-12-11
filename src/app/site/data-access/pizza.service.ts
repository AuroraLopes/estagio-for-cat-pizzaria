import { Injectable } from '@angular/core';
import { Pizza } from '../@models/pizza.model';
import { Ingredient } from '../@models/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  private pizzas: Pizza[] = [];

  constructor() {
    this.loadPizzasFromLocalStorage();
  }

  private loadPizzasFromLocalStorage() {
    const storedPizzas = localStorage.getItem('pizzas');
    if (storedPizzas) {
      this.pizzas = JSON.parse(storedPizzas);
    } else {
      // Pizzas iniciais para exibição
      this.pizzas = [
        { 
          id: 1, 
          name: 'Margherita', 
          description: 'Pizza clássica com tomate e queijo.', 
          price: 25, 
          ingredients: [{ id: 1, name: 'Tomate' }, { id: 2, name: 'Queijo' }],
          image: 'assets/images/pizzas/margherita.jpg', 
          unavailable: false
        },
        { 
          id: 2, 
          name: 'Pepperoni', 
          description: 'Pizza de pepperoni com molho especial.', 
          price: 30, 
          ingredients: [{ id: 3, name: 'Pepperoni' }, { id: 2, name: 'Queijo' }], 
          image: 'assets/images/pizzas/pepperoni.jpg', 
          unavailable: false
        },
        { 
          id: 3, 
          name: 'Frango com Catupiry', 
          description: 'Pizza de frango com catupiry e azeitonas.', 
          price: 32, 
          ingredients: [{ id: 12, name: 'Frango' }, { id: 19, name: 'Catupiry' }, { id: 6, name: 'Azeitona' }],
          image: 'assets/images/pizzas/frango-ctupiry.jpg', 
          unavailable: false
        },
        { 
          id: 4, 
          name: 'Calabresa', 
          description: 'Pizza com linguiça calabresa e cebolas.', 
          price: 28, 
          ingredients: [{ id: 23, name: 'Linguiça Calabresa' }, { id: 5, name: 'Cebola' }],
          image: 'assets/images/pizzas/calabresa.jpg', 
          unavailable: false
        },
        { 
          id: 5, 
          name: 'Quatro Queijos', 
          description: 'Pizza com muçarela, parmesão, provolone e gorgonzola.', 
          price: 35, 
          ingredients: [{ id: 2, name: 'Queijo' }, { id: 15, name: 'Provolone' }, { id: 16, name: 'Parmesão' }, { id: 20, name: 'Gorgonzola' }],
          image: 'assets/images/pizzas/quatro-queijo.jpg', 
          unavailable: false
        },
        { 
          id: 6, 
          name: 'Vegetariana', 
          description: 'Pizza com abobrinha, pimentão, champignon e rúcula.', 
          price: 30, 
          ingredients: [{ id: 26, name: 'Abobrinha' }, { id: 9, name: 'Pimentão' }, { id: 11, name: 'Champignon' }, { id: 14, name: 'Rúcula' }],
          image: 'assets/images/pizzas/vegetariana.jpg', 
          unavailable: false
        },
      ];
      
      
      this.savePizzasToLocalStorage();
    }
  }

  private savePizzasToLocalStorage() {
    localStorage.setItem('pizzas', JSON.stringify(this.pizzas));
  }

  getPizzas(): Pizza[] {
    return [...this.pizzas];
  }

  createPizza(newPizza: Pizza) {
    const newId = this.pizzas.length > 0 ? this.pizzas[this.pizzas.length - 1].id + 1 : 1;
    const pizza = { ...newPizza, id: newId, unavailable: false };  // Define 'unavailable' como false por padrão
    this.pizzas.push(pizza);
    this.savePizzasToLocalStorage();
  }

  deletePizza(id: number) {
    this.pizzas = this.pizzas.filter(pizza => pizza.id !== id);
    this.savePizzasToLocalStorage();
  }

  getIngredients(): Ingredient[] {
    return  [
      { id: 1, name: 'Tomate' },
      { id: 2, name: 'Queijo' },
      { id: 3, name: 'Pepperoni' },
      { id: 4, name: 'Manjericão' },
      { id: 5, name: 'Cebola' },
      { id: 6, name: 'Azeitona' },
      { id: 7, name: 'Presunto' },
      { id: 8, name: 'Bacon' },
      { id: 9, name: 'Pimentão' },
      { id: 10, name: 'Alho' },
      { id: 11, name: 'Champignon' },
      { id: 12, name: 'Frango' },
      { id: 13, name: 'Carne Moída' },
      { id: 14, name: 'Rúcula' },
      { id: 15, name: 'Provolone' },
      { id: 16, name: 'Parmesão' },
      { id: 17, name: 'Orégano' },
      { id: 18, name: 'Requeijão' },
      { id: 19, name: 'Catupiry' },
      { id: 20, name: 'Gorgonzola' },
      { id: 21, name: 'Molho de Tomate' },
      { id: 22, name: 'Aliche' },
      { id: 23, name: 'Linguiça Calabresa' },
      { id: 24, name: 'Pimenta' },
      { id: 25, name: 'Espinafre' },
      { id: 26, name: 'Abobrinha' },
      { id: 27, name: 'Milho' },
      { id: 28, name: 'Ervilha' },
      { id: 29, name: 'Brócolis' },
      { id: 30, name: 'Camarão' },
      { id: 31, name: 'Manjerona' },
      { id: 32, name: 'Salsinha' },
      { id: 33, name: 'Pesto' },
    ]; 
  }

  // Marca uma pizza como indisponível
  toggleAvailability(pizza: Pizza) {
    pizza.unavailable = !pizza.unavailable;
    this.savePizzasToLocalStorage();
  }

  // Atualiza uma pizza existente
  updatePizza(updatedPizza: Pizza) {
    const index = this.pizzas.findIndex(pizza => pizza.id === updatedPizza.id);
    if (index !== -1) {
      this.pizzas[index] = updatedPizza;
      this.savePizzasToLocalStorage();
    }
  }
}
