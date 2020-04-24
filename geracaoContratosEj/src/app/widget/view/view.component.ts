import { Component, OnInit } from '@angular/core';
import { MetodosServiceService } from '../../widget/metodos-service.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  public Editor = ClassicEditor;
  public selCampo: string;
  public titulo = "Gerador de Contrato";
  public ConfigUpload = {}; // lembrar de setar as config de upload da imagem
  public model = {
    editorData: 'Hello, world!'
  };
  public categoriasContratacao = [
    { label: 'Option 1', value: '1' },
  ]
  public camposFormulario = [
    { label: "Nome", value: "{{nome}}" },
    { label: "Endereço", value: "{{endereco}}" }
  ];
  constructor(
    private camposService: MetodosServiceService
  ) { }

  ngOnInit(): void {
    this.addCategorias();
  }
  addCategorias() {
    this.categoriasContratacao.push({ label: 'Option 2', value: '2'})
  }


  addInterpolacoes() {
    this.camposService.getCamposFormulário().subscribe((res: any) => {
      console.log(res);
      res.array.forEach(element => {
        let campo_label = element.campos.split("_", " ");
        this.camposFormulario.push({ label: campo_label, value: element.interpolacao });
        
      });
           
    })
  }

  changeCampo() {
    let interpolacao = this.selCampo;
    navigator.clipboard.writeText(interpolacao);
    
  }
  
  excluirContrato() {
    this.model.editorData = "";
  }

  salvarContrato() {

  }

}
