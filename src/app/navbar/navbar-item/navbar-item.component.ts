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
}