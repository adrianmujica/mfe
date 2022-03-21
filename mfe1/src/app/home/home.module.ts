import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./home.component";
import { RouterModule } from "@angular/router";


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    // this must be forchild because is a remote app
    RouterModule.forChild([{path: '', component: HomeComponent}])
  ]
})
export class HomeModule {
}
