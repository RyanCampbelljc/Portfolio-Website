import { Component, Input } from '@angular/core';
import { WorkCard } from '../../services/work/work.service';

@Component({
  selector: 'app-work-item',
  standalone: true,
  imports: [],
  templateUrl: './work-item.component.html',
  styleUrl: './work-item.component.css'
})
export class WorkItemComponent {
  @Input() workCard!: WorkCard;
}
