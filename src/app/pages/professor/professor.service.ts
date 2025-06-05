import { Injectable } from '@angular/core';
import { Professor } from '../core/models/professor.model';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
 professorUrl: string = '';

  constructor(private http: HttpClient) {
    this.professorUrl =
    'https://67e4bd942ae442db76d56458.mockapi.io/professor';
  }

  // Método para listar os professores, retorna uma promise
    listar(): Promise<any> {
      return firstValueFrom(this.http.get(this.professorUrl)).then(
        (response: any) => {
          return response;
        }
      );
    }
    adicionar(obj: Professor): Promise<Professor> {
        return firstValueFrom(this.http.post<Professor>(this.professorUrl, obj));
      }

      buscarPorId(id: number) {
        return firstValueFrom(this.http.get(`${this.professorUrl}/${id}`)).then(
          (response) => response as any
        );
      }

      atualizar(obj: Professor): Promise<Professor> {
        return firstValueFrom(
          this.http.put<Professor>(`${this.professorUrl}/${obj.idprofessor}`, obj)
        ).then((response) => response as Professor);
      }
}