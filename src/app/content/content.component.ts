import { Component, OnInit } from '@angular/core';
import { Luggage } from '../luggage';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  totalLuggages: number = 0;
  luggagesList: Luggage[] = new Array<Luggage>();

  constructor() { }

  ngOnInit(): void {
    
  }
  addItem(newLuggage: Luggage) {
    newLuggage.id = this.generateId();
    this.luggagesList.push(newLuggage);
    this.totalLuggages+=1;
  }
  
  deleteThisOne() {
    var input = <HTMLInputElement>document.getElementById('retrieve');
    var inputValue =parseInt( input.value, 10);
    if(this.luggagesList.length != 0)
    {
    var arr = this.luggagesList.filter(item => item.id!= inputValue);
    this.luggagesList=arr;
    input.value='';
    this.totalLuggages-=1;
    } else return alert("There are no luggages!");
  }

  generateId() {
    return Math.floor((Math.random() * 10000) + 1);
  }

  retrieveItem(item: Luggage) {
    let index=this.luggagesList.indexOf(item);
    this.luggagesList.splice(index,1);
    var elapsedTime = this.timeElapsed(item);
    this.calculatePrice(elapsedTime);
    this.totalLuggages-=1;
  }

  timeElapsed(item:Luggage) {
    var time = this.calculateCurrentTime() - this.timeInMinutes(item.currentHour);
    return time;
  }

  timeInMinutes(time) {
    var x = time;
    var a = x.split(':');
    var minutes = a[0] * 60 + +a[1];
    return minutes;
   }

  calculateCurrentTime() {
    var today = new Date();
    var currentTime = today.getHours() + ":" + today.getMinutes();
    var currentTimeInHours = this.timeInMinutes(currentTime);
    return currentTimeInHours;
  }

  calculatePrice(timeSpent) {
    if(timeSpent <= 60 && timeSpent >=0) { 
      return alert("Your price is 10 lei");
    } else if(timeSpent > 60 ) {
      var price = 10 + (Math.floor(timeSpent/60) ) * 5;
      return alert("Your price is " + price + "lei");
    } else {
      return alert("Can't calculate the price for this item");
    } 
  }


}
