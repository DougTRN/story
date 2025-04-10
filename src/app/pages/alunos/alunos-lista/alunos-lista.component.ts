import { Component, OnInit } from '@angular/core';
import { Aluno } from '../../core/models/aluno.model';
import { DATA } from 'src/app/pages/alunos/data'; // <- Importando os dados mockados

@Component({
  selector: 'app-alunos-lista',
  templateUrl: './alunos-lista.component.html',
  styleUrls: ['./alunos-lista.component.css']
})
export class AlunosListaComponent implements OnInit {

  alunos: Aluno[] = [];

  constructor() {}

  ngOnInit(): void {
    this.alunos = DATA;
  }
}