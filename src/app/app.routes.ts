import { Routes } from '@angular/router';
import { CatalogComponent } from './site/feature/catalog/catalog.component';
import { HomeComponent } from './site/feature/home/home.component';
import { AdminComponent } from './site/feature/admin/admin.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'catalog', component:CatalogComponent},
    {path: 'home', component:HomeComponent},
    {path: 'admin', component:AdminComponent}
];
