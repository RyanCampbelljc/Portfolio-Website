import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  errorMessage! : HTMLDivElement;
  form! : HTMLFormElement;

  ngAfterViewInit(){
    this.errorMessage = document.getElementById("error-message") as HTMLDivElement;
    this.form = document.getElementById("content-input-container") as HTMLFormElement;
  }

  onSubmit(name: string, email: string, message: string){
    let validForm: boolean = true;
    if(name == "" || email == "" || message == ""){
      this.errorMessage.removeAttribute("hidden");
      validForm = false;
    }

    if(validForm){
      //runs in the case where they fill it our wrong then correctly
      this.errorMessage.setAttribute("hidden","true");
      this.form!.reset();   
    }


  }
}
