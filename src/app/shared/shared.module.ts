import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TemplatesModule } from '../templates/templates.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule],
  exports: [TemplatesModule],
})
export class SharedModule {}
