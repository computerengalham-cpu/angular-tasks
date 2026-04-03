import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [{ path: 'about', component: AboutComponent },{ path: 'parent', component: ParentComponent },];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
