import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProjetoCadastroComponent } from "./projeto-cadastro/projeto-cadastro.component";
import { ProjetoLisComponent } from "./projeto-list/projeto-lis.component";

const routes: Routes = [
  
  {
    path: '',
    component: ProjetoLisComponent

  },

  {
    path: 'novo',
    component: ProjetoCadastroComponent

  },

  {
    path: 'id',
    component: ProjetoCadastroComponent

  },

];

@NgModule({

  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule],

})

export class ProjetoRoutingModule{}