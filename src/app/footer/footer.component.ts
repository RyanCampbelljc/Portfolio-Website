import { Component } from '@angular/core';
import { ScrollService } from '../services/scroll/scroll.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  scrollService: ScrollService;

  constructor(private ss: ScrollService){
    this.scrollService = ss;
  }
}
