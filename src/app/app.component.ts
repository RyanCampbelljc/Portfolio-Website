import { HeroComponent } from './hero/hero.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HeroComponent, AboutComponent, ProjectsComponent,ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-site';

  ngAfterViewInit() {
    this.navbarHighlightsOnScroll();
  }

  private  navbarHighlightsOnScroll(){
    const sections = document.querySelectorAll('.page-section');
    const navLinks = document.querySelectorAll('nav a');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        const link = document.querySelector(`a[href="#${id}"]`);

        if (entry.isIntersecting) {
          navLinks.forEach(link => link.classList.remove('active'));
          link!.classList.add('active');
        }
      });
    }, {
      threshold: 0.7 // when 70% of target is visible, the callback is invoked
    });

    sections.forEach(section => observer.observe(section));
  }
}
