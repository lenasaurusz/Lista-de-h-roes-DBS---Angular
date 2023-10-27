import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbs-add-charater',
  templateUrl: './add-charater.component.html',
  styleUrls: ['./add-charater.component.css']
})
export class AddCharaterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();


  public character: Character = {
    name: '',
    level: 0,
  };

  enlistCharacter(): void {

    if( this.character.name.length === 0 ) return;

    this.onNewCharacter.emit(this.character);

    this.character = { name: '', level: 0};

  }

}
