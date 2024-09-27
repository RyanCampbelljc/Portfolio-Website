import { Component, Input } from '@angular/core';
import { AboutImageComponent } from './about-image/about-image.component';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AboutImageComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  @Input() imageList: AboutImageComponent[] = [];
}
