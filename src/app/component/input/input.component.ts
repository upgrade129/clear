import { DatePipe } from '@angular/common';
import { Component, OnInit ,Output,EventEmitter, Input, SimpleChanges, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

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

  @Output() getDetails = new EventEmitter();
  @Input() data


  details: {}
  tabamount
  taboption
  tabdate=undefined
  tabusedfor
  tabid
  constructor() { }

  ngOnInit() {
  this.ipreset();
  this.dummydata();
    
  }

  dummydata(){
    let values =[
      {
        id:134,
        date:"05-02-2011",
        usedfor:"dinner",
        option:"cash",
        amount:123
      },
      {
        id:135,
        date:"05-12-2013",
        usedfor:"dinner",
        option:"online",
        amount:1232
      },
    ];
    let jsondata =JSON.stringify(values);
    localStorage.setItem('dummydata',jsondata );
  }
  

  add(id,date,usedfor,option,amount){
    let intid : number =+id
    let intamount : number =+amount
    this.details={
      "id":intid,
      "date" : date,
      "usedfor" :usedfor,
      "option" : option,
      "amount" : amount
    }
   console.log("details in input",this.details);

   this.getDetails.emit(this.details);
   this.ipreset();
  }

  ipreset(){
    this.tabusedfor=null
    this.taboption=null
   this.tabamount=0;
   this.tabid=Math.floor((Math.random() * 10000) + 1);
  }

  ngOnChanges(changes : SimpleChanges){
    console.log("tab-details-input",changes.data.currentValue);
    let  tabdata = changes.data.currentValue;
    if(tabdata != undefined){
      this.tabid=tabdata.id;
      this.tabamount=tabdata.amount;
      this.taboption=tabdata.option;
      this.tabusedfor=tabdata.usedfor;
      this.tabdate=tabdata.date;
      console.log("amount",this.tabdate);
    }
    
  }

 


  
}
