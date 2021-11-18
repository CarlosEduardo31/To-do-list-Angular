import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-list-create',
  templateUrl: './list-create.component.html',
  styleUrls: ['./list-create.component.css']
})

export class ListCreateComponent implements OnInit {

  tarefa = '';
  tarefas: Array<string> = [];

  displayedColumns = ['name'];

  constructor(private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Lista',
      icon: 'view_list',
      routeUrl: '/products'
    }
  }

  ngOnInit(): void {
  }

  adicionarTarefa() {
    if (this.tarefa === "") {
      alert('Por favor preencha o campo para adicionar uma nova tarefa!')
    } else {
      this.tarefas.push(this.tarefa)

    }
    this.tarefa = ''
  }

  removerTarefa(item: string) {
    this.tarefas.splice(this.tarefas.indexOf(item), 1)
  }

  editarTarefa(item: string) {
    if (this.tarefa === "") {
      alert('Por favor preencha o campo para editar!')
    } else {
      let index = this.tarefas.indexOf(item)
      this.tarefas[index] = this.tarefa
    }
    this.tarefa = ''
  }

}
