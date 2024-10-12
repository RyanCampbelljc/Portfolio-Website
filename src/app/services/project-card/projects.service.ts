import { Injectable } from '@angular/core';

export interface Project {
  imgSrc: string;
  name: string;
  description: string;
  skills: string[];
  links: {logoClass: string, href: string}[];
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  // projects: Project[] =[];

  readonly CITY_DESCRIPTION: string = "This project is a 3D city simulation built using OpenGL. The city uses texture mapping and dynamic lighting to create a realistic environment. Users can explore the urban landscape with an interactive camera.";
  readonly SCENE_MANAGEMENT_DESCRIPTION: string = "This project implements a scene management system in OpenGL using a quad tree structure and frustum culling for optimized rendering. Each object in the scene is represented by a node with a spherical bounding volume. Each top level node in a heiarchy is placed in the quadtree."
  readonly PARTICLE_SYSTEM_DESCRIPTION: string = "Particle system designed to simulate real-time particle effects like fire, smoke, or explosions. The particle effects can be customized in XML files to change properties such as color, texture, duration, velocity, spawn rate, and pool size. Each particle emitter manages 1 pool of particles renders all particles in one draw call in order to improve efficiency."
  readonly PONG_DESCRIPTION: string = "A recreation of the classic pong game in TypeScript. Supports lobby creation in order to play with friends online.";
  readonly MINESWEEPER_DESCRIPTION: string = "A recreation of minesweeper. One of the first projects I did. Recently refactored in TypeScript."
  
  readonly PROJECT_CITY: Project = {imgSrc: "assets/project-images/OpenglCity.png", name: "OpenGL City", description: this.CITY_DESCRIPTION, 
    skills: ["C++", "OpenGL"], links:[{logoClass: "fa-github", href: "https://github.com/RyanCampbelljc/OpenGL-City"}]};
  
  readonly PROJECT_SCENE_MANAGMENT: Project = {imgSrc: "assets/project-images/SceneManagement.png", name: "Scene Management", description: this.SCENE_MANAGEMENT_DESCRIPTION,
    skills: ["C++", "OpenGL"], links:[{logoClass: "fa-github", href: "https://github.com/RyanCampbelljc/OpenGL-Scene-Management"}]
  }
  
  readonly PROJECT_PARTICLE_SYSTEM: Project = {imgSrc: "assets/project-images/particleSystem.png", name: "Particle System", description: this.PARTICLE_SYSTEM_DESCRIPTION,
    skills: ["C++", "OpenGL"], links:[{logoClass: "fa-github", href: "https://github.com/RyanCampbelljc/OpenGL-Particle-System"}]
  }
  
  readonly PROJECT_PONG: Project = {imgSrc: "assets/project-images/pong.png", name: "Pong", description: this.PONG_DESCRIPTION,
    skills: ["TypeScript", "HTML", "CSS", "ExpressJS", "NodeJS", "SocketIO",], links:[{logoClass: "fa-github", href: "https://github.com/RyanCampbelljc/pong"},
      {logoClass: "fa-external-link", href: "https://ryanjc.ca/pong"}]
    }
  
  readonly PROJECT_MINESWEEPER: Project = {imgSrc: "assets/project-images/MineSweeper.png", name: "Minesweeper", description: this.MINESWEEPER_DESCRIPTION,
    skills: ["TypeScript", "HTML", "CSS"], links:[{logoClass: "fa-external-link", href: "https://ryanjc.ca/MineSweeper/"}, 
      {logoClass: "fa-github", href: "https://github.com/RyanCampbelljc/Minesweeper"}]
    }
  
  readonly PROJECT_WEBSITE: Project = {imgSrc: "", name: "This Website!", description: "",
    skills: ["HTML", "CSS", "Angular", "Tailwind"], links:[{logoClass: "fa-github", href: "https://github.com/RyanCampbelljc/Portfolio-Website"}]}
      

  getProjects(): Project[] {
    return [this.PROJECT_SCENE_MANAGMENT, this.PROJECT_PARTICLE_SYSTEM, this.PROJECT_PONG, this.PROJECT_CITY, this.PROJECT_MINESWEEPER, this.PROJECT_WEBSITE];
  }
}