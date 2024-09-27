import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-image',
  standalone: true,
  imports: [],
  templateUrl: './about-image.component.html',
  styleUrl: './about-image.component.css'
})
export class AboutImageComponent {
  @Input() title: string = "";
  @Input() imageLink: string = "";
}
