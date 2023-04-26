import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TemplatesModule } from '../templates/templates.module';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [TemplatesModule, CardComponent],
})
export class SharedModule {}
