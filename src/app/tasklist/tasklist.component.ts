import { Component, OnInit, Input } from '@angular/core';
import { UtilService } from '../util.service';
import { TaskService } from '../task.service';
import { StatusType } from '../constants';


@Component({
  selector: 'task-list',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})

export class TasklistComponent implements OnInit{

  subscription;
  tasks;

@Input() status;

  constructor(private taskService: TaskService) {}

  ngOnInit(){

    let listStatus;

    for(let i in StatusType){
    StatusType[i] === this.status? listStatus = this.status : null}

    this.subscription = this.taskService.getTasks(listStatus)
    .subscribe(tasks => this.tasks = tasks)
  }

  handleStatusChanged($event){
    this.taskService.updateTask($event.id, $event.status)
  }

}
