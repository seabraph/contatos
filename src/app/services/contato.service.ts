import { Injectable } from '@angular/core';
import { Contato } from '../models/Contato';

const CONTATOS:Contato[] = [
  {
    nome: "Raphael Seabra",
    email: "raphaeltibinha@gmail.com",
    telefones: ["9999-3333"]
  },
  {
    nome: "Ana Clara",
    email: "anacjus@gmail.com",
    telefones: ["2222-4444"]
  },
  {
    nome: "Maria Ines",
    email: "mariaines@gmail.com",
    telefones: ["6666-1111"]
  },
  {
    nome: "Rubens Justus",
    email: "tibao@gmail.com",
    telefones: ["5555-2222"]
  },
  {
    nome: "Philippe Seabra",
    email: "tibornex@gmail.com",
    telefones: ["8888-2222"]
  },
]

@Injectable({
  providedIn: 'root'
})

export class ContatoService {

  constructor() { };

  getContatos():Contato[]{
    return CONTATOS;
  };

  addContato(contato:Contato):void{
    CONTATOS.push(contato);
  };
};
