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
      { title: 'TypeScript', src: 'assets/ts.png' },
      { title: 'Git', src: 'assets/git.png' },
      { title: 'Java', src: 'assets/java.png' },
      { title: 'C++', src: 'assets/c++.png' },
      { title: 'HTML5', src: 'assets/HTML5.png' },
      { title: 'Tailwind', src: 'assets/tailwind.png' },
      { title: 'CSS', src: 'assets/css.png' },
      { title: 'Angular', src: 'assets/angular.png' },
      { title: 'Python', src: 'assets/python.png' },
      { title: 'OpenGL', src: 'assets/opengl.png' },
      { title: 'Godot', src: 'assets/godot.png' },
      { title: 'Cocos Creator', src: 'assets/cocos.png' },
    ]
  }  
}
