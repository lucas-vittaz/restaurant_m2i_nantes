import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddRestaurantComponent } from './pages/page-add-restaurant/page-add-restaurant.component';
import { PageEditRestaurantComponent } from './pages/page-edit-restaurant/page-edit-restaurant.component';
import { PageListRestaurantsComponent } from './pages/page-list-restaurants/page-list-restaurants.component';
import { PageShowRestaurantComponent } from './pages/page-show-restaurant/page-show-restaurant.component';
import { PageListRestaurantsCategoriesComponent } from './pages/page-list-restaurants-categories/page-list-restaurants-categories.component';

const routes: Routes = [
  { path: '', component: PageListRestaurantsComponent },
  { path: 'add', component: PageAddRestaurantComponent },
  { path: 'edit/:id', component: PageEditRestaurantComponent },
  { path: 'show/:id', component: PageShowRestaurantComponent },
  { path: 'categories/:id', component: PageListRestaurantsCategoriesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantsRoutingModule {}
