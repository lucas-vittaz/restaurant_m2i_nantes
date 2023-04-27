import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListReservationsComponent } from './pages/page-list-reservations/page-list-reservations.component';

const routes: Routes = [{ path: '', component: PageListReservationsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservationsRoutingModule {}
