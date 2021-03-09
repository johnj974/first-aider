import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReduceTextPipe } from './pipes/reduceText.pipe';

@NgModule({
  declarations: [ReduceTextPipe],
  imports: [CommonModule],
  exports: [ReduceTextPipe],
})
export class SharedModule {}
