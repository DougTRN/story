import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosListaComponent } from './alunos-lista/alunos-lista.component';
import { AlunosCadastroComponent } from './alunos-cadastro/alunos-cadastro.component';
import { AlunosRoutingModule } from './alunos.routing';
import { PrimengModule } from 'src/app/primeng.module';
import { FormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    AlunosRoutingModule,
    PrimengModule,
    FormsModule,
    TableModule,
    CardModule,
    ButtonModule
    
  ],
  declarations: [
    AlunosListaComponent,
    AlunosCadastroComponent
    
  ]
})
export class AlunosModule { }
