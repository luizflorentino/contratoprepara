import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { AlunoCrudComponent } from './views/aluno-crud/aluno-crud.component';
import { AlunoCreateComponent } from './components/aluno/aluno-create/aluno-create.component';
import { ResponsavelCrudComponent } from './views/responsavel-crud/responsavel-crud.component';
import { ResponsavelCreateComponent } from './components/responsavel/responsavel-create/responsavel-create.component';
import { CursoCrudComponent } from './views/curso-crud/curso-crud.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "alunos", component: AlunoCrudComponent },
  { path: "alunos/novo", component: AlunoCreateComponent },
  { path: "responsaveis", component: ResponsavelCrudComponent },
  { path: "responsaveis/novo", component: ResponsavelCreateComponent },
  { path: "cursos", component: CursoCrudComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
