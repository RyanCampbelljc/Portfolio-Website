import { Component } from '@angular/core';
import { ProjectItemComponent } from './project-item/project-item.component';
import { ProjectsService } from '../services/project-card/projects.service';
import { Project } from '../services/project-card/projects.service';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectItemComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projectService: ProjectsService;
  projectList: Project[];

  constructor(private ps: ProjectsService){
    this.projectService = ps;
    this.projectList = this.projectService.getProjects();
  }

}
