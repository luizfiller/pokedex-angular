import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailsComponent } from './views/details/details.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/views.module').then(view => view.ViewsModule)
  },
  {
    path: 'details/:id',
    component: DetailsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
