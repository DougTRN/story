import { Component, OnInit } from '@angular/core';
import { ProjetoService } from '../projeto.service';

@Component({
  selector: 'app-projeto-lis',
  templateUrl: './projeto-lis.component.html',
  styleUrls: ['./projeto-lis.component.css']
})

export class ProjetoLisComponent implements OnInit {
[x: string]: any;

  projeto = [];

  constructor(
    private projetoService: ProjetoService
  ) { }

  ngOnInit() {
    this.carregarProjeto();
  }

  carregarProjeto(){
    this.projetoService.listar().then((obj) => {
      this.projeto = obj;
    });
  }

}
