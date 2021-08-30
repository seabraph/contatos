import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/models/Contato';

@Component({
  selector: 'app-lista-de-contatos',
  templateUrl: './lista-de-contatos.component.html',
  styleUrls: ['./lista-de-contatos.component.css']
})
export class ListaDeContatosComponent implements OnInit {

  contatos:Contato[] = [
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
      telefones: ["5555-2222", "5555-2222", "5555-2222", "5555-2222"]
    },
    {
      nome: "Philippe Seabra",
      email: "tibornex@gmail.com",
      telefones: ["8888-2222"]
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
