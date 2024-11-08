import { Injectable } from '@angular/core';

export interface ImageInfo{
  title: string,
  src: string
}
@Injectable({
  providedIn: 'root'
})
export class AboutImagesService {

  getSkillCards(): ImageInfo[]{
    return [
      { title: 'HTML5', src: 'assets/HTML5.png' },
      { title: 'CSS', src: 'assets/css.png' },
      { title: 'Tailwind', src: 'assets/tailwind.png' },
      { title: 'TypeScript', src: 'assets/ts.png' },
      { title: 'ExpressJS', src: 'assets/express.png' },
      { title: 'Angular', src: 'assets/angular.png' },
      { title: 'NodeJS', src: 'assets/node.png' },
      { title: 'Python', src: 'assets/python.png' },
      { title: 'C++', src: 'assets/c++.png' },
      { title: 'OpenGL', src: 'assets/opengl.png' },
      { title: 'Java', src: 'assets/java.png' },
      { title: 'Godot', src: 'assets/godot.png' },
      { title: 'Git', src: 'assets/git.png' }
    ]
  }  
}
