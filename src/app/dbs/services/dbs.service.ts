import { Injectable } from "@angular/core";
import { v4 as uuid } from 'uuid';

import { Character } from "../interfaces/character.interface";

@Injectable({
  providedIn: 'root'
})

export class DbsService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Bills',
    level: 1000,
  },{
    id: uuid(),
    name: 'Goku',
    level: 905,
  },{
    id: uuid(),
    name: 'Bulma',
    level: 505,
  },{
    id: uuid(),
    name: 'Zamasu',
    level: 863,
  },{
    id: uuid(),
    name: 'Piccolo',
    level: 810,
  },{
    id: uuid(),
    name: 'Whiz',
    level: 1100,
  }];

  addCharacter( character: Character ): void {

    const newCharacter: Character = {
      id: uuid(), ...character

    };
    this.characters.push( newCharacter );
  }

  //onDeleteCharacter ( index: number ) {
    //this.characters.splice( index, 1 );

  deleteCharacterById( id: string ) {
    this.characters = this.characters.filter (
      character => character.id !== id
    );
  }

}
