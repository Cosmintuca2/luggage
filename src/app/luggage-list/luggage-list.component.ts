import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Luggage } from '../luggage';

@Component({
  selector: 'app-luggage-list',
  templateUrl: './luggage-list.component.html',
  styleUrls: ['./luggage-list.component.css']
})
export class LuggageListComponent implements OnInit {

  @Input() luggagesList: Luggage[];
  @Output() retrieve: EventEmitter<Luggage> = new EventEmitter<Luggage>();


  constructor() { }

  ngOnInit(): void {
  }

  retrieveLuggage(item: Luggage) {
    this.retrieve.emit(item);
  }

}
