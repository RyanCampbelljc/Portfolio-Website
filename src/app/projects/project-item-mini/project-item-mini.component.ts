import { Component, Input } from '@angular/core';
import { Project } from '../../services/project-card/projects.service';

@Component({
  selector: 'app-project-item-mini',
  standalone: true,
  imports: [],
  templateUrl: './project-item-mini.component.html',
  styleUrl: './project-item-mini.component.css'
})
export class ProjectItemMiniComponent {
  @Input() project!: Project;
}
