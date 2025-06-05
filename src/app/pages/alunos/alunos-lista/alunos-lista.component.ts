import { Component, OnInit } from '@angular/core';
import { Aluno } from '../../core/models/aluno.model';
import { DATA } from 'src/app/pages/alunos/data';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-alunos-lista',
  templateUrl: './alunos-lista.component.html',
  styleUrls: ['./alunos-lista.component.css']
})
export class AlunosListaComponent implements OnInit {

  alunos: Aluno[] = [];
  carregando = true;

  constructor(private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      this.alunos = DATA;
      this.carregando = false;
      this.spinner.hide();
    }, 1500);
  }
}
    