import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Contato } from 'src/app/models/Contato';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
  selector: 'app-create-contato',
  templateUrl: './create-contato.component.html',
  styleUrls: ['./create-contato.component.css']
})
export class CreateContatoComponent implements OnInit {

  @Output() onCancelarClick:EventEmitter<null> = new EventEmitter();
  @Output() onSalvarClick:EventEmitter<null> = new EventEmitter();
  
  novoContato:Contato = {
    nome:"",
    email:"",
    telefones:[""]
  }

  cs:ContatoService = new ContatoService();

  constructor() { }

  cancelar(){
    this.onCancelarClick.emit()
  }

  track(index:number, value:string){
    return index;
  }

  ngOnInit(): void {
  }

  addTelefone():void{
    this.novoContato.telefones.push("");
  }

  salvar(){
    this.onSalvarClick.emit()
    this.cs.addContato(this.novoContato);
    this.novoContato = {
      nome:"",
      email:"",
      telefones:[""]
    }

  }

  removeTelefone(pos:number):void{
    this.novoContato.telefones.splice(pos,1);
  }

}
