import { Component, Input } from '@angular/core';
import { Project } from '../../services/project-card/projects.service';
@Component({
  selector: 'app-project-item',
  standalone: true,
  imports: [],
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.css'
})
export class ProjectItemComponent {
  @Input() project!: Project;
}
