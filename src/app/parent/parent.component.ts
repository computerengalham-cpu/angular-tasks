import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  message: string = '';        // من parent → child
childData: string = '';      // من child → parent

onReceive(value: any) {
  this.childData = value;
}
  receivedData: string = '';



}
