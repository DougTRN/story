import { Injectable } from '@angular/core';
import { DATA   } from './data';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private alunos = [...DATA];

  getAlunos() {
    return this.alunos;
  }

  adicionarAluno(aluno: any) {
    aluno.id = this.alunos.length + 1;
    this.alunos.push(aluno);
  }
}