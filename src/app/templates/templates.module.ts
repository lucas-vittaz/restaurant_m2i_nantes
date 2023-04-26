import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BannerComponent } from './components/banner/banner.component';
import { TemplateFullWidthComponent } from './components/template-full-width/template-full-width.component';

@NgModule({
  declarations: [BannerComponent, TemplateFullWidthComponent],
  imports: [CommonModule, RouterModule],
  exports: [BannerComponent, TemplateFullWidthComponent],
})
export class TemplatesModule {}
