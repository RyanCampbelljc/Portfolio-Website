import { HeroComponent } from './hero/hero.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HeroComponent, AboutComponent, ProjectsComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-site';

  ngAfterViewInit(){
    const elements = document.querySelectorAll('[custom-animation]');
    const observer = new IntersectionObserver((entries) =>{
      entries.forEach((entry) => {
        if(entry.isIntersecting){
          const animationClass = entry.target.getAttribute('custom-animation');
          if(animationClass)
            entry.target.classList.add(animationClass);
          else
            console.error("No custom animation on attribute")
        }
      });
    }, {threshold: 0})
    elements.forEach((element) => {
      observer.observe(element);
    });
  }
}
