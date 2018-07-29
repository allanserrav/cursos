import { Component, OnInit } from '@angular/core';
import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private service: TarefaService) { }

  ngOnInit() {
    this.listarTodos();
  }

  listarTodos(): void {
    this.tarefas = this.service.listarTodos();
  }

  remover($event:any, tarefa: Tarefa): void {
    $event.preventDefault();
    if(confirm("Deseja excluir a tarefa " + tarefa.nome + "?")) {
      this.service.remover(tarefa.id);
      this.listarTodos();
    }
  }

  alterarStatus(tarefa: Tarefa): void {
    if(confirm("Deseja mudar o status da tarefa " + tarefa.nome + "?")) {
      this.service.alterarStatus(tarefa.id);
    }
  }

}
