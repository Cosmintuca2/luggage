import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Luggage } from '../luggage';

@Component({
  selector: 'app-luggage-item',
  templateUrl: './luggage-item.component.html',
  styleUrls: ['./luggage-item.component.css']
})
export class LuggageItemComponent implements OnInit {

  @Input() luggage: Luggage;
  @Output() retrieveLuggage: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  retrieveThisLuggage() {
    this.retrieveLuggage.emit();
  }

}
