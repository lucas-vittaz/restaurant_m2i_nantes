import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageWelcomeComponent } from './welcome/pages/page-welcome/page-welcome.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: PageWelcomeComponent },
  {
    path: 'restaurants',
    loadChildren: () =>
      import('./restaurants/restaurants.module').then(
        (m) => m.RestaurantsModule
      ),
  },
  {
    path: 'reservations',
    loadChildren: () =>
      import('./reservations/reservations.module').then(
        (m) => m.ReservationsModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
