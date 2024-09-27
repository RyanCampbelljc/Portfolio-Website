import { Component, Input } from '@angular/core';
import { NavbarItemComponent } from './navbar-item/navbar-item.component'

@Component({
	selector: 'app-navbar',
	standalone: true,
	imports: [NavbarItemComponent],
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.css'
})
export class NavbarComponent {
	//todo make this list of navbar items
	@Input() navbarItems: NavbarItemComponent[] = [];
}
