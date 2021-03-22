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
  tabdate :string
  tabusedfor
  tabid
  constructor() { }

  ngOnInit() {
  this.ipreset();
  
    
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
   this.tabdate = this.getdate()
  }

  getdate():string{
    let date :Date =new Date();
    console.log("todays date is ===",date,date.getMonth())
    let formateddate = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`
    console.log(formateddate)
    return(formateddate)
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
