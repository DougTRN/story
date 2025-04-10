import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Aluno } from '../../core/models/aluno.model';
import { AlunoService } from 'src/app/pages/alunos/alunos.service';

@Component({
  selector: 'app-alunos-cadastro',
  templateUrl: './alunos-cadastro.component.html',
  styleUrls: ['./alunos-cadastro.component.css']
})
export class AlunosCadastroComponent implements OnInit {
  aluno = new Aluno();

  constructor(
    private alunosService: AlunoService
  ) { }

  ngOnInit(): void {
  }

  salvar(form: NgForm) {
    console.log(form);
  }

  cadastrarAluno(form: NgForm) {
    console.log(this.aluno);

  }
}