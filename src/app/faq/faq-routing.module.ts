import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainFaqComponent } from './main-faq/main-faq.component';

const routes: Routes = [{ path: '', component: MainFaqComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaqRoutingModule {}
