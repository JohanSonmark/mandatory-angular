import { BehaviorSubject } from 'rxjs';
import { Observable } from "rxjs/Observable";
import { Task, StatusType } from './constants';

export class TaskService {


  private taskId = 0;
  private tasks: Task[] = [];

  subject = new BehaviorSubject([])

   getTasks(status: StatusType): Observable<Task[]> {
    return this.subject.asObservable()
    .map(tasks => tasks.filter(task => task.status === status));
   }

  updateTask(id: number, status: StatusType) {
    this.tasks.map( task =>  task.id === id ? task.status = status : task)
    this.updateSubscribers()
  }

  addTask(title: string, description: string) {
    this.tasks.push(
      {
        id: ++this.taskId,
        status: StatusType.NotStarted,
        title: title,
        description: description,
      }
    );
    this.updateSubscribers()
  }

  updateSubscribers(){
    this.subject.next(this.tasks)

  }

}
