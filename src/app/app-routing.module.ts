import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { AlunoCrudComponent } from './views/aluno-crud/aluno-crud.component';
import { AlunoCreateComponent } from './components/aluno/aluno-create/aluno-create.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "alunos", component: AlunoCrudComponent
  },
  {
    path: "alunos/novo", component: AlunoCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
