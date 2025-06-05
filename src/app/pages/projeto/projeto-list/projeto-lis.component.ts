import { Component, OnInit } from '@angular/core';
import { ProjetoService } from '../projeto.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-projeto-lis',
  templateUrl: './projeto-lis.component.html',
  styleUrls: ['./projeto-lis.component.css']
})

export class ProjetoLisComponent implements OnInit {
[x: string]: any;

  projeto = [];
  carregando = true;

  constructor(
    private projetoService: ProjetoService,
    private spinner: NgxSpinnerService 
  ) { }

  ngOnInit() {
    this.carregarProjeto();
  }

  carregarProjeto(){
    this.spinner.show();
    this.carregando = true;

    this.projetoService.listar().then((obj) => {
      this.projeto = obj;
      this.carregando = false;
      this.spinner.hide();
    });
  }

}
