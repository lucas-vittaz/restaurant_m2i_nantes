import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListTypeRestaurantComponent } from './pages/page-list-type-restaurant/page-list-type-restaurant.component';
import { PageAddTypeRestaurantComponent } from './pages/page-add-type-restaurant/page-add-type-restaurant.component';

const routes: Routes = [
  { path: '', component: PageListTypeRestaurantComponent },
  { path: 'add', component: PageAddTypeRestaurantComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypeRestaurantRoutingModule {}
