import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './widget/view/view.component';
import { EditComponent } from './widget/edit/edit.component';

const routes: Routes = [
  { path: '', component: ViewComponent },
  { path: 'edit', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
