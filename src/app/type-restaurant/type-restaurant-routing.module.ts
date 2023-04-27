import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListTypeRestaurantComponent } from './pages/page-list-type-restaurant/page-list-type-restaurant.component';

const routes: Routes = [
  { path: '',  component: PageListTypeRestaurantComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeRestaurantRoutingModule { }
