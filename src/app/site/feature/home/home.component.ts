import { Component } from '@angular/core';
import { PainelComponent } from "../../ui/painel/painel.component";
import { CatalogComponent } from "../catalog/catalog.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PainelComponent, CatalogComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
