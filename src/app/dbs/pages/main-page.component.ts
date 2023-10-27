import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbsService } from '../services/dbs.service';

@Component({
  selector: 'app-dbs-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  constructor(private dbsService: DbsService ) {}

  get characters() : Character[] {
    return [...this.dbsService.characters];
  }

  onDeleteCharacter( id: string ): void {
    this.dbsService.deleteCharacterById( id );
  }

  onNewCharacter( character: Character ): void {
    this.dbsService.addCharacter( character );
  }

}
