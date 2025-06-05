import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfessorCadastroComponent } from './professor-cadastro/professor-cadastro.component';
import { ProfessorListaComponent } from './professor-lista/professor-lista.component';

const routes: Routes = [
  {
    path: '',
    component: ProfessorListaComponent
  },
  {
    path: 'novo',
    component: ProfessorCadastroComponent
  },
  {
    path: ':id',
    component: ProfessorCadastroComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfessorRoutingModule {}
