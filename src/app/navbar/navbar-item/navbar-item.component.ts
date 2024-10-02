import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-item',
  standalone: true,
  imports: [],
  templateUrl: './navbar-item.component.html',
  styleUrl: './navbar-item.component.css'
})

//@input allows NavbarItem to communicate with its parent(Navbar)
//NavbarItem will get the label in the html from the parent
export class NavbarItemComponent {
  @Input() label: string = "";
  @Input() ref: string = "";

  // When a navrbar item is clicked, it is smoothly scrolled into view.
  scrollToRef(){
    //substring to remove the '#' at the front of the ref string.
    const elem = document.getElementById(this.ref.substring(1));
    elem?.scrollIntoView({ behavior: "smooth"});
  }
}