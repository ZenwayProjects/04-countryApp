import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [],
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  constructor() {}

  @Input()
  public placeholder: string = '';

  @Output()
  onValue = new EventEmitter<string>();

  @Output()
  onDebounce = new EventEmitter<string>();

  private debouncer: Subject<string> = new Subject<string>();

  private debouncerSuscription?: Subscription

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer.pipe(debounceTime(500)).subscribe((value) => {
      this.onDebounce.emit(value);
    });
  }

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }

  public emitInput(input: string) {
    this.onValue.emit(input);
  }

  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm);
  }
}
