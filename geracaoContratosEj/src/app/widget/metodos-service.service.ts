import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MetodosServiceService {
  categoriaContratacao = `${environment.apiCategoriaContratacao}`;
  camposFormulario = `${environment.datasetCamposFormulario}`;
  constructor(
    private http: HttpClient,
  ) { }

  getCategoriasContratacao = () => {
    //pegar endereço e parametros com o mike
    //return this.http.get(`${this.categoriaContratacao}/`);
  }

  getCamposFormulário() {
    let data = { "name": 'ds_interpolcao_campos_ej', "constraints": [] };
    return this.http.post(`${this.camposFormulario}`, data);
  }
}
