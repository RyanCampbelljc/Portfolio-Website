import { Component } from '@angular/core';
import { ProjectItemComponent } from './project-item/project-item.component';
import { ProjectItemMiniComponent } from './project-item-mini/project-item-mini.component';
import { ProjectsService } from '../services/project-card/projects.service';
import { Project } from '../services/project-card/projects.service';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectItemComponent, ProjectItemMiniComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projectService: ProjectsService;
  projectList: Project[];
  mainProjectList: Project[];
  miniProjectList: Project[];

  constructor(private ps: ProjectsService){
    this.projectService = ps;
    this.projectList = this.projectService.getProjects();
    this.mainProjectList = this.projectList.slice(0,3);
    this.miniProjectList = this.projectList.slice(3)
  }

}
