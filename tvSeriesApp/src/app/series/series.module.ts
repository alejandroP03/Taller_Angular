import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SeriesComponent } from './series.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SeriesComponent],
  exports: [SeriesComponent]
})
export class SeriesModule { }