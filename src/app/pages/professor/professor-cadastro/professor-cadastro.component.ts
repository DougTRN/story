import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-professor-cadastro',
  templateUrl: './professor-cadastro.component.html',
  styleUrls: ['./professor-cadastro.component.css'],
})
export class ProfessorCadastroComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private spinner: NgxSpinnerService,
    private messageService: MessageService // Injeção do MessageService, já provido no CoreModule
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required]
    });
  }

  salvar() {
    if (this.form.invalid) return;

    this.spinner.show(); // Mostra o spinner ao salvar

    setTimeout(() => {
      // Exibe a mensagem de sucesso
      this.messageService.add({
        severity: 'success',
        summary: 'Sucesso',
        detail: 'Professor salvo com sucesso!'
      });

      this.spinner.hide(); // Esconde o spinner após salvar
      this.router.navigate(['/professores']); // Redireciona para a lista de professores
    }, 1500);
  }
}
