import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Luggage } from '../luggage';

@Component({
  selector: 'app-add-luggage',
  templateUrl: './add-luggage.component.html',
  styleUrls: ['./add-luggage.component.css']
})
export class AddLuggageComponent implements OnInit {

  @Input() luggageItem: Luggage = new Luggage(null, null, '' );
  @Output() formSubmit: EventEmitter<Luggage> = new EventEmitter<Luggage>();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.formSubmit.emit(form.value);
    form.reset();
  }
}
