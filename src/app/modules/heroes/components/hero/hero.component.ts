import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:string = 'ironaman';
  public age:number = 30;

  get capitalizedName():string{
    return this.name.toLocaleUpperCase();
  }

  get heroDesciption():string{
    return `${this.capitalizedName} - ${this.age}`;
  }

  public changeName():void{
    let value = prompt('Ingrese el nombre: ') as string;
    this.name = value;
  }

  public changeAge():void{
    let value = prompt('Ingrese la edad: ') as string;
    this.age = Number(value);
  }

  public reset():void{
    this.name = 'ironman';
    this.age = 30;
  }

}
