import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TemplatesModule } from '../templates/templates.module';
import { BtnComponent } from './components/btn/btn.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [CardComponent, BtnComponent],
  imports: [CommonModule, RouterModule],
  exports: [TemplatesModule, CardComponent, BtnComponent],
})
export class SharedModule {}
