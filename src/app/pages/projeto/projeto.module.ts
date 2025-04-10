import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PrimengModule } from "src/app/primeng.module";
import { ProjetoCadastroComponent } from "./projeto-cadastro/projeto-cadastro.component";
import { ProjetoLisComponent } from "./projeto-list/projeto-lis.component";
import { ProjetoRoutingModule } from "./projeto.routing";
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';


@NgModule({

  imports:[
    CommonModule,
    ProjetoRoutingModule,
    PrimengModule,
    TableModule,
    CardModule,
    ButtonModule

  ],

  declarations:[
    ProjetoCadastroComponent,
    ProjetoLisComponent
  ]

})

export class ProjetoModule {}