import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';
import { Professor } from '../../core/models/professor.model';
import { ProfessorService } from '../professor.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-professor-lista',
  templateUrl: './professor-lista.component.html',
  styleUrls: ['./professor-lista.component.css']
})
export class ProfessorListaComponent implements OnInit {
  professores: Professor[] = [];
  msgs: Message[] = [];
  carregando = true; // Você pode remover isso se o spinner já gerencia o estado visual de "carregando"

  constructor(
    private professorService: ProfessorService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    // Chama o método para carregar os professores quando o componente é inicializado
    this.carregarProfessores();
  }

  // Este é o método separado para carregar os professores
  carregarProfessores() {
    this.spinner.show(); // Mostra o spinner
    this.carregando = true; // Define o estado de carregamento (opcional, se o spinner já indica isso)

    this.professorService.listar()
      .then((data: Professor[]) => { // Use 'data' ou 'obj' para o retorno da Promise
        this.professores = data; // Atribui os dados à sua lista de professores
      })
      .catch((error) => { // Captura erros
        console.error('Erro ao carregar professores:', error);
        this.msgs.push({ severity: 'error', summary: 'Erro', detail: 'Erro ao carregar professores' });
      })
      .finally(() => {
        this.carregando = false; // Garante que o estado de carregamento seja false no final
        this.spinner.hide(); // Esconde o spinner
      });
  }
}
