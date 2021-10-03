import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'github',
    loadChildren: () => import('./github/github.module').then( m => m.GithubModule )
  },
  {
    path: '**',
    redirectTo: 'github'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
