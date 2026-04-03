//q1:What is the purpose of the src/app/ folder?
//ans:it contain components


//q2:What does app.component.ts contain?
//ans: it contain component class ,selector,template and style


//q3:What is the role of app.module.ts?
//ans:when we add component its directly appear in import and declarations


//q4:Where would you add global CSS styles?
//ans: in src/styles.css

//q5:What does angular.json control?
//ans:configuration for every things in project (how angular project is built,served, and managed)



import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project1';
}
