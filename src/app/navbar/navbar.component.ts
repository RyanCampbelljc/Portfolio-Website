import { Component, Input} from '@angular/core';
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
	@Input() navbarData: {label:string, ref:string }[] = [];
	ngAfterViewInit() {
		window.onscroll = this.navbarHighlightsOnScroll;
		//scroll function is also called on page refresh as long as the scroll bar 
		//isnt at the top of the screen. To account for this case I called the function here.
		this.navbarHighlightsOnScroll();
	}

	private navbarHighlightsOnScroll(){
		const navLinks = document.querySelectorAll('nav a');
		const pageSections = document.querySelectorAll('.page-title');
		const halfVPWidth = window.visualViewport?.height! / 2;
		let sectionToUpdate;
		let linkToUpdate = -1;
		pageSections.forEach((section) => {
			if(section.getBoundingClientRect().y < halfVPWidth){
				sectionToUpdate = section;
				++linkToUpdate;
			}
		})
		if(linkToUpdate >= 0){
			navLinks.forEach(link => link.classList.remove('active'));
			navLinks[linkToUpdate].classList.add('active');
		}else {
			console.error("No page-title is above 1/2 VP height")
		}


	}
}
