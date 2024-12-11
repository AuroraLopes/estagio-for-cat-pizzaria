// src/app/app.component.ts
import { Component } from '@angular/core';
import { HeaderComponent } from "./site/ui/header/header.component";
import {  RouterOutlet } from '@angular/router';
import { FooterComponent } from "./site/ui/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
