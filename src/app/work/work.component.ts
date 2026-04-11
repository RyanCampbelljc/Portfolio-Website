import { WorkService, WorkCard } from './../services/work/work.service';
import { Component } from '@angular/core';
import { WorkItemComponent } from './work-item/work-item.component';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [WorkItemComponent],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent {
  workService: WorkService;
  workCardList: WorkCard[];

  constructor(ws: WorkService) {
    this.workService = ws;
    this.workCardList = this.workService.getWorkInformation();
  }
}
