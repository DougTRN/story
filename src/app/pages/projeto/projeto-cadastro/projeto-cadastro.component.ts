import { Component, OnInit } from '@angular/core';
import { ProjetoService } from '../projeto.service';
import { Projeto } from '../../core/models/projeto.model';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-projeto-cadastro',
  templateUrl: './projeto-cadastro.component.html',
  styleUrls: ['./projeto-cadastro.component.css']
})
export class ProjetoCadastroComponent implements OnInit {
  form!: FormGroup;
  projeto = new Projeto();
  iddisc: number | undefined;
  salvando: boolean = false;

  constructor(
    private projetoService: ProjetoService,
    private fb: FormBuilder,
    private router: Router,
    private spinner: NgxSpinnerService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private title: Title

  ) { }

  ngOnInit() {
    this.iddisc = this.route.snapshot.params['id'];

    this.title.setTitle('Cadastro de Disciplina');

    if(this.iddisc){
      this.spinner.show();
      this.carregarDisciplina(this.iddisc);
    } else {
      this.projeto.status = true;
    }
  }

  get editando() {
    return Boolean(this.projeto.id);
  }

  carregarDisciplina(id: number){
      this.projetoService.buscarPorId(id)
      .then((obj) => {
        this.projeto = obj;
        this.atualizarTituloEdicao();
        this.spinner.hide();
      }).catch((erro) => {
        this.spinner.hide();
       // this.errorHandler.handle(erro);
      })
  }

  atualizarTituloEdicao(){
     this.title.setTitle(`Edição de Projeto:${this.projeto.descricao}`)
  
  }

  salvar(form: NgForm){
    console.log(form);
    if(this.editando) {
      this.atualizarProjeto(form);
    } else {
      this.cadastroProjeto(form);
    }
  }

  cadastroProjeto(form: NgForm){
    this.salvando = true;
    console.log(this.projeto);
    this.projetoService.adicionar(this.projeto).then((obj) => {
      this.messageService.add({severity:'success', summary:'projeto', detail:'cadastrado com sucesso!'});
      this.salvando = false;
      this.router.navigate(['/projeto']);
  });
  }

  atualizarProjeto(form: NgForm){
    this.salvando = true;
    this.projetoService.atualizar(this.projeto)
    .then((obj) => {
      this.projeto = obj;
      this.salvando = false;
      this.messageService.add({
        severity: 'info',
        summary: 'Projeto',
        detail: `${obj.descricao}, alterado com sucesso`
      });
      this.atualizarTituloEdicao();
      this.router.navigate(['/projeto']);
    }).catch((erro) => {
      this.salvando = false;
    })

  }
}
