import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
studentName:string="Elham"
profileImage:string="https://img.freepik.com/premium-vector/web-designer-programmer-working-desktop-computer-cartoon-woman-coding-different-programming-languages_102902-7000.jpg?"
isDisable:boolean=true
message:string=""

onButtonClick(){
  this.message="Button was clicked!"
}
}
