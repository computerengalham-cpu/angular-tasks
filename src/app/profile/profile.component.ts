import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  name: string = "Elham"
  isLoggedIn: boolean = false

  toggleLogin(){
    this.isLoggedIn=!this.isLoggedIn
  }

  skills:string[]=["Angular","TypeScript","HTML","CSS"]

  userRole='editor'
}
