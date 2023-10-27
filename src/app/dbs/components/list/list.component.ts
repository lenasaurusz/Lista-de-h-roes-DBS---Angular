import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbs-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character [] = [{
    name: 'Baby Trunks ',
    level: 10,
  }];

  @Output()
    public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string ): void {
    //TODO: Emitir el ID del personaje

    if( !id ) return;

    console.log({ id });

    this.onDelete.emit( id );
  }
}