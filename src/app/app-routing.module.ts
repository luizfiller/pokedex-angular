import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { DetailsComponent } from './views/details/details.component';
import { ViewsModule } from './views/views.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/views.module').then(view => view.ViewsModule)
  },
  {
    path: 'app-component',
    component: AppComponent
  },
  {
    path: 'details',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
