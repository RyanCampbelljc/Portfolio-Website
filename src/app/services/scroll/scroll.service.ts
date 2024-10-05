import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor() { }

  scrollToRef(id: string){
    const elem = document.getElementById(id);
    elem?.scrollIntoView({ behavior: "smooth"});
  }
}
