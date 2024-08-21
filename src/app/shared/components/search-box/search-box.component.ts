import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [],
})
export class SearchBoxComponent {
  constructor(){}
  
  @Input()
  public placeholder: string = '';

  @Output()
  onValue = new EventEmitter<string>();



  public emitInput(input:string){
    this.onValue.emit(input)
  }
}
