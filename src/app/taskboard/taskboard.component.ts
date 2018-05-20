import { Component, Output, EventEmitter, Input } from '@angular/core';
import { UtilService } from '../util.service';

@Component({
  selector: 'task-board',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.css']
})

export class TaskboardComponent {

  status = this.utilityService.getStatusTypes();

   @Input() toggle

  constructor(private utilityService: UtilService) {}

}
