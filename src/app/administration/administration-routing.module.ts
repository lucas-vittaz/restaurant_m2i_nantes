import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAdministrationComponent } from './pages/page-administration/page-administration.component';

const routes: Routes = [{ path: '', component: PageAdministrationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrationRoutingModule {}
