import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { Projeto } from "../core/models/projeto.model";

  @Injectable({

    providedIn: 'root',

  })

  export class ProjetoService {
    projetoUr1: string = '';


    constructor(private http: HttpClient)  {
      this.projetoUr1 = 
        'https://67f73eb042d6c71cca6472ab.mockapi.io/proj/grade';
    }
    
    listar(): Promise<any> {
      return firstValueFrom(this.http.get(this.projetoUr1)).then(
        (Response: any) => {
          return Response;
        }
      );
    }

    adicionar(obj: Projeto): Promise<Projeto>{
      return firstValueFrom(this.http.post<Projeto>(this.projetoUr1, obj));

    }
  }