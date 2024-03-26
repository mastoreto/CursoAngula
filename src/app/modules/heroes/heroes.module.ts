import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeroComponent, ListComponent } from './components';


@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],
  exports: [
    HeroComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule{}
