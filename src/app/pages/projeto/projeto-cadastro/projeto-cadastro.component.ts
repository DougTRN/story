import { Component, OnInit } from '@angular/core';
import { ProjetoService } from '../projeto.service';
import { Projeto } from '../../core/models/projeto.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-projeto-cadastro',
  templateUrl: './projeto-cadastro.component.html',
  styleUrls: ['./projeto-cadastro.component.css']
})
export class ProjetoCadastroComponent implements OnInit {
  projeto = new Projeto();
  constructor(
    private projetoService: ProjetoService

  ) { }

  ngOnInit() {
  }

  salvar(form: NgForm){
    console.log(form);

  }

  cadastroProjeto(form: NgForm){
    console.log(this.projeto);
  }

}
