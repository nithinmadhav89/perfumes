import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect root to /home (create HomeComponent if needed)
  { path: 'home', component: HomeComponent }, // Placeholder; replace with your home component
  { path: 'about', component: AboutComponent }, // Create these components
  { path: 'products', component: ProductDetailsComponent },
  { path: '**', redirectTo: '' }, // Wildcard to handle invalid routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
