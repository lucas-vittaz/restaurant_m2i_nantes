import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TemplatesModule } from '../templates/templates.module';
import { BtnComponent } from './components/btn/btn.component';
import { CardComponent } from './components/card/card.component';
import { CardTypeComponent } from './components/card-type/card-type.component';

@NgModule({
  declarations: [CardComponent, CardTypeComponent, BtnComponent],
  imports: [CommonModule, RouterModule],
  exports: [TemplatesModule, CardComponent, CardTypeComponent, BtnComponent],
})
export class SharedModule {}
