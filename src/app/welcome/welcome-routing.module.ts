import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageWelcomeComponent } from './pages/page-welcome/page-welcome.component';
import { IconsModule } from '../icons/icons.module';

const routes: Routes = [{ path: '', component: PageWelcomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomeRoutingModule {}
