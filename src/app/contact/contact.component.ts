import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  nameError : HTMLDivElement | null = null;
  emailError : HTMLDivElement | null = null;
  messageError : HTMLDivElement | null = null;

  ngAfterViewInit(){
    this.nameError = document.getElementById("name-error-message") as HTMLDivElement;
    this.emailError = document.getElementById("email-error-message") as HTMLDivElement;
    this.messageError = document.getElementById("message-error-message") as HTMLDivElement;
    //todo if any of these are null print an error
  }

  onSubmit(name: string, email: string, message: string){
    let validForm: boolean = true;
    if(name == ""){
      this.nameError?.removeAttribute("hidden");
      validForm = false;
    }
    if(email == ""){
      this.emailError?.removeAttribute("hidden");
      validForm = false;
    }
    if(message == ""){
      this.messageError?.removeAttribute("hidden");
      validForm = false;
    }

    if(validForm){
      
    }


  }
}
