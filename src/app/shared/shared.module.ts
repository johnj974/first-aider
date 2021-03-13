import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReduceTextPipe } from './pipes/reduceText.pipe';
import { WordCutPipe } from './pipes/word-cut.pipe';

@NgModule({
  declarations: [ReduceTextPipe, WordCutPipe],
  imports: [CommonModule],
  exports: [ReduceTextPipe, WordCutPipe],
})
export class SharedModule {}
