import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Item, LivrosResultado, VolumeInfo } from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class LivroService {
  private readonly API = 'https://www.googleapis.com/books/v1/volumes';
  constructor(private http: HttpClient) {}

  buscar(valorDigitado: string): Observable<Item[]> {
    const params = new HttpParams().set('q', valorDigitado);
    return this.http.get<LivrosResultado>(this.API, { params }).pipe(
      map((livros) => {
        return livros.items ?? [];
      })
    );
  }
}
