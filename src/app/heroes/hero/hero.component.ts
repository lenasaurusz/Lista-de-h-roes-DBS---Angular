import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'batman';
  public age: number = 34;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero(): void {
    this.name = 'Flash'
  }

  changeAge(): void {
    this.age = 20;
  }

  resetForm(): void {
    // this.name = 'batman';
    this.age = 34;

    //document.querySelectorAll('h1')!.forEach ( element => {
    //  element.innerHTML = '<h1>Desde Angular</h1>';
    //});
  }
}
