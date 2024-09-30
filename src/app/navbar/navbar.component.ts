import { Component, Input,HostListener  } from '@angular/core';
import { NavbarItem } from './navbarItem';
import { CommonModule } from '@angular/common';
@Component({
	selector: 'app-navbar',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.css'
})
export class NavbarComponent {
	@Input() navbarData: { label: string}[] = [];
	navbarItems: NavbarItem[] = [];
	
	ngOnInit(): void {
		this.navbarData.forEach(itemData => {
		  const navbarItem = new NavbarItem(itemData.label);
		  this.navbarItems.push(navbarItem);
		});
	}

	// @HostListener('window:scroll', [])
	// onWindowScroll() {
	// 	const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

	// 	// Adjust the navbar class based on the scroll position
	// 	if (scrollPosition > 100) {
			
	// 	} else {
		
	// 	}
	// }
}
