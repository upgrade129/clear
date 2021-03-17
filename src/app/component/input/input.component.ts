import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

export interface Detail{
  date:string;
  usedfor:string;
  option:string;
  amount:number;
}
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Output() getDetials = new EventEmitter();

  detials=[]

  detail:Detail=
    {date:"04/04/2020",
     usedfor:"dinner",
     option:"cash",
     amount:23};
  constructor() { }

  ngOnInit() {
    
  }

  add(date,usedfor,option,amount){
    this.detail.date=date;
    this.detail.usedfor=usedfor;
    this.detail.option=option;
    this.detail.amount=amount;
    console.log("detials",this.detail);
    this.detials.push(this.detail);
    console.log(this.detials);

    this.getDetials.emit(this.detials);
  }

 


  
}
