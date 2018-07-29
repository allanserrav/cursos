import { Component, OnInit, ViewChild } from '@angular/core';
import { Tarefa, TarefaService } from '../shared';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.css']
})
export class EditarTarefaComponent implements OnInit {

  @ViewChild('formTarefa')
  formTarefa: NgForm;
  tarefa: Tarefa;

  constructor(
    private service: TarefaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    this.tarefa = this.service.buscarPorId(id);
  }

  atualizar(): void {
    if(this.formTarefa.form.valid) {
      this.service.atualizar(this.tarefa);
      this.router.navigate(['/tarefas']);
    }
  }

}