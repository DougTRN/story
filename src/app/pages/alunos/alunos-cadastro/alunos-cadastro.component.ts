import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Aluno } from '../../core/models/aluno.model';
import { AlunoService } from 'src/app/pages/alunos/alunos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alunos-cadastro',
  templateUrl: './alunos-cadastro.component.html',
  styleUrls: ['./alunos-cadastro.component.css']
})
export class AlunosCadastroComponent implements OnInit {
  aluno = new Aluno();
  form!: FormGroup;


  constructor(
    private alunosService: AlunoService,
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private messageService: MessageService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.pattern('[0-9]{11}')]]
    });
  }

  salvar(form: NgForm) {
    console.log(form);
    if (this.form.invalid) return;

    this.spinner.show();

    setTimeout(() => {
      // Aqui simula o salvamento e mostra o toast
      this.messageService.add({
        severity: 'success',
        summary: 'Sucesso',
        detail: 'Aluno salvo com sucesso!'
      });

      this.spinner.hide();
      this.router.navigate(['/alunos']);
    }, 1500);
  }

  cadastrarAluno(form: NgForm) {
    console.log(this.aluno);

  }
}