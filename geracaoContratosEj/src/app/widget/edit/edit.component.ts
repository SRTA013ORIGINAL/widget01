import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public titulo: string = "Gerador de Contrato (Edit)";
  public static endereco_servico: string;
  constructor() { }

  ngOnInit(): void {
  }

  addServico() {
    
  }

}
