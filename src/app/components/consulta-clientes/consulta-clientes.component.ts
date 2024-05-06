import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente.model';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table'

@Component({
  selector: 'app-consulta-clientes',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule
  ],
  templateUrl: './consulta-clientes.component.html',
  styleUrl: './consulta-clientes.component.css'
})
export class ConsultaClientesComponent implements OnInit {
  columns = ['id', 'nome', 'cpf', 'telefone', 'email'];
  
  clientes: Cliente[] = [];

  constructor(
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.clienteService.consultar()
      .subscribe({
        next: (data) => { this.clientes = data; },
        error: (e) => { console.log(e.error); }
      })
  }

}
