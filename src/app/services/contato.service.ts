import { EventEmitter, Injectable } from '@angular/core';
import { Contato } from '../models/Contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor() { }

  private readonly chave:string = "CONTATOS"

  static onChangeContatos:EventEmitter<Contato[]> = new EventEmitter();

  getContatos():Contato[] {

    let dados = window.localStorage.getItem(this.chave);

    if(dados){
      let contatos:Contato[] = JSON.parse(dados);

      return contatos;
    } else{
      window.localStorage.setItem(this.chave, "[]")

      return []
    }
  }

  addContato(contato:Contato): void {
    let contatos = this.getContatos();

    contatos.push(contato);

    window.localStorage.setItem(this.chave, JSON.stringify(contatos));

    ContatoService.onChangeContatos.emit(contatos);
  }

}
