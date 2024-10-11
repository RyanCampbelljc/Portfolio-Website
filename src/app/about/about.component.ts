import { Component, Input } from '@angular/core';
import { AboutImageComponent } from './about-image/about-image.component';
import { AboutImagesService, ImageInfo } from '../services/about/about-images.service';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AboutImageComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  imageService: AboutImagesService;
  imageList: ImageInfo[];
  constructor(private service: AboutImagesService){
    this.imageService = service;
    this.imageList = this.imageService.getSkillCards();
  }
}
